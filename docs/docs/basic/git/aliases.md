# Aliases

Aliases allow you to create custom shortcuts for Git commands.

## Creating an alias

For example, let's create an alias for the following command:

```bash
git log --oneline --graph --decorate --all
```

To create the alias:

```bash
git config --global alias.lol "log --oneline --graph --decorate --all"
```

To use the alias:

```bash
git lol
```

## Example aliases

To edit your global aliases manually, you can open the `.gitconfig` file with your default editor:

```bash
git config --global alias.ec "config --global -e"
```

To switch to another branch, you can make a quick shortcut:

```bash
git config --global alias.sw "switch"
```

To create and switch to a brand-new branch, you can easily extend your existing shortcut:

```bash
git config --global alias.swc "switch -c"
```

You can create aliases that only call one command:

```bash
git config --global alias.s "status -s"
```

Clean up branches quickly and easily:

```bash
git config alias.dlb '!git checkout <DEFAULT-BRANCH> && git pull --prune && git branch --merged | grep -v "\*" | xargs -n 1 git branch -d'
```

## References

- *[git-scm.com/book/en/v2/Git-Basics-Git-Aliases](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases)* A helpful overview of some of the most common git aliases.
