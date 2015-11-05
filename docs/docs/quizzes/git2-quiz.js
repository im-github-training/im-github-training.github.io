const rawQuizdown = `

---
shuffleAnswers: true
---

# What is Git?

- [ ] Git is a centralized version control system.
- [ ] Git is a distributed version control system.
- [ ] Git is a cloud-based version control system.
- [x] Git is a popular version control system used for both open source and commercial software development.

# How does Git manage and track changes?

- [ ] Git uses a single area called the Working Directory.
- [ ] Git uses two areas called the Working Directory and the Staging Area.
- [ ] Git uses two areas called the Staging Area and the Repository.
- [x] Git uses three areas called the Working Directory, the Staging Area, and the Repository.

# What is the purpose of the Staging Area in Git?

- [ ] The Staging Area is where Git permanently stores changes as commits.
- [ ] The Staging Area is where you create, edit, and organize files in Git.
- [ ] The Staging Area is where you can experiment with different development paths in Git.
- [x] The Staging Area is where Git tracks and saves changes that will go into your next commit.

# How does Git store changes?

- [ ] Git stores changes as a series of deltas.
- [ ] Git stores changes as a series of snapshots.
- [ ] Git stores changes as a series of branches.
- [x] Git stores changes as a series of snapshots called commits.

# What is the purpose of the Repository in Git?

- [ ] The Repository is where you create, edit, and organize files in Git.
- [ ] The Repository is where Git tracks and saves changes that will go into your next commit.
- [ ] The Repository is where you can experiment with different development paths in Git.
- [x] The Repository is where Git permanently stores changes as commits.

# How do you add changes to the Staging Area in Git?

- [ ] Use \`git commit\` to add changes to the Staging Area.
- [ ] Use \`git push\` to add changes to the Staging Area.
- [ ] Use \`git pull\` to add changes to the Staging Area.
- [x] Use \`git add\` to add changes to the Staging Area.

# How do you commit changes to the Repository in Git?

- [ ] Use \`git add\` to commit changes to the Repository.
- [ ] Use \`git push\` to commit changes to the Repository.
- [ ] Use \`git pull\` to commit changes to the Repository.
- [x] Use \`git commit\` to commit changes to the Repository.

# What is the purpose of rebasing in Git?

- [ ] Rebasing is used to create a new branch in Git.
- [ ] Rebasing is used to merge branches in Git.
- [ ] Rebasing is used to undo changes in Git.
- [x] Rebasing is used to alter commit history for a cleaner, linear project history.

# What is the purpose of cherry-picking in Git?

- [ ] Cherry-picking is used to create a new branch in Git.
- [ ] Cherry-picking is used to merge branches in Git.
- [ ] Cherry-picking is used to undo changes in Git.
- [x] Cherry-picking is used to pick specific commits to apply to another branch.

# What are the unique features of Git?

- [ ] Git has a centralized version control system.
- [ ] Git has a lightweight and slow branching model.
- [ ] Git has a limited set of features.
- [x] Git has distributed version control, advanced branching and merging, and rebasing and cherry-picking.

`;

export { rawQuizdown }