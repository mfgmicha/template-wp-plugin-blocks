const { startPlaygroundServer } = require( './playground-setup' );

async function globalSetup() {
	const server = await startPlaygroundServer();
	global.__PLAYWRIGHT_SERVER__ = server;
}

module.exports = globalSetup;
