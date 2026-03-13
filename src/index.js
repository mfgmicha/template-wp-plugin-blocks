import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import metadata from './block.json';

registerBlockType(metadata.name, {
	edit() {
		return <p>Template Block - Editor</p>;
	},
	save() {
		return <p>Template Block - Frontend</p>;
	},
});
