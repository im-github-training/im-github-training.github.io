### Updating your local repository

When you merged your Pull Request, you deleted the branch on GitHub, but this will not automatically update your local copy of the repository. Let's go back to our command line application and get everything in sync.

First, we need to get the changes we made on GitHub into our local copy of the repository:

1. Start by switching back to your default branch: `git switch main`
1. Retrieve all the changes from GitHub: `git pull`

`git pull` is a combination command that retrieves all the changes from GitHub and then updates the branch you are currently on to include the changes from the remote. The two separate commands being run are `git fetch` and `git merge`

### Cleaning up the unneeded branches

If you type `git branch --all` you will probably see that, even though you deleted your branch on the remote, it is still listed in your local copy of the repository, both as a local branch and as a read-only remote tracking branch. Let's get rid of those extra branches.

1. Take a look at your local branches: `git branch --all`
1. Let's see which branches are safe to delete: `git branch --merged`
1. Delete the local branch: `git branch -d <branch-name>`
1. Take another look at the list: `git branch --all`
1. Your local branch is gone, but the remote tracking branch is still there. Delete the remote tracking branch: `git pull --prune`

> Adding the `--merged` option to the `git branch` command allows you to see which branches do not contain unique work when compared to the checked out branch. In this case, since we are checked out to main, we will use this command to ensure all the changes on our feature branch have been merged to production before we delete the branch.

If you would like pruning of the remote tracking branches to be set as your default behavior when you pull, you can use the following configuration option: `git config --global fetch.prune true`.
