# EnvToggler

**EnvToggler** is a Visual Studio Code extension that allows you to switch between multiple `.env` environment configuration files directly from the status bar. It simplifies the process of managing different environments like development, testing, and production by providing a quick and intuitive way to activate the desired environment.

## Donations

If you find this extension helpful, consider supporting the developer by buying them a coffee:

<a href="https://www.buymeacoffee.com/xubylelec" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## Features

- **Quick Environment Switching**

  - Detects all `.env.*` files in your workspace.
  - Lets you switch the active environment via the command palette or status bar.
  - Automatically copies the selected file to `.env` in the root of your workspace.

- **Status Bar Indicator**

  - Shows the current active environment in the status bar.
  - Useful for avoiding mistakes when running or deploying apps.

- **Works with Any Stack**

  - Supports any backend or frontend project using `.env` files: Node.js, Python, Docker Compose, React, etc.

- **Safe Overwrite**
  - Ensures `.env` is always the correct one by safely overwriting it from the selected `.env.*` file.

## Example

Here’s an example workflow:

1. You have the following files in your project:

   ```.env
   .env.dev
   .env.prod
   .env.test
   ```

2. From the command palette (`Ctrl+Shift+P`), run:  
   **"EnvToggler: Select Environment"**

3. Pick one, e.g., `.env.dev`, and EnvToggler will:
   - Copy `.env.dev` to `.env`
   - Update the status bar to show: `Env: .env.dev`

## Installation

1. Open Visual Studio Code.
2. Go to the Extensions view (`Ctrl+Shift+X`).
3. Search for `EnvToggler`.
4. Click **Install**.

Alternatively, install it from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=xubylele.envtoggler) _(URL provisional)_.

## Usage

1. Create `.env.dev`, `.env.test`, `.env.prod`, or any custom `.env.*` files in your root folder.
2. Open the command palette (`Ctrl+Shift+P`) and run:  
   **"EnvToggler: Select Environment"**
3. Select your desired environment.
4. The selected file will overwrite `.env` and will be shown in the status bar.

## Roadmap

- [ ] Auto-reload terminals/tasks after environment change
- [ ] Workspace-specific presets
- [ ] Integration with Docker Compose and PM2
- [ ] Secret highlighting and warnings
- [ ] History of selected environments

## Contributing

If you want to contribute to this project, feel free to submit issues or pull requests in the [GitHub repository](https://github.com/xubylele/envtoggler) _(placeholder)_

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
