import {
    FontSizePicker,
    Panel, PanelBody,
    PanelRow,
    Placeholder,
    SelectControl,
    TextareaControl,
    TextControl
} from "@wordpress/components";
import {button} from "@wordpress/icons";
import React from "react";
import {useRef} from "@wordpress/element";

import {
    useBlockProps,
    InspectorControls,
    PanelColorSettings,
    RichText,
    __experimentalGetElementClassName
} from '@wordpress/block-editor';

export default function edit({ attributes, setAttributes }) {
    const {
        text,
        link,
        size,
        color,
        style
    } = attributes;

    const richTextRef = useRef();

    const buttonStyleOptions = [
        {
            disabled: true,
            label: 'Select an Option',
            value: ''
        },
        {
            label: 'Solid',
            value: 'solid'
        },
        {
            label: 'Outline',
            value: 'outline'
        },
    ];

    const buttonColorOptions = [
        {
            name: 'Rainforest',
            color: '#0CA085'
        },
        {
            name: 'Punch',
            color: '#fff'
        },
        {
            name: 'Riptide',
            color: '#000'
        },
        {
            name: 'Marigold',
            color: '#eee'
        },
    ];

    const buttonSizeOptions = [
        {
            label: 'Default',
            value: 'default'
        },
        {
            label: 'Small',
            value: 'small'
        },
        {
            label: 'Large',
            value: 'large'
        }
    ];

    const handleTextChange = (value) => {
        setAttributes({
            text: value
        });
    }

    const handleLinkChange = (value) => {
        setAttributes({
            link: value
        });
    }

    const handleStyleChange = (value) => {
        setAttributes({
            style: value
        });
    }

    const handleColorChange = (value) => {
        setAttributes({
            color: value
        });
    }

    const handleSizeChange = (value) => {
        setAttributes({
            size: value
        });
    }

    return (
        <>
            <div { ...useBlockProps() }>
                <RichText
                    ref={ richTextRef }
                    aria-label={ 'Button text' }
                    placeholder={ 'Add text…' }
                    value={ text }
                    onChange={ (v) => handleTextChange(v) }
                    withoutInteractiveFormatting
                    className={`wp-block-button__link button ${size} ${color} ${style}`}
                    style={{
                        backgroundColor: color,
                        fontSize: size,
                    }}
                    identifier="text"
                />
            </div>
            <InspectorControls>
                <PanelBody title={'Link'} initialOpen={true}>
                    <TextControl
                        label="Link"
                        type="url"
                        value={link}
                        onChange={handleLinkChange}
                    />
                </PanelBody>
                <PanelBody title={'Style'} initialOpen={true}>
                    <SelectControl
                        required
                        options={buttonStyleOptions}
                        value={style}
                        onChange={handleStyleChange}
                    />
                </PanelBody>
                <PanelBody title={'Typography'} initialOpen={true}>
                    <FontSizePicker
                        __nextHasNoMarginBottom
                        fallbackFontSize={16}
                        value={size}
                        fontSizes={[
                            {
                                name: 'Small',
                                size: 12,
                                slug: 'small'
                            },
                            {
                                name: 'Normal',
                                size: 16,
                                slug: 'normal'
                            },
                            {
                                name: 'Big',
                                size: 26,
                                slug: 'big'
                            }
                        ]}
                        onChange={handleSizeChange}
                    />
                </PanelBody>
                <PanelColorSettings
                    title={'Color Settings'}
                    colors={buttonColorOptions}
                    colorSettings={ [
                        {
                            value: color,
                            onChange: handleColorChange,
                            label: 'Button Color',
                        },

                    ] }
                >

                </PanelColorSettings>
            </InspectorControls>
        </>
    );
}