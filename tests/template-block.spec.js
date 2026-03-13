const { test, expect } = require( '@playwright/test' );

test( 'plugin loads without errors', async ( { page } ) => {
	await page.goto( '/' );
	await page.waitForLoadState( 'networkidle' );
	const consoleErrors = [];
	page.on( 'console', ( msg ) => {
		if ( msg.type() === 'error' ) {
			consoleErrors.push( msg.text() );
		}
	} );
	expect( consoleErrors ).toHaveLength( 0 );
} );
