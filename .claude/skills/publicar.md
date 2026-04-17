# /publicar

Stage all changes, generate a commit message, and push to origin.

## Steps

1. Run `git status` to see what changed
2. Run `git diff` to understand the changes
3. Stage everything: `git add -A`
4. Generate a concise conventional commit message based on the diff
5. Commit with that message
6. Push to origin with `git push`

Do not ask for confirmation — just do it. Report the commit hash and push result when done.
