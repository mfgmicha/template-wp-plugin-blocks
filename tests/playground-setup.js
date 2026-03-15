const { runCLI } = require('@wp-playground/cli');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');

async function startPlaygroundServer() {
	let server;
	try {
		server = await runCLI({
			command: 'server',
			php: '8.3',
			wp: 'latest',
			port: 8890,
			mount: [
				{
					hostPath: projectRoot,
					vfsPath:
						'/wordpress/wp-content/plugins/template-wp-plugin-blocks',
				},
			],
			blueprint: {
				preferredVersions: { wp: 'latest', php: '8.4' },
				steps: [
					{
						step: 'activatePlugin',
						pluginPath: 'template-wp-plugin-blocks/plugin.php',
					},
				],
			},
		});
	} catch (e) {
		console.error('Failed to start Playground:', e.message);
		throw e;
	}

	console.log(`Playground started at ${server?.url || server?.address?.()}`);

	return {
		close: async () => {
			console.log('Stopping WordPress Playground...');
			try {
				if (server.close) {
					await server.close();
				}
			} catch (e) {
				console.warn('Error closing server:', e.message);
			}
		},
		url: server?.url || `http://127.0.0.1:8890`,
	};
}

module.exports = { startPlaygroundServer };
