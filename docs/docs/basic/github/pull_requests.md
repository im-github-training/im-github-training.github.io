# What is a Pull Request?

A pull request is a proposal to merge a set of changes from one **branch** into another **branch** within a repository or a repository fork.

<center>

![Merging Pull Requests](../../../img/merging-prs.png ':size=450px')

</center>

## Navigating a pull request

In a pull request, collaborators can review and discuss the proposed set of changes before they integrate the changes into the main codebase. Pull requests display the differences, or diffs, between the content in the source branch and the content in the target branch.

**Conversation**

Similar to the discussion thread on an Issue, a Pull Request contains a discussion about the changes being made to the repository. This discussion is found in the **Conversation** tab and also includes a record of all the commits made on the branch as well as assignments, labels and reviews that have been applied to the pull request.

**Commits**

The **Commits** tab contains more detailed information about who has made changes to the files. Clicking each commit ID will allow you to see the changes applied in that specific commit.

**Files changed**

The **Files changed** tab allows you to see cumulative effect of all the changes made on the branch. We call this the `diff`. Our diff isn't very interesting yet, but as we make changes your diff will become very colorful.

## Creating a pull request

> **Note:** A pull request is used to propose changes _between_ **branches**, so first create a branch and make some changes.

1. Click the *Pull Request* tab.
2. Click *New Pull Request*.
3. In the *base* dropdown, choose `main`
4. In the *compare* dropdown, choose the branch containing your changes.
5. Click *Create Pull Request*.
6. Enter a subject line and a concise description.
7. Select an assignee for the Pull Request.
8. Select a reviewer for the Pull Request.
9. Click on *Create pull request*.

## Reviewing a pull request

To provide feedback on proposed changes, GitHub offers three levels of commenting:

1. **General conversation**

  You can provide general comments on the Pull Request within the **Conversation** tab.

2. **Line comments**

  In the **Files changed** tab, you can hover over a line to see a blue icon. Clicking this icon will allow you to enter a comment on a specific line. These line level comments are a great way to give additional context on recommended changes. They will also be displayed in the **Conversation** tab.

3. **Review**

  When you are making line comments, you can also choose to **Start a Review**. When you create a review, you can group many line comments together with a general message: Comments, Approve, or Request Changes. Reviews have special power in GitHub when used in conjunction with protected branches.


## Merging a pull request

When you merge a feature branch, you are taking the content and history from the feature branch and adding it to the content and history of the `main` branch.


1. Navigate to your Pull Request

   ?> **Hint:** Use the Author or Assignee drop-downs to find your pull request quickly

1. Click **Conversation**
1. Scroll to the bottom of the Pull Request and click the **Merge pull request** button
1. Click **Confirm merge**
1. Click **Delete branch**
1. Click **Issues** and confirm your original issue has been closed

GitHub offers three different merge strategies for pull requests:

- **Create a merge commit**

  This is the traditional option that will perform a standard recursive merge. A new commit will be added that shows the point when the two branches were merged together.

- **Squash and merge**

  This option will take all the commits on your branch and compress them into a single commit. The commit messages will be preserved in the extended commit message for the commit, but the individual commits will be lost.

- **Rebase and merge**

  This option will take all the commits and replay them as if they just happened. This allows GitHub to perform a fast-forward merge (and avoids the addition of the merge commit).


## Pulling changes from a remote repository

`git pull` is a convenient shortcut for completing both `git fetch` and `git merge`in the same command:

```
$ git pull REMOTE-NAME BRANCH-NAME
# Grabs online updates and merges them with your local work

```

Because `pull` performs a merge on the retrieved changes, you should ensure that your local work is committed before running the `pull` command. If you run into [a merge conflict](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line) you cannot resolve, or if you decide to quit the merge, you can use `git merge --abort` to take the branch back to where it was in before you pulled.

## Updating your local repository

When you merged your Pull Request, you deleted the branch on GitHub, but this will not automatically update your local copy of the repository. Let's go back to our command line application and get everything in sync.

First, we need to get the changes we made on GitHub into our local copy of the repository:

1. Start by switching back to your default branch: `git switch main`
1. Retrieve all the changes from GitHub: `git pull`

`git pull` is a combination command that retrieves all the changes from GitHub and then updates the branch you are currently on to include the changes from the remote. The two separate commands being run are `git fetch` and `git merge`

## Cleaning up the unneeded branches

If you type `git branch --all` you will probably see that, even though you deleted your branch on the remote, it is still listed in your local copy of the repository, both as a local branch and as a read-only remote tracking branch. Let's get rid of those extra branches.

1. Take a look at your local branches: `git branch --all`
1. Let's see which branches are safe to delete: `git branch --merged`
1. Delete the local branch: `git branch -d <branch-name>`
1. Take another look at the list: `git branch --all`
1. Your local branch is gone, but the remote tracking branch is still there. Delete the remote tracking branch: `git pull --prune`

> Adding the `--merged` option to the `git branch` command allows you to see which branches do not contain unique work when compared to the checked out branch. In this case, since we are checked out to main, we will use this command to ensure all the changes on our feature branch have been merged to production before we delete the branch.

If you would like pruning of the remote tracking branches to be set as your default behavior when you pull, you can use the following configuration option: `git config --global fetch.prune true`.

## Activity: Creating a pull request

Pull Requests are used to propose changes to the project files. A pull request introduces an action that addresses an Issue. A Pull Request is considered a "work in progress" until it is merged into the project.

Now that you have started to change your file, you will open a pull request to discuss the file with your teammates. Follow these steps to create a Pull Request in the class repository:

1. Click the *Pull Request* tab.
1. Click *New Pull Request*.
1. In the *base* dropdown, choose `main`
1. In the *compare* dropdown, choose your branch.
1. Type a subject line and enter a comment.
1. Use Markdown formatting to add a header and a checklist to your Pull Request.
1. Include one of the keywords: `closes`, `fixes`, or `resolves` followed by the issue number you created earlier to note which Issue the Pull Request should close. Example: `This resolves #3`
1. Click *Preview* to see how your Pull Request will look.
1. Assign the Pull Request to yourself.
1. Select your partner as a Reviewer for the Pull Request.
1. Click *Create pull request*.

> When you navigate to the class repository, you should see a banner at the top of the page indicating you have recently pushed branches, along with a button that reads *Compare & pull request*. This helpful button will automatically start the pull request process between your branch and the repository's default branch.
