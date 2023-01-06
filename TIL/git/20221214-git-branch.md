# Branch
Create a bifurcation point to code independent on original project.

main
    
```css
.body{

}
```

develop

```css
.body{

    margin: 0;

    padding: 0;

}
```


## Commands

1. `$ git branch`

    Show available local branch

2. `$ git switch {branch name}`

    Switch branch to {branch name}

3. `$ git merge {branch name}`

    Merge {branch name} to current branch

4. `$ git branch -D {branch name}`

    Delete {branch name}


## Remember

- Never work on main branch.
- Avoid revert and never use reset
    - revert `$ git revert --no-commit HEAD~{count}..`

        - Rolls back {count} times of commit from current 
        - Show history of revert
    - reset `$ git reset --hard {branch name}`

        - Reset to lastest commit point
        - No history remain

