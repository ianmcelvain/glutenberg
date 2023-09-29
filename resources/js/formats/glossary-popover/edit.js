import { comment as icon } from '@wordpress/icons';

const { RichTextToolbarButton } = window.wp.blockEditor;
const { toggleFormat, getTextContent, slice } = window.wp.richText;
const type = 'cardfin/glossary-popover';

export default function edit({ isActive, value, onChange, setAttributes }) {
	return (
		<RichTextToolbarButton
			icon={ icon }
			title="Glossary Popover"
			onClick={ () => {
				const text = getTextContent(slice(value));
				console.log(text);
				// TODO Consume Glossary API to fetch term id by term name
				// $.ajax({
				// 	url: '/wp-json/glossary/v1/terms',
				// 	type: 'POST',
				// 	data: { terms: [text] },
				// 	success: function (data) {
				// 		onChange( toggleFormat(value, {
				// 			type,
				// 			attributes: {
				// 				'data-term-id': data[0].id.toString()
				// 			}
				// 		}))
				// 	}
				// })

				onChange(toggleFormat(value, {
					type,
					attributes: {
						'data-term-id': '7',
						class: 'text-rainforest underline cursor-pointer'
					}
				}));
			}}

			isActive={ isActive }
		/>
	);
}