const rawQuizdown = `

---
shuffleAnswers: true
---

# What command can you use to see all the local branches, including the read-only copies of your remote branches?
- [ ] \`git branch -l\`
- [ ] \`git branch -r\`
- [ ] \`git branch -b\`
- [x] \`git branch -a\`

# How do you create a new branch in Git?
- [ ] \`git create-branch <name>\`
- [ ] \`git new-branch <name>\`
- [ ] \`git branch-create <name>\`
- [x] \`git branch <name>\`

# Which command allows you to switch your current HEAD branch in Git?
- [ ] \`git branch-switch\`
- [ ] \`git switch-branch\`
- [ ] \`git head-switch\`
- [x] \`git switch\`

# How do you switch to a local branch named \`other-branch\` in Git?
- [ ] \`git checkout other-branch\`
- [ ] \`git branch-switch other-branch\`
- [ ] \`git head-switch other-branch\`
- [x] \`git switch other-branch\`

# How do you create a new local branch named \`new-branch\` and switch to it in Git?
- [ ] \`git switch -n new-branch\`
- [ ] \`git branch -c new-branch\`
- [ ] \`git branch -n new-branch\`
- [x] \`git switch -c new-branch\`

# How do you check out a remote branch in Git?
- [ ] \`git switch remote-branch\`
- [ ] \`git checkout remote-branch\`
- [ ] \`git branch-switch remote-branch\`
- [x] \`git switch remote-branch\`

# How do you rename a branch in Git?
- [ ] \`git rename-branch\`
- [ ] \`git branch-rename\`
- [ ] \`git branch -r\`
- [x] \`git branch -m\`

# What is the syntax to rename a branch from \`old-branch\` to \`new-branch\` in Git?
- [ ] \`git branch -r old-branch new-branch\`
- [ ] \`git branch -m new-branch old-branch\`
- [ ] \`git branch -rename old-branch new-branch\`
- [x] \`git branch -m old-branch new-branch\`

# Which command is used to integrate commits or changes from one branch into another in Git?
- [ ] \`git switch\`
- [ ] \`git branch\`
- [ ] \`git commit\`
- [x] \`git merge\`

# What does the \`git cherry-pick\` command allow you to do in Git?
- [ ] Create a new branch
- [ ] Delete a branch
- [ ] Move a commit to a different branch
- [x] Pick up a commit from another branch and apply it to the current branch

`;

export { rawQuizdown }