# What is a Branch?

Branches are lightweight, movable pointers to a specific commit that allow separate lines of development without impacting the main codebase.

* When you create a ***branch***, Git creates a ***reference*** and points it at your ***current  commit***
* As you make ***new commits***, Git automatically updates this ***reference*** to the ***latest commit***
* In this way, a ***branch reference*** always represents the latest line of development in a ***branch***

## Branch locality

Similar to repositories, Git has a concept of **local** and **remote** ***branches***.

* **Local branches** exist in your *local* repository and are branches that only you (the local user) can see. These branches can be created, deleted, renamed, and modified without any other collaborators knowing about them.
* **Remote branches** are references to the state of branches in your remote repositories.  They act as bookmarks to remind you where the branches on your remote repositories were the last time you connected to them.

## Listing branches

To view the existing ***local*** branches in a repository:

```bash
> git branch
* main
  new-feature
```

> The `*` next to main indicates that main is the currently active branch.

To view the existing ***remote*** branches in a repository:

```bash
> git branch --remote
  origin/HEAD -> origin/main
  origin/main
  upstream/main
```

> `-r` is the short form of `--remote`

## Creating branches

To create a new branch:

```bash
git branch <branchname>
```

> This creates a new branch named, however, it does not switch to the new branch.

## Deleting branches

To delete a branch:

```bash
git branch --delete <branchname>
```

> `-d` is the short form of `--delete`

!> If you try to delete a branch with ***unmerged*** changes, Git will prevent you from doing so to avoid data loss.

To delete branches with unmerged changes:

```bash
git branch -D <branchname>
```

> This forcefully deletes the unmerged `<branchname>` branch, discarding any unmerged changes.

## Renaming branches

To rename a branch:

```bash
git branch -m <old-name> <new-name>
```

## Switching branches

To switch to a branch:

```bash
git switch <branch>
```

To create a new branch and switch to it in one command:

```bash
git switch -c <new-branch>
```

## Merging changes

Git uses three primary merge strategies:

1. **Recursive/three-way:** A recursive merge means that changes have been made on both the base branch and the feature branch and git needs to recursively combine them. With a recursive merge, a new "merge commit" is made to mark the point in time when the two branches came together. This merge commit is used the most often when you click merge on a pull request.
2. **Fast-forward:** A fast-forward merge assumes that no changes have been made on the base branch since the feature branch was created. This means that the branch pointer for base can simply be "fast forwarded" to point to the same commit as the feature branch.
3. **Octopus:** A merge of 3 or more branches is an octopus merge. This will also create a merge commit with multiple parents.


### Basic merging

Let's start with a basic example. Suppose you have a repository with a `main` branch and a ``feature`` branch. You've made some changes in the ``feature`` branch and you want to bring those changes into the `main` branch.

First, switch to the `main` branch:

```bash
git switch main
```

Then, merge the `feature` branch into the `main` branch:

```bash
git merge feature
```

- If the branches have diverged, Git will create a new commit to combine the changes from the `feature` branch into the `main` branch.
- If the branches have not diverged (if the `feature` branch was created from the `main` branch and the `main` branch has not changed since then), Git will perform a "fast-forward" merge, meaning it will just move the `main` branch pointer to point at the latest commit on the `feature` branch.

### Merging with conflicts

Merge conflicts occur when the same part of your code is changed in two branches that you're trying to merge together, and Git can't determine which change should take precedence.

When this happens, Git halts the merge process and requires manual intervention to resolve the conflict, after which you can continue with the merge.

For example, let's say you have a conflict. When you try to merge, you'll see an output like this:

```bash
> git merge feature
Auto-merging file.txt
CONFLICT (content): Merge conflict in file.txt
Automatic merge failed; fix conflicts and then commit the result.
```

To *resolve* the conflicts, open the file with conflicts in your text editor.

You'll see the conflicting changes marked like this:

```bash
<<<<<<< HEAD
This is some content from the main branch.
=======
This is some content from the feature branch.
>>>>>>> feature
```

Edit the file to `resolve` the conflicts, then add the file to the staging area:

```bash
git add file.txt
```

And commit the changes:

```bash
git commit -m "Resolved merge conflict"
```

### Aborting a merge

To stop an in-progress merge and return your repository to the state it was in before you started the merge:

```bash
git merge --abort
```

## Cherry-picking commits

Cherry-picking enables you to pick a commit from one branch and apply it to your current branch. This is useful when you want to apply some commit without merging or rebasing the whole branch.

To cherry-pick a commit:

```bash
git cherry-pick <commit-id>
```

To cherry-pick multiple commits:

```bash
git cherry-pick <commit-id> <commit-id>
```

To continue a cherry-pick after resolving conflicts:

```bash
git cherry-pick --continue
```

To abort a cherry-pick:

```bash
git cherry-pick --abort
```

## Quiz

<div class="quizdown">
  <div id="branches-quiz.js" ></div>
</div>
