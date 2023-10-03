import { button as icon } from '@wordpress/icons';
import edit from './edit';
import save from './save';

export const name = 'button';

export const settings = {
    title: 'Button',
    description: '',
    category: 'text',
    icon,
    attributes: {
        text: {
            type: 'string',
            default: '',
        },
        link: {
            type: 'string',
            default: ''
        },
        size: {
            type: 'string',
            default: ''
        },
        color: {
            type: 'string',
            default: '#eee'
        },
        style: {
            type: 'string',
            default: ''
        },
    },
    edit,
    save,
};
