# Setting up Git

## Installing git

### Windows

1. Download the latest Git for Windows installer from the [Git official website](https://git-scm.com/download/win).

2. When you've successfully started the installer, you should see the Git Setup wizard screen. Follow the Next and Finish prompts to complete the installation. The default options are pretty sensible for most users.

### Mac

1. If you are on a Mac, you can download Git from Git official website or install it via Homebrew with the following command:

```bash
brew install git
```

### Linux

#### Ubuntu / Debian

1. If you're on a Debian-based distribution like Ubuntu, try apt-get:

```bash
sudo apt-get update
sudo apt-get install git
```

#### Fedora

1. For Fedora systems, use dnf:

```bash
sudo dnf install git
```

## Testing your install

1. Open a Command Prompt (or Git Bash if during installation you elected not to use Git from the Windows Command Prompt).

2. Confirm that Git was properly installed by typing `git --version` into the command prompt.

```bash
git --version
```

3. Next, try cloning a repository to make sure you can access GitHub:

```sh
git clone https://github.com/githubschool/scratch.git
```

If the clone is successful you'll see:

```shell-session
$ git clone https://github.com/githubschool/scratch
Cloning into 'scratch'...
remote: Counting objects: 6, done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 6 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (6/6), done.
```

> **Note:** If your clone is unsuccessful, read about [authenticating with GitHub from Git](https://docs.github.com/github/getting-started-with-github/set-up-git#next-steps-authenticating-with-github-from-git).

## Basic configuration

### Setting your default identity

To create commits you must have a `user.name` and `user.email` configured in Git.

If these settings aren't configured, you will get the following error:

```bash
Author identity unknown

*** Please tell me who you are.

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.
```


> Git uses the `user.name` and `user.email` config settings to generate a unique fingerprint for each your commits.

#### Global configuration

If you are using a personal computer, apply the `--global` flag so you only have to set these settings once.

```sh
git config --global user.name "First-name Surname"
git config --global user.email "you@email.com"
```

#### Local configuration

If you are using a computer without a private, personal account, omit the `--global` flag to store these settings in your current repository.

> If you work in another repository on this same computer, you will need to set these configuration options again.

```sh
git config user.name "First-name Surname"
git config user.email "you@email.com"
```

> **Tip:** If you make a typo a when entering a property, you can delete the property with the following command:
>
> ```sh
> git config --global --unset <property_name>
> ```
