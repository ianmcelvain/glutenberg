import React from 'react';

export default function save({attributes}) {
    const {
        size,
        color,
        style,
        link,
        text
    } = attributes;

    return (
        <a
            className={`is-style-${style}`}
            href={link}>
            {text}
        </a>
    );
}