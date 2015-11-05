# Git stash

Git stash takes the changes you have made to your working tree ("dirty") and puts them in a holding pattern until you are ready to re-apply them, so you have a fresh working directory ("clean").

Common use cases for using git stash are

- Needing to change focus from the task you are currently working on to a new task
- Forgetting to switch working branches
- Needing to apply changes to multiple branches

When these scenarios happen, figuring out what to do with your in-progress work might be difficult. Do you commit it even though it isn't "ready to be committed"? Do you create a new branch with your changes and come back to it? Do you need to delete your changes and just re-create the work when you can come back to this task? Do you manually copy-and-paste the changes across branches?

There are different solutions to these problems, but this section is going to review the use of `git stash` to store changes you have made in the event that you do not want to commit them to the project's history.

## How to use `git stash`

The `git stash` command enables you to store changes that live in the working directory (unstaged changes) and staging area (staged changes) for later use. These stored changes, like the `reflog`, are only reflected on your *local copy* of the repository. The latest stash is stored in `refs/stash` and older stashes are found in the `reflog` of that reference.

You can have multiple stashes, and they can be referenced by specifying the stash index, or they can be named using `reflog` syntax (example: `stash@{2.hours.ago}`). You can also add a descriptive message to stashes with `git stash save "message"`. Once you are ready to retrieve those changes, you can apply and delete them with `git pop` or apply and continue to store them with `git stash apply`.

### Commands

- `git stash`
  - Use this when you want to record the current working state, but want a clean working directory
  - This will "stash" your local modifications and revert the working directory to match the `HEAD` commit
  - `git stash push`
    - Saves local changes to the stash and then rolls back to `HEAD` in the working tree and index
      - `git stash push -m <message>` gives the message along with the stashed state
      - Options include `-m|--message <message>`, `-p|--patch`, `--`
- `git stash list`
  - This will list all the stashes you have available
- `git stash show`
  - Adds verbosity to `git stash list` and allows you to inspect the stashes
  - `stash@{0}` will always be the most recent stash available
- `git stash drop`
  - Removes the most recent stash entry from the list (i.e. `stash@{0}`)
  - `git stash drop <n>` will drop the specified stash index (example: `git stash drop 2`)
  - **Note:** The stash index will update when you drop a stash
- `git stash clear`
  - Deletes all stashes
- `git stash pop`
  - Removes a single stash and applies it on top of the current working tree
    - The working directory must match the index
    - The `git stash pop` can fail with conflicts and will not be removed from the stash list
      - You must resolve the conflicts manually and `git stash drop` afterwards
- `git stash apply`
  - Similar to `git stash pop`, but does not remove the stash from the stash list
  - Can be useful for applying changes to multiple branches
- `git stash branch`
  - `git stash branch <branchname>` creates and checks out a new branch named `<branchname>` starting from the point the stash was created and applies the stash; if it is successful, it drops the stash
  - Can be useful if you forgot to switch a new branch before starting working
- `git stash create`
  - Create a stash entry and return the object name without storing it in the ref namespace
    - Useful for scripts
    - Easily confused with `git stash push`, but doesn't return a clean working directory
- `git stash store`
  - Store a stash made with `git stash create`
    - Adds it to the stash ref and updates the stash reflog
    - Useful for scripts
    - Easily confused with `git stash push`, but doesn't return a clean working directory

---

## Stashing commits

Git mostly stays out of your way as you create and switch between branches, however, Git disallows switching branches when the switch could result in losing uncommitted changes.

This typically happens when the changes in your current working directory or staging area conflict with the branch you are trying to switch to. If the same file has been modified in your current branch and in the branch you're trying to check out, Git will prevent the branch switch to avoid overwriting those modifications.

In these situations, you have two options:

1. **Commit your changes**: `git commit`
2. **Stash your changes**: `git stash`

**Stashing** allows you to save changes that you don't want to commit immediately. You can apply the stashed changes later, even on a different branch.

### Basic stashing

You're in the middle of working on a feature when you need to switch branches to fix a bug. You don't want to commit half-done work, so you can stash the changes.

1. Modify a file in your repository but do not commit the changes.
2. Run `git stash`. Your changes are saved in a new stash and your working directory is reverted to the last commit.
3. Switch to another branch and make some changes.
4. Switch back to the original branch.

### Applying stashes

Now that the bug is fixed, you want to go back to working on the feature. You can apply the stashed changes to your working directory.

1. Run `git stash list`. This will show a list of all stashes. You should see the stash you created earlier.
2. Run `git stash apply`. This will apply the most recent stash to your working directory.

### Stashing specific files

Sometimes, you only want to stash changes to certain files. You can do this with `git stash push`.

1. Modify two files in your repository but do not commit the changes.
2. Run `git stash push -m "A descriptive message" <file>`. Replace `<file>` with the path to one of the files you modified. This will create a new stash with only the changes to that file.

### Dropping a stash

Once you've applied a stash and made sure you won't need it again, you can drop it to keep your stash list clean.

1. Run `git stash list`. This will show a list of all stashes.
2. Run `git stash drop <stash>`. Replace `<stash>` with the name of the stash you want to drop.

### Stashing untracked Files

By default, `git stash` will not stash untracked files. If you want to include untracked files, you can use `git stash -u`.

1. Create a new file in your repository but do not stage or commit it.
2. Run `git stash -u`. This will create a new stash that includes the untracked file.

Remember, stashing is a powerful tool that allows you to save changes without committing them. It's useful when you need to switch context quickly, but don't want to lose your current work.