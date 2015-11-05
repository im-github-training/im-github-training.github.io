# InfoMagnus GitHub Training

Welcome to the InfoMagnus GitHub Training repository!

The content is all written in [Markdown](https://guides.github.com/features/mastering-markdown/), and the scripts are shell scripts.

## Technologies used

- GitHub Pages
- [docsify](https://docsify.js.org)
- [Mermaid.js](https://mermaid.js.org/)
- [mermaid-docsify](https://github.com/Leward/mermaid-docsify)
- [Visual Studio Code](https://code.visualstudio.com/)
- [VSCodeExt-docsify-Preview](https://github.com/dzylikecode/VSCodeExt-docsify-Preview)

## Deploying the manual

These manuals are designed to be generated using [docsify](https://docsify.js.org). To get your own manuals up and running, all you have to do is:

1. Fork this repository
2. In your fork, click on **Settings**
3. Scroll down to the GitHub Pages section, and set **Source:** to `main branch /docs folder`.
4. Click **Save**.
5. Return to the GitHub Pages section of Settings, and you'll receive the URL of your published manual.

## Making changes

In general, you'll find all of the manual content in the [`docs/`](docs/) folder of this repository. All content is written in Markdown, and it's all stitched together in [`docs/_sidebar.md`](docs/_sidebar.md), which specifies the order and hierarchy of the content.

### Visual Studio Code

The repository includes a `.devcontainer` which makes editing the documentation in `vscode` easy.

#### Launching the devcontainer

When you first open the workspace, you should get the following pop-up:

![Dev Container Pop-up](img/devcontainer.png)

Select `Reopen in Container`.

Alternatively,type `Ctrl+Shift+P` and select `Dev Containers: Reopen in Container`.

#### Pasting images

The workspace's `.vscode/settings.json` includes the following setting, which allows you to `Ctrl+V` images right into your `.md` files!

```json
    "markdown.copyFiles.destination": {
        "**/*": "img/"
    }
```

### Docsify

You shouldn't need to, but if you need to mess around with the docsify configuration, the official [docsify documentation](https://docsify.js.org/#/?id=docsify) is your best bet for getting up to speed.

## Previewing changes on your machine

### Visual Studio Code

The `.devcontainer` is setup with the [VSCodeExt-docsify-Preview](https://github.com/dzylikecode/VSCodeExt-docsify-Preview) Visual Studio Code extension.

To open a preview window in `vscode` type `Ctrl+Shift+P` and select `docsify: Open the full Preview`.

### Web Browser

You can install, and serve the contents of the `docs/` folder locally with minimal setup. The steps are thoroughly described in the [doscify quick start](https://docsify.js.org/#/quickstart) guide.

You can also simply run the following:

```shell
docsify serve docs
```

## License

Please see the [license](LICENSE) for detailed information. When using the GitHub logos, be sure to follow the [GitHub Logos and Usage](https://github.com/logos) guidelines.
