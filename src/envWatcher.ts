import * as vscode from 'vscode';

export async function getEnvFiles(): Promise<vscode.Uri[]> {
  const envFiles = await vscode.workspace.findFiles('**/.env*', '**/node_modules/**');
  return envFiles;
}
