const { test, expect } = require( '@playwright/test' );

test( 'plugin loads without errors on frontend', async ( { page } ) => {
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

test( 'block is rendered on post', async ( { page } ) => {
	// Navigate to post with block
	await page.goto( '/?p=1' );
	await page.waitForLoadState( 'networkidle' );

	// Check for block content
	const content = await page.content();
	expect( content ).toContain( 'Template Block - Frontend' );
} );
