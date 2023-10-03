import React from 'react';
import { Button, TextControl } from '@wordpress/components';

export default function MySimpleComponent(props) {
    return (
        <div>
            <Button>{props.title}</Button>
            <TextControl
                label="Image Title"
                className="mb-4"
            />
        </div>
    );
}
