const rawQuizdown = `
---
shuffleAnswers: true
---

# What are two common uses of Git commits?
- [ ] Reverting changes
- [ ] Deleting files
- [ ] Renaming branches
- [x] Re-writing commit messages

# Which Git command is used to create a new commit that undoes the changes made in a previous commit?
- [ ] git push
- [ ] git commit
- [ ] git branch
- [x] git revert

# What is the purpose of \`git rebase -i\`?
- [ ] Adding new files to a commit
- [ ] Creating a new branch
- [ ] Deleting a commit
- [x] Reordering commit history

# How do you start an interactive rebase in Git?
- [ ] git rebase -f
- [ ] git rebase -m
- [ ] git rebase -r
- [x] git rebase -i

# What should you do if there are conflicts after reordering commits during an interactive rebase?
- [ ] Ignore the conflicts and continue
- [ ] Delete the conflicting commits
- [ ] Abort the rebase and start over
- [x] Resolve the conflicts and continue

# When should you force push your changes after an interactive rebase?
- [ ] Never
- [ ] Only if there are conflicts
- [ ] Only if you've already pushed the branch
- [x] If you've already pushed the branch

# What command can you use to verify the new order of commits after an interactive rebase?
- [ ] git reset
- [ ] git checkout
- [ ] git diff
- [x] git log

# What is the reflog in Git?
- [ ] A log of remote commits
- [ ] A log of deleted branches
- [ ] A log of commit messages
- [x] A record of every place HEAD has been

# Is the reflog pushed to the remote repository?
- [ ] Yes
- [ ] No
- [ ] It depends
- [x] No, it is only local

# How long are unreachable commits displayed in the reflog by default?
- [ ] 7 days
- [ ] 30 days
- [ ] 60 days
- [x] 90 days

Which command is used to create a new commit that undoes the changes made in a previous commit?

- [ ] \`git reset\`
- [ ] \`git checkout\`
- [x] \`git revert\`
- [ ] \`git commit --amend\`

## What is the purpose of \`git rebase -i\`?

- [ ] To create a new branch
- [ ] To merge branches
- [x] To reorder commit history
- [ ] To undo the last commit

## When using \`git rebase -i\`, how can you reorder commits?

- [ ] By using \`git commit --amend\`
- [ ] By using \`git reset\`
- [ ] By modifying the commit message
- [x] By moving the lines in the text editor

## What should you do if there are conflicts after reordering commits with \`git rebase -i\`?

- [ ] Use \`git reset\` to undo the changes
- [ ] Use \`git merge\` to resolve the conflicts
- [x] Use \`git add\` to stage the changes
- [ ] Use \`git rebase --continue\` to continue the rebase process

## If you've already pushed a branch to a remote repository and you reorder commits with \`git rebase -i\`, what should you do?

- [ ] Use \`git reset\` to undo the changes
- [ ] Use \`git merge\` to update the remote branch
- [x] Use \`git push --force\` to overwrite the remote branch
- [ ] Use \`git pull\` to synchronize the local and remote branches

## What command can you use to view the commit history?

- [x] \`git log\`
- [ ] \`git status\`
- [ ] \`git diff\`
- [ ] \`git branch\`

## What is the purpose of \`git reflog\`?

- [ ] To create a new branch
- [ ] To view the commit history
- [ ] To undo the last commit
- [x] To restore previously committed changes

## Is the reflog pushed to the remote repository?

- [ ] Yes, it is pushed to the remote repository
- [x] No, it is only local
- [ ] It depends on the Git configuration
- [ ] It depends on the branch settings

## How long are reachable commits displayed in the reflog by default?

- [ ] 7 days
- [ ] 30 days
- [x] 60 days
- [ ] 90 days

## What can you do to save your work in a commit without providing a commit message?

- [ ] Use \`git commit --amend\`
- [x] Use \`git stash\`
- [ ] Use \`git reflog\`
- [ ] Use aliases to create "save points"

`;

export { rawQuizdown }