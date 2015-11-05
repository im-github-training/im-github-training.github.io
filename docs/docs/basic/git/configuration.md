# Configuring Git

Git is highly configurable and supports a large number of configuration options: [git-config](https://git-scm.com/docs/git-config).

This page contains a curated list of useful options.

## Configuration scope

Git allows you to set configuration options at three different levels.

- `--system` These are system-wide configurations. They apply to all users on this computer.
- `--global` These are the user level configurations. They only apply to your user account.
- `--local` These are the repository level configurations. They only apply to the specific repository where they are set.

> The default value for `git config` is `--local`.

If you would like to see which config settings have been added automatically, you can type

```sh
git config --list
```

This will automatically read from each of the three config files and list the setting they contain.

You can also narrow the list to a specific configuration level by including it before the list option:

```sh
git config --global --list
```

## Setting the default branch name

```sh
hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint:
hint:   git config --global init.defaultBranch <name>
hint:
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint:
hint:   git branch -m <name>
Initialized empty Git repository in /workspaces/1-introduction-to-github-master/tem/.git/
```

The `init.defaultBranch` is a configuration option in Git that sets the name of the initial branch when creating a new repository.

By default, Git uses `master` as the name of the initial branch. However, you can change this default name using the `init.defaultBranch` configuration option.

For example, if you want to use `main` instead of `master` as the default branch name, you can set this configuration option like this:

```bash
git config --global init.defaultBranch main
```

After running this command, any new repositories you create with `git init` will have an initial branch named `main`.

## Automatically setting up remotes

The `push.autosetupremote` is a Git configuration option that controls the behavior of `git push` when a new branch is created.

When you create a new branch with `git branch` or `git checkout -b`, Git can automatically set up a branch in your remote repository to track your new local branch.

The `push.autosetupremote` option can have three possible values:

- `always` Whenever you create a new branch, Git will automatically set up a branch in your remote repository to track your new local branch. This is the same as using the `--track` option with `git branch` or `git checkout -b`.

- `matching` Git will only set up tracking for branches with the same name in the remote repository. This is the default behavior.

- `nothing` Git will not automatically set up tracking for new branches.

You can set this option with the `git config` command. For example, to set it to `always`, you would use:

```bash
git config --global push.autosetupremote always
```

This command sets the `push.autosetupremote` option to `always` for all repositories on your system. If you want to set it for a single repository, you can omit the `--global` option.

## Setting a default editor

The `core.editor` configuration option in Git specifies the text editor that Git will use for commit messages, interactive rebase, and other operations that require user input.

By default, Git uses the system's default editor, which is usually Vim or Nano on Unix-based systems, and Notepad on Windows.

If you want to change the default editor to something else, you can use the `git config` command with the `core.editor` option. For example, to set the editor to VS Code, you can use:

```bash
git config --global core.editor "code --wait"
```

In this command, `--global` means that the configuration will apply to all repositories on your system. If you want to set the editor for a single repository, you can omit the `--global` option.

The `"code --wait"` argument tells Git to use VS Code as the editor, and to wait until the files are closed before continuing.

You can replace `"code --wait"` with the command for your preferred text editor.

## Changing the diff syntax

The `merge.conflictstyle` configuration option in Git specifies the format of conflict markers when a merge conflict occurs.

By default, Git uses the `merge` style, which shows a `<<<<<<<`, a `=======`, and a `>>>>>>>` to mark the beginning of the conflicting changes from the current branch, the separation between the conflicting changes, and the end of the conflicting changes from the other branch, respectively.

If you set `merge.conflictstyle` to `diff3`, Git will use a slightly different format that includes the common ancestors of the conflicting changes. This can give you more context and make it easier to resolve the conflict.

Here's how you can set `merge.conflictstyle` to `diff3`:

```bash
git config --global merge.conflictstyle diff3
```

With `diff3` style, conflict markers look like this:

```bash
<<<<<<< HEAD
This is some content from the current branch.
||||||| merged common ancestors
This is some content from the common ancestor.
=======
This is some content from the other branch.
>>>>>>> other-branch
```

The `||||||| merged common ancestors` marker and the content below it show what the conflicting section looked like in the common ancestor of the two branches.

## Pushing tags

The `push.followTags` configuration option in Git specifies whether tags will be pushed along with your commits when you use `git push`.

By default, Git does not push tags when you use `git push`. You have to use `git push --tags` to push tags to the remote repository.

If you set `push.followTags` to `true`, Git will automatically push tags when you push commits, as long as the tags are reachable by the commits. This can be convenient if you frequently create tags and want them to be pushed automatically.

Here's how you can set `push.followTags` to `true`:

```bash
git config --global push.followTags true
```

## Rebase on pull

The `branch.autosetuprebase` configuration option in Git specifies whether new branches should be set up to automatically rebase when pulled.

By default, when you pull a branch, Git performs a merge, which can lead to a non-linear history. If you prefer a linear history, you can use `git pull --rebase` to rebase instead of merging.

If you set `branch.autosetuprebase` to `always`, Git will automatically set up new branches to rebase when pulled. This means that you don't have to use `--rebase` with `git pull`; Git will rebase by default.

Here's how you can set `branch.autosetuprebase` to `always`:

```bash
git config --global branch.autosetuprebase always
```

The `branch.autosetuprebase` option can have three possible values:

- `never`: The default behavior. Git will merge when you pull.
- `always`: Git will rebase when you pull.
- `remote`: Git will rebase when you pull a branch that was checked out from a remote tracking branch.

## Setting merge tool

The `merge.tool` configuration option in Git specifies the merge tool that Git will use when conflicts occur.

Git can use a variety of merge tools, such as `vimdiff`, `meld`, `kdiff3`, `opendiff`, and others. The merge tool you choose should be installed on your system and available in your `PATH`.

Here's how you can set `merge.tool` to use `vimdiff`:

```bash
git config --global merge.tool vimdiff
```

When a merge conflict occurs, you can use the `git mergetool` command to start the merge tool and resolve the conflict:

```bash
git mergetool
```

This command will start the merge tool specified by `merge.tool` and show the conflicting changes. You can then resolve the conflict in the merge tool.

## Handling line endings

Different systems handle line endings and line breaks differently. If you open a file created on another system and do not have this config option set, Git will think you made changes to the file based on the way your system handles this type of file.

- **Windows users:** `git config --global core.autocrlf true`
- **Mac users:** `git config --global core.autocrlf input`
