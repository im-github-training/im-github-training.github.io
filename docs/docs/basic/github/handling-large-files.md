# Handling large files

Git Large File Storage (LFS) is an extension for Git that deals with large files by storing them outside the repository, while still keeping track of their versions.

## What is Git LFS

- Git LFS allows seamless handling of large files (>100 MB) within Git repositories.
- It replaces large files with tiny pointer files, reducing repository size and improving performance.
- End-users can work with large files as if they were normal Git-managed files.

## How to setup Git LFS

1. Install Git LFS by downloading the installer from the [Git LFS website](https://git-lfs.github.com/).
2. Navigate to your Git repository and run `git lfs install` to initialize Git LFS.
3. Track large files using `git lfs track <pattern>` where `<pattern>` is a wildcard pattern matching the large files.
4. Commit and push changes as usual. Git LFS will handle large files transparently.

## Important things to know

- When you clone a repository with large files tracked by Git LFS, the large files are not downloaded by default. To download the large files, you need to check out the commit that includes them.
- Git LFS requires a LFS server to store the large files. GitHub provides LFS storage, but it's limited to 1 GB free storage and 1 GB free bandwidth per month. If you need more, you'll have to pay for it.
- Remember to commit your .gitattributes file to the repository. This ensures that other users who clone the repository know which files should be handled by Git LFS.
- If you forget to track large files with Git LFS and commit them as regular files, you'll need to rewrite your repository history to convert them to LFS objects.
- Git LFS is not suitable for all types of large files. If you have large files that change frequently, every change will create a new copy of the file in LFS, which can quickly consume your LFS storage quota. In such cases, you might need to consider other solutions, such as storing the large files outside of Git.