# Creating a branch

If you begin working, you are by default put on the `main` or topline branch. Changes aren't “on” a branch until they are committed. Your working directory and staging area are attached to `HEAD`, _not_ a branch. So, you can change branches, and any changes that are not committed will come with you.

## Activity: Create a branch after making changes

1. Modify file before creating branch
   - _Notice that the working directory and staging area are portable - files sitting in each area will remain there when you switch branches!_
2. Type `git status`, and notice changes in your working directory
3. Create a new branch with `git switch -c BRANCH-NAME`
4. Type `git status` again, to notice which branch you are on, and your working directory
5. Type `git add .`
6. Type `git commit -m "Your message"` to commit the change to the git history

# Non-committed conflicts

What do you think would happen if you made changes to a file, then tried to switch to another branch, but that branch had committed changes that conflict with your new, uncommitted changes? Why?
