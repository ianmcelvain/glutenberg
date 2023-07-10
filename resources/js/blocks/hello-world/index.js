import React from 'react';
import { hello as icon } from '../icons';
import MySimpleComponent from '../../components/react/my-simple-component';

export const name = 'example-block';

export const settings = {
    title: 'Example Block',
    description: 'This is an example block',
    icon,
    category: 'text',
    attributes: {},
    edit: () => (
        <MySimpleComponent title="[Temporary demo] This is a React component rendered in a Gutenberg block" />
    ),
    save: () => <h1>Save</h1>,
};
