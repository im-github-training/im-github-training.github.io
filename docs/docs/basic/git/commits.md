# What is a Commit?

A **commit** is a **snapshot** of an _entire_ repository at a given point in time.

## A typical workflow

As we mentioned in [How Git Works](git_101?id=how-git-works), Git has a two-step process to save changes to a repository.

![alt text](../../../img/image-24.png ':size=550px')

In practice, this looks like:

1. You make changes in your **working directory**
2. When you're ready to save these changes, you **stage** them using `git add`
3. Then you the **commit** the staged changes to the repository using `git commit`

## Staging changes

### git add

Copies changes from the working directory to the staging area.

#### Staging files

The simplest way to use `git add` is to add all changes (new, modified, and removed files) in the current directory and its subdirectories:

```bash
git add .
```

To add changes from a specific file:

```bash
git add filename
```

To add multiple files at once:

```bash
git add filename1 filename2 ...
```

#### Staging hunks

To stage only _some_ of the changes made to a file:

```bash
git add -p filename
```

> This command will prompt you to stage individual changes (or 'hunks') in the file. You can choose to stage, skip, or split each hunk.

#### Viewing staged changes

To view staged changes:

```bash
git diff --staged
```

> This command will show you a diff of what's been staged but not yet committed.

#### Unstaging changes

To unstage previously staged files:

```bash
git restore --staged filename
```

> This command will remove the changes from the staging area but won't alter the working directory. The changes will still be there, but they won't be included in the next commit.

## Committing changes

### git commit

Saves a snapshot of the changes in staging area to the local repository as a commit.

#### Committing staged changes

The simplest way to use `git commit` is to commit all staged changes with a message:

```bash
git commit -m "Your commit message"
```

> The `-m` option allows you to write the commit message directly in the command line

#### Committing all changes

To commit all changes to the working directory:

```bash
git commit -a -m "Your commit message"
```

> The `-a` option automatically stages every file that is tracked and has been modified or deleted

#### Amending the last commit

To change the last commit (to modify the commit message or add new changes):

```bash
git commit --amend -m "New commit message"
```

## Viewing history

### git log

To view the commit history of the repository:

```bash
git log
```

To view the commit history in a more compact format:

```bash
git log --oneline
```

To view a visual representation of the commit history:

```bash
git log --oneline --graph --decorate --all
```

#### Example output

```bash
> git log

commit 4a8e17d7f593a3c0ad626648175e8b4858e77f2c (HEAD -> main)
Author: Your Name <your.email@example.com>
Date:   Thu Sep 30 14:33:50 2021 -0700

    Update file1.txt

commit 9d3a192570a772443332d6c55b3002a5d7e2c1b5
Author: Your Name <your.email@example.com>
Date:   Thu Sep 30 14:31:26 2021 -0700

    Initial commit
```

```bash
> git log --oneline
4a8e17d (HEAD -> main) Update file1.txt
9d3a192 Initial commit
```

```bash
> git log --oneline --graph --decorate --all
* 7a8b9cd (HEAD -> main, origin/main) Fix bug
* 6b7c8de Implement feature
| * 5c6d7ef (feature-branch) Update feature
| * 4e5f6dg Add feature
|/
* 3d4e5cf Refactor code
* 2c3d4bf Update README
* 1b2c3ad Initial commit
```

## Comparing changes

### git diff

Allows you to see the difference between any two refs in a repository.

The diagram below shows how you can compare the content of your working area, staging, and HEAD (or the most recent commit):

<center>

![Git Diff Options](../../../img/diff-options.png ':size=500')

</center>

For example:

```bash
> git diff
diff --git a/file1.txt b/file1.txt
index e965047..2c7ee5a 100644
--- a/file1.txt
+++ b/file1.txt
@@ -1 +1,2 @@
 Hello, World!
+Hello, Git!
```

#### Common flags

- `git diff --staged`
- `git diff HEAD`
- `git diff main feature`
- `git diff origin/main main`

## Fixing mistakes

### git reset

`git reset` allows you to manipulate the state of your Git repository and has three main modes:

- `--soft` reset moves the HEAD pointer to a specified commit, but it leaves the staging area and the working directory unchanged. This is useful if you want to keep your changes, but move the HEAD pointer.

  ```bash
  git reset --soft <commit>
  ```

- `--mixed` reset (the default mode) moves the HEAD pointer and alters the staging area to match the specified commit, but it leaves the working directory unchanged. This is useful if you want to undo a commit but keep your changes.

  ```bash
  git reset --mixed <commit>
  # or
  git reset <commit>
  ```

- `--hard` reset moves the HEAD pointer, alters the staging area, and alters the working directory to match the specified commit. This effectively undoes all changes since the specified commit. Be careful with this mode, as it can permanently delete your changes.

  ```bash
  git reset --hard <commit>
  ```

### git revert

`git revert` is a safe way to undo changes.  It works by creating a new commit that undoes changes made in a previous commit.  It's useful for fixing mistakes and for removing changes without rewriting the project's history.

**Reverting with No Commit**

If you run `git revert` without a commit hash, Git will ask you to enter a commit message for a new commit that undoes the changes made in the last commit:

```bash
git revert
```

**Reverting a Single Commit**

If you want to undo the changes made in a specific commit, you can use:

```bash
git revert <commit-hash>
```

**Reverting a Range of Commits**

If you've made mistakes in a range of commits and want to undo all of them, you can use:

```bash
git revert <older-commit-hash>..<newer-commit-hash>
```

>Note: The older commit is not included in the range. If you want to include it, use three dots instead of two:
>
> ```bash
> git revert <older-commit-hash>...<newer-commit-hash>
> ```

### git rebase

Rebasing enables you to modify your commit history in a variety of ways. For example, you can use it to reorder commits, edit them, squash multiple commits into one, and much more.

#### Basic rebase

![Git Rebase](../../../img/git-rebase.png)

One of the most common uses of rebase is to eliminate recursive merges and create a linear history.
TODO:

#### Interactive rebase

**Interactive rebase** using `--interactive` or `-i` allows you to modify individual commits as they are moved. This is useful for combining, reordering, or modifying commits.

```bash
# Start an interactive rebase
git rebase -i HEAD~3
```

This command will start an interactive rebase for the last 3 commits. Git will open a text editor with a list of the commits and options for what to do with each commit:

```bash
pick 1fc6c95 do something
pick 6b2481b do something else
pick dd1475d changed some things
```

You can replace `pick` with an action keyword:

- `reword`: Change the commit message.
- `edit`: Amend the commit.
- `squash`: Combine this commit with the previous one.
- `fixup`: Like `squash`, but discard this commit's log message.
- `drop`: Remove the commit.

Save and close the file to continue the rebase.

**Aborting a Rebase**

If you want to stop the rebase process at any time, you can use `git rebase --abort`:

```bash
git rebase --abort
```

This will stop the rebase and return your repository to the state it was in before you started the rebase.

## Quiz

<div class="quizdown">
  <div id="commit-quiz.js" ></div>
</div>
