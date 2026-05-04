# 🚀 Git Collaboration Guide for Track Wise

## Table of Contents

1. [Initial Setup](#initial-setup)
2. [Forking the Repository](#forking-the-repository)
3. [Cloning and Setup](#cloning-and-setup)
4. [Branch Management](#branch-management)
5. [Daily Workflow](#daily-workflow)
6. [Pull Request Process](#pull-request-process)
7. [Code Review Guidelines](#code-review-guidelines)
8. [Conflict Resolution](#conflict-resolution)
9. [Essential Git Commands](#essential-git-commands)
10. [Best Practices](#best-practices)
11. [Troubleshooting](#troubleshooting)

---

## Initial Setup

### Prerequisites

- Git installed on your machine
- GitHub account
- Access to the Track Wise repository

### Configure Git (First Time Only)

```bash
# Set your identity
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Set default branch name
git config --global init.defaultBranch main

# Set up credential helper (Windows)
git config --global credential.helper manager-core
```

---

## Forking the Repository

### Step 1: Fork on GitHub

1. Go to [Track Wise Repository](https://github.com/Abhishekdixit75/SBMEAN)
2. Click the **"Fork"** button in the top-right corner
3. Select your account as the destination
4. Click **"Create fork"**

### Step 2: Clone Your Fork

```bash
# Clone your forked repository
git clone https://github.com/YOUR_USERNAME/SBMEAN.git


# Add the original repository as upstream
git remote add upstream https://github.com/Abhishekdixit75/SBMEAN.git

# Verify remotes
git remote -v
```

---

## Daily Workflow

### 1. Start of Day

```bash
# Switch to main branch
git checkout main

# Pull latest changes from upstream
git pull upstream main

# Push to your fork
git push origin main

# Switch to your feature branch
git checkout feature/your-feature

# Rebase with main (optional but recommended)
git rebase main
```

### 2. During Development

```bash
# Check status
git status

# Add files to staging
git add .
git add specific-file.js

# Commit changes
git commit -m "feat: add railway traffic monitoring dashboard"

# Push to your fork
git push origin feature/your-feature
```

### 3. End of Day

```bash
# Commit any remaining changes
git add .
git commit -m "docs: update API documentation"

# Push to your fork
git push origin feature/your-feature
```

---

## Pull Request Process

### 1. Create Pull Request

1. Go to your forked repository on GitHub
2. Click **"Compare & pull request"**
3. Fill in the PR description:

   ```markdown
   ## Description

   Brief description of changes

   ## Type of Change

   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation update

   ## Testing

   - [ ] Unit tests pass
   - [ ] Integration tests pass
   - [ ] Manual testing completed

   ## Screenshots (if applicable)

   Add screenshots here

   ## Checklist

   - [ ] Code follows project style guidelines
   - [ ] Self-review completed
   - [ ] Comments added for complex code
   - [ ] Documentation updated
   ```

### 2. Review Process

- Wait for code review
- Address reviewer comments
- Update PR if needed

### 3. Merge Process

- Once approved, maintainer will merge
- Delete feature branch after merge

---

## Code Review Guidelines

### For Authors

- Write clear, descriptive commit messages
- Keep PRs small and focused
- Add tests for new features
- Update documentation
- Respond to review comments promptly

### For Reviewers

- Be constructive and respectful
- Focus on code quality and functionality
- Test the changes locally if needed
- Approve or request changes clearly

### Commit Message Format

```
type(scope): description

feat(auth): add user authentication system
fix(api): resolve railway data parsing error
docs(readme): update installation instructions
refactor(ui): improve dashboard component structure
```

---

## Conflict Resolution

### When Conflicts Occur

```bash
# Pull latest changes
git pull upstream main

# If conflicts occur, resolve them manually
# Edit conflicted files
# Remove conflict markers (<<<<<<<, =======, >>>>>>>)

# Add resolved files
git add resolved-file.js

# Complete the merge
git commit -m "resolve: merge conflicts in dashboard component"
```

### Rebase Conflicts

```bash
# During rebase, resolve conflicts
git rebase --continue

# Or abort rebase
git rebase --abort
```

---

## Essential Git Commands

### Basic Commands

```bash
# Check status
git status

# View commit history
git log --oneline
git log --graph --oneline --all

# View changes
git diff
git diff --staged

# Undo changes
git checkout -- file.js
git reset HEAD file.js
git reset --hard HEAD~1

# Stash changes
git stash
git stash pop
git stash list
```

### Advanced Commands

```bash
# Interactive rebase
git rebase -i HEAD~3

# Cherry-pick commits
git cherry-pick commit-hash

# Reset to specific commit
git reset --hard commit-hash

# View remote branches
git branch -r

# Fetch all changes
git fetch --all

# Clean untracked files
git clean -fd
```

---

## Best Practices

### 1. Branch Strategy

- Always create feature branches from `main`
- Keep branches focused on single features
- Delete merged branches regularly
- Use descriptive branch names

### 2. Commit Strategy

- Make small, frequent commits
- Write clear commit messages
- Test before committing
- Use conventional commit format

### 3. Pull Request Strategy

- Keep PRs small and focused
- Write descriptive PR titles
- Add screenshots for UI changes
- Request specific reviewers

### 4. Code Quality

- Follow project coding standards
- Write tests for new features
- Update documentation
- Use meaningful variable names

---

## Troubleshooting

### Common Issues

#### 1. "Your branch is ahead of origin/main"

```bash
git push origin main
```

#### 2. "Please commit your changes or stash them"

```bash
# Option 1: Commit changes
git add .
git commit -m "WIP: work in progress"

# Option 2: Stash changes
git stash
# Do your work
git stash pop
```

#### 3. "Failed to push some refs"

```bash
git pull upstream main
git push origin main
```

#### 4. "Merge conflicts"

```bash
# Resolve conflicts manually
# Then:
git add .
git commit -m "resolve: merge conflicts"
```

#### 5. "Detached HEAD state"

```bash
git checkout main
git checkout -b new-branch-name
```

### Getting Help

```bash
# View help for any command
git help command-name
git help commit
git help push

# View Git configuration
git config --list
```

---

## Team Workflow Summary

### Daily Routine

1. `git checkout main`
2. `git pull upstream main`
3. `git checkout feature/your-branch`
4. Work on your feature
5. `git add . && git commit -m "descriptive message"`
6. `git push origin feature/your-branch`

### Weekly Routine

1. Create Pull Request for completed features
2. Review other team members' PRs
3. Update documentation
4. Clean up merged branches

### Emergency Hotfix

1. `git checkout main`
2. `git pull upstream main`
3. `git checkout -b hotfix/critical-issue`
4. Fix the issue
5. `git add . && git commit -m "hotfix: resolve critical issue"`
6. `git push origin hotfix/critical-issue`
7. Create urgent PR

---

## Quick Reference Card

| Command                      | Description              |
| ---------------------------- | ------------------------ |
| `git status`                 | Check current status     |
| `git add .`                  | Stage all changes        |
| `git commit -m "message"`    | Commit changes           |
| `git push origin branch`     | Push to remote           |
| `git pull upstream main`     | Pull latest changes      |
| `git checkout -b new-branch` | Create new branch        |
| `git branch -a`              | List all branches        |
| `git log --oneline`          | View commit history      |
| `git stash`                  | Temporarily save changes |
| `git rebase main`            | Rebase with main         |

---

## Contact & Support

- **Repository:** https://github.com/Deva-cpp/Track-Wise
- **Issues:** Use GitHub Issues for bug reports
- **Discussions:** Use GitHub Discussions for questions
- **Team Lead:** [Contact Information]

---

_Last Updated: [Current Date]_
_Version: 1.0_
