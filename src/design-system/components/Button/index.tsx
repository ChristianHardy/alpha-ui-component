import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import { mergeObjects } from './../../../helpers';

function XButton(props: ButtonProps) {
    // Define button base props
    const buttonBase: ButtonProps = {
        py: '8px',
        borderRadius: '10px',
        color: 'white',
        bg: 'primary',
        fontWeight: 'bold',
        fontSize: '14px',
        _hover: {
            bg: 'rgba(104, 117, 255, 0.5)',
        },
    };

    // Group button props
    const buttonProps: ButtonProps = mergeObjects(buttonBase, props);

    return <Button {...buttonProps}/>
}

export { XButton };
