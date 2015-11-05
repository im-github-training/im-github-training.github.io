# Revisions

Git's revision syntax provides a convenient way to identify a commit or a range of commits, and can be used anywhere a commit id is used.

Revisions can be specified using the following notation:

1. `HEAD`
2. `HEAD~`
3. `HEAD^`
4. `HEAD@{}`.

## `HEAD`

`HEAD` is a reference to the last commit in the current checked-out branch. You can think of it as the "current commit".

For example, if you want to see the log of the most recent commit, you can use:

```bash
git log -1 HEAD
```

## `HEAD~` and `HEAD~n`

`HEAD~` (or `HEAD~1`) is a reference to the commit before the last commit.

`HEAD~n` refers to the nth commit before the last commit.

For example, if you want to see the log of the commit before the last commit, you can use:

```bash
git log -1 HEAD~1
```

And if you want to see the log of the commit two steps before the last commit, you can use:

```bash
git log -1 HEAD~2
```

## `HEAD^` and `HEAD^n`

`HEAD^` (or `HEAD^1`) is a reference to the first parent of the last commit. This is useful in a merge commit situation where a commit has more than one parent.

`HEAD^n` refers to the nth parent of the last commit.

For example, if you want to see the log of the first parent of the last commit, you can use:

```bash
git log -1 HEAD^1
```

And if you want to see the log of the second parent of the last commit (in a merge commit situation), you can use:

```bash
git log -1 HEAD^2
```

## `HEAD@{...}`

`HEAD@{}` is a reference to the `HEAD` at a certain point in time.

`HEAD@{n}` refers to the nth prior value of `HEAD`.

For example, if you want to see where `HEAD` was three moves ago, you can use:

```bash
git log -1 HEAD@{3}
```

`HEAD@{date}` refers to the value of `HEAD` at a certain date.

For example, if you want to see where `HEAD` was yesterday, you can use:

```bash
git log -1 HEAD@{yesterday}
```