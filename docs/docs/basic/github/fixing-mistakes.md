# Fixing mistakes

As a repository administrator, it is sometimes necessary to roll back changes made via **commit** or **pull request**.

## Reverting a commit

Reverting a commit is the simplest and safest way to 'undo' a commit while preserving a repository's history.

To revert a commit: 

- Clone the repository that you'd like to fix
- Find the ID of the commit that you would like to revert
- Use `git revert <commit id>` to create a new commit that undoes the changes introduced by the specified commit
- Use `git push` to push the new commit to the repository

## Resetting a branch

Resetting a branch is useful when you need to completely remove a commit from a repository.  This method requires rewriting a repository's history, so should be used with caution.

- Clone the repository that you'd like to fix
- Find the ID of the commit that you would like to reset the branch to
- Use `git reset <commit id>` to move the current branch to the specified commit.
- Use `git push --force` to push the change to the repository

## Reverting a pull request

Reverting a pull request creates a new pull request that contains one revert of the merge commit from the original merged pull request. 

> **Note:** To revert pull requests, you must have write permissions in the repository.

> **Note:** You may need to revert the individual commits in your pull request if either of the following is true.
> 
> - Reverting the pull request causes merge conflicts
> - The original pull request was not originally merged on GitHub. For example, someone could have merged the pull request using a fast-forward merge on the command line.
> 
> For more information about using Git to manually revert individual commits, see [Git revert](https://git-scm.com/docs/git-revert.html) in the Git documentation.

1. Under your repository name, click  Pull requests.

    ![TBD](../../../img/repo-tabs-pull-requests-global-nav-update.webp)

1. In the "Pull Requests" list, click the pull request you'd like to revert.
1. Near the bottom of the pull request, click **Revert**. If the **Revert** option isn't displayed, you'll need to ask the repository administrator for write permissions.

   ![Screenshot of a pull request's timeline. The "Revert" button is outlined in dark orange.](../../../img/revert-pull-request-link.webp)

1. Merge the resulting pull request.

## Using Filter-Repo

`git filter-repo` is a faster and more flexible replacement for `git filter-branch`, designed to rewrite repository history. It can be used to delete sensitive data, change author/committer details, rename tags and branches, or perform other complex history rewrites.

1. Install git-filter-repo

    `git filter-repo` is not bundled with git. You need to install it separately. Here's how to install it using pip:

    ```bash
    python3 -m pip install --user git-filter-repo
    ```

2. Clone the repository that you'd like to fix

3. Use git-filter-repo

    **Example 1: Remove a File from Every Commit**

    To remove a file named `passwords.txt` from every commit:

    ```bash
    git filter-repo --path passwords.txt --invert-paths
    ```

    **Example 2: Change Email Address**

    To change an old email address to a new one across all commits:

    ```bash
    git filter-repo --mailmap my-mailmap
    ```

    In this command, `my-mailmap` is a file that should look like this:

    ```
    Old Name <old@email.com> New Name <new@email.com>
    ```

    **Example 3: Replace Text in Every File**

    To replace all occurrences of `oldtext` with `newtext` in every file:

    ```bash
    git filter-repo --replace-text expressions.txt
    ```

    In this command, `expressions.txt` is a file that should look like this:

    ```
    literal:oldtext==>newtext
    ```

4. Push Changes to Remote Repository

After you've rewritten history, you can force push your changes to the remote repository. Be careful, this will overwrite the remote repository and can cause problems for anyone who has cloned or forked your repository, or has outstanding branches.

```bash
git push --force origin main
```