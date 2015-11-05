# What is a Tag?

A tag is a reference that point to specific points in Git history. Tags are typically used to capture a point in history that is used for a marked version release (i.e., v1.0.0).

## Creating tags

To create a new tag:

```bash
git tag <tagname>
```

> This command creates a lightweight tag. Lightweight tags are simply pointers to specific commits.

## Creating annotated tags

If you want to include more information – such as the tagger name, email, and date – you can create an annotated tag.

To create an annotated tag:

```bash
git tag -a <tagname> -m <message>
```

> The `-m` option allows you to add a tagging message.

## Listing tags

To see all the tags in your repository:

```bash
git tag
```

## Checking out tags

To checkout a specific tag:

```bash
git checkout <tagname>
```

> This will put your repository in "detached HEAD" state, which means you're not on any branch.

## Deleting a Tag

To delete a tag:

```bash
git tag -d <tagname>
```

## Pushing tags

By default, when you push to a remote repository, tags are not included.

To push tags to the remote repository:

```bash
git push origin --tags
```

> This will push all your tags to the remote repository.
