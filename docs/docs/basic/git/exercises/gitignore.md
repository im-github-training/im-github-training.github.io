# Exercise: Creating a `.gitignore` file

### Ignore files for a single repository

1. In your Terminal or Git Bash, `cd` to a repository of interest and create a `.gitignore` file:

   ```sh
   touch .gitignore
   ```

   For Windows users who are not using a bash-based terminal:

   ```sh
   echo >> .gitignore
   ```

1. Go to `github/gitignore` and choose a template of your choice and paste it in the file.

1. To share the gitignore rules with other users who clone the repository, commit the `.gitignore` file to your repository.

   ```sh
   git add .gitignore
   git commit -m "add gitignore file"
   ```

### Ignore files for all repositories on your local machine

1. You can also create a global `.gitignore` file to define a list of rules for ignoring files in every local Git repository.

   To do this, you should be in your root directory:

   ```sh
   touch .gitignore_global
   ```

1. Let's grab [an example `.gitignore` template](https://gist.github.com/octocat/9257657) and paste it in the file:

   ```md
   # Compiled source #
   ###################
   *.com
   *.class
   *.dll
   *.exe
   *.o
   *.so

   # Packages #
   ############
   # it's better to unpack these files and commit the raw source
   # git has its own built in compression methods
   *.7z
   *.dmg
   *.gz
   *.iso
   *.jar
   *.rar
   *.tar
   *.zip

   # Logs and databases #
   ######################
   *.log
   *.sql
   *.sqlite

   # OS generated files #
   ######################
   .DS_Store
   .DS_Store?
   ._*
   .Spotlight-V100
   .Trashes
   ehthumbs.db
   Thumbs.db
   ```

1. Configure `git` to use this file:

   For Mac Users:

   ```sh
   git config --global core.excludesfile ~/.gitignore_global
   ```

   For Windows Users:

   ```sh
   git config --global core.excludesfile %USERPROFILE%\.gitignore_global
   ```