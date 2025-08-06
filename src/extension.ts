import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import I18n, { setupI18n } from './translations';
import { getEnvFiles } from './envWatcher';

export function activate(context: vscode.ExtensionContext) {
	setupI18n(context);

	const statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
	statusBar.command = 'envToggler.selectEnv';
	context.subscriptions.push(statusBar);

	const updateStatusBar = (envFileName: string | undefined) => {
		statusBar.text = I18n.__('statusBar.text', { env: envFileName ?? 'None' });
		statusBar.show();
	};

	const command = vscode.commands.registerCommand('envToggler.selectEnv', async () => {
		const envFiles = await getEnvFiles();
		if (envFiles.length === 0) {
			vscode.window.showWarningMessage(I18n.__('messages.noEnvFiles'));
			return;
		}

		const selectedFile = await vscode.window.showQuickPick(
			envFiles.map(file => path.basename(file.fsPath)),
			{ placeHolder: I18n.__('messages.selectEnv.placeholder') }
		);

		if (!selectedFile) {
			return;
		}

		const workspaceFolder = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
		if (!workspaceFolder) {
			vscode.window.showErrorMessage(I18n.__('messages.noWorkspace'));
			return;
		}

		const fromPath = path.join(workspaceFolder, selectedFile);
		const toPath = path.join(workspaceFolder, '.env');

		try {
			fs.copyFileSync(fromPath, toPath);
			vscode.window.showInformationMessage(I18n.__('messages.fileCopied', selectedFile));
			updateStatusBar(selectedFile);
		} catch (err: any) {
			vscode.window.showErrorMessage(I18n.__('messages.fileCopyFailed', selectedFile, err.message));
		}
	});

	context.subscriptions.push(command);

	getEnvFiles().then(files => {
		const exists = fs.existsSync(path.join(vscode.workspace.workspaceFolders?.[0].uri.fsPath || '', '.env'));
		const activeName = exists ? '.env' : undefined;
		updateStatusBar(activeName);
	});
}

export function deactivate() { }
