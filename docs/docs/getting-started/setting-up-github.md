# Setting up GitHub

To get the most out of this tutorial, you'll need both a GitHub account and a working install of the GitHub CLI.

## Creating a GitHub account

You can create a GitHub account by following these steps:

1. Access GitHub.com and click Sign up
1. Choose the free account
1. You will receive a verification email at the address provided
1. Click the link to complete the verification process

If you already have an account, verify that you can visit [github.com](https://github.com) from within your organization's network.

## Setting up GitHub CLI

### Installation

Follow the installation instructions, here: [**gh cli installation instructions**](https://github.com/cli/cli#installation) 

### Authentication

```bash
gh auth login
? What account do you want to log into? GitHub.com
? What is your preferred protocol for Git operations on this host? HTTPS
? Authenticate Git with your GitHub credentials? Yes
? How would you like to authenticate GitHub CLI? Login with a web browser

! First copy your one-time code: D042-4778
Press Enter to open github.com in your browser...
```

**You should see the following:**

![Alt text](../../../img/image-6.png ':size=500')

**Your browser should open and display the activation page where you enter the one-time code:**

![Alt text](../../../img/image-5.png ':size=500')

#### References
* [**gh cli manual**](https://cli.github.com/manual/)