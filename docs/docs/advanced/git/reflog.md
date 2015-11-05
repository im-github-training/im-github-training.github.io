# What is the reflog?

Git's `reflog` is a reference log.  Every action in Git that changes `HEAD` is recorded in the reflog, including actions like creating, deleting, or checking out branches, committing changes, performing a rebase, or a reset. Each entry in the reflog represents a state of the repository and is associated with a timestamp.

## Accessing the Reflog

You can view the reflog with the command `git reflog`:

```bash
a1b2c3d (HEAD -> main) HEAD@{0}: commit: add feature
d4e5f6g HEAD@{1}: checkout: moving from feature-branch to main
g7h8i9j HEAD@{2}: commit: update readme
```

Each line represents a state of the repository. The commit ID at the beginning of each line is the commit that HEAD pointed to at that time.

> The `HEAD@{n}` syntax is a way to reference these states. For example, `HEAD@{1}` refers to the previous state.

## Recovering Lost Commits

One of the most powerful uses of the reflog is to recover "lost" commits. If you accidentally delete a branch, or perform a hard reset and lose some commits, you can use the reflog to find the commit you lost and create a new branch pointing to it.

For example, if you deleted a branch but then realized you needed a commit from it, you could do:

```bash
git checkout -b recovered-branch HEAD@{n}
```

Replace `n` with the reflog entry number for the state you want to recover. This will create a new branch named `recovered-branch` pointing to that commit.

## Limitations

By default, **entries in the reflog are kept for 90 days**. This is configurable, but after this time, entries are expired and pruned, and the associated commits may be garbage collected.

Also, remember that the **reflog is local to your repository**. Actions recorded in the reflog are not transferred between repositories when you push or pull.
