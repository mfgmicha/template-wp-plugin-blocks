# template-wp-plugin-blocks

WordPress Block Plugin Template.

## General Guidelines

- Always commit and push changes after completing tasks
- Always use the `gh` CLI for GitHub operations (issues, PRs, etc.) - never use curl for GitHub API calls

## Development Commands

- `npm install` - Install dependencies
- `npm run build` - Build for production (with blocks-manifest)
- `npm run start` - Start development watcher
- `npm run lint:js` - Lint JavaScript
- `npm run lint:css` - Lint CSS
- `npm run format` - Format code
- `npm run plugin-zip` - Create plugin zip

## Commit Workflow

```bash
# Add and commit (bypassing husky hooks if needed)
git add -A
git commit --no-verify -m "type: description"

# Push to remote
git push https://mfgmicha:$(gh auth token)@github.com/mfgmicha/template-wp-plugin-blocks.git main

# Or if git remote is set:
git push
```

Commit types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore` (lowercase)

## Project Structure

- `plugin.php` - Main plugin file (block registration)
- `src/` - Block source files (each block in its own subfolder)
- `src/<block-folder>/block.json` - Block metadata
- `src/<block-folder>/index.js` - Block registration
- `src/<block-folder>/edit.js` - Editor component
- `src/<block-folder>/save.js` - Save component
- `src/<block-folder>/style.scss` - Frontend styles
- `src/<block-folder>/editor.scss` - Editor styles
- `.husky/` - Git hooks
- `commitlint.config.js` - Commit message rules
- `.wordpress/blueprint.json` - WordPress Playground blueprint

## Multiple Blocks

This template supports multiple blocks. Each block should be in its own subfolder under `src/`. The build script uses `--blocks-manifest` to generate a blocks-manifest.php file that registers all blocks automatically.

## Requirements

- Node.js >= 20.0.0
- npm >= 8.0.0

## Using as Template

1. Clone this repository
2. Update `package.json` with new plugin name
3. Update `plugin.php` header and function names
4. Create blocks in `src/` subfolders
5. Update `.wordpress/blueprint.json` with correct plugin URL
