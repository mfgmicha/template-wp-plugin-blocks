# WordPress Block Plugin Template

Template for creating WordPress block plugins with multiple blocks support.

## General Guidelines

- Always commit and push changes after completing tasks
- Always use the `gh` CLI for GitHub operations (issues, PRs, etc.) - never use curl for GitHub API calls
- When updating template, ensure backward compatibility where possible

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

# Push to remote (set remote first if needed)
git remote add origin <your-repo-url>
git push -u origin main
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

## Template Placeholders

When creating a new plugin from this template, search and replace these values:

| Placeholder | Example Value | Description |
|-------------|---------------|-------------|
| `template-wp-plugin-blocks` | `my-awesome-blocks` | Package name (kebab-case) |
| `Template WP Plugin Blocks` | `My Awesome Blocks` | Plugin display name |
| `template-block` | `awesome-block` | Block folder name (kebab-case) |
| `mfgmicha_` | `myprefix_` | PHP function prefix |
| `TemplateWpPluginBlocks` | `MyAwesomeBlocks` | PHP package name |

Files containing placeholders:
- `package.json`
- `plugin.php`
- `src/template-block/block.json`
- `.wordpress/blueprint.json`

## Requirements

- Node.js >= 20.0.0
- npm >= 8.0.0

## Creating a New Plugin

For detailed instructions on creating a new plugin from this template, see [docs/SETUP.md](docs/SETUP.md).
