const rawQuizdown = `
---
shuffleAnswers: true
---

### Question 1

- [ ] Git is a centralized version control system.
- [ ] Git only allows one developer to work on a project at a time.
- [ ] Git gives every developer a local copy of the entire project history.
- [x] Git is a distributed version control system.

### Question 2

- [ ] Git's branching model is slow and resource-intensive.
- [ ] Git does not support branching and merging.
- [x] Git's branching model is lightweight and fast.
- [ ] Git's branching model is complex and difficult to use.

### Question 3

- [ ] Git does not provide any features for altering commit history.
- [ ] Git's rebase and cherry-pick features can only be used on the main branch.
- [x] Git's rebase and cherry-pick features allow you to alter commit history and apply specific commits to another branch.
- [ ] Git's rebase and cherry-pick features can only be used with remote repositories.

### Question 4

- [ ] The Working Directory is where Git permanently stores changes as commits.
- [x] The Working Directory is where you create, edit, delete, and organize files.
- [ ] The Working Directory is where Git tracks and saves changes that will go into your next commit.
- [ ] The Working Directory is where you stage changes using \`git add\`.

### Question 5

- [ ] The Staging Area is where you create, edit, delete, and organize files.
- [ ] The Staging Area is where Git permanently stores changes as commits.
- [x] The Staging Area is where Git tracks and saves changes that will go into your next commit.
- [ ] The Staging Area is where you stage changes using \`git commit\`.

### Question 6

- [ ] The Repository is where you create, edit, delete, and organize files.
- [ ] The Repository is where Git tracks and saves changes that will go into your next commit.
- [x] The Repository is where Git permanently stores changes as commits.
- [ ] The Repository is where you stage changes using \`git add\`.

### Question 7

- [ ] To include changes in your next commit, you need to add them to the Working Directory.
- [x] To include changes in your next commit, you need to add them to the Staging Area.
- [ ] To include changes in your next commit, you need to add them to the Repository.
- [ ] To include changes in your next commit, you need to add them to the Remote Repository.

### Question 8

- [ ] \`git add\` is used to permanently store changes as commits.
- [x] \`git add\` is used to track and save changes that will go into your next commit.
- [ ] \`git add\` is used to stage changes for the Working Directory.
- [ ] \`git add\` is used to stage changes for the Repository.

### Question 9

- [ ] \`git commit\` is used to permanently store changes as commits.
- [ ] \`git commit\` is used to track and save changes that will go into your next commit.
- [x] \`git commit\` is used to take staged changes and store them in the Repository.
- [ ] \`git commit\` is used to stage changes for the Working Directory.

### Question 10

- [ ] Git stores your information as a series of changes or deltas.
- [x] Git takes a snapshot of your entire repository at a given point in time.
- [ ] Git only saves the differences between snapshots.
- [ ] Git does not support committing changes to the repository.

`;

export { rawQuizdown }