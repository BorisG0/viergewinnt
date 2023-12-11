import React, { useState } from 'react';
import { Button } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

const Field = (props) => {

    return (
        <div>
            <CircleIcon color={props.content == 0? "disabled": (
                    props.content == 1? "primary": (
                        props.content == 2? "secondary": "error"
                    )
                )
            }/>
        </div>
    );
};

export default Field;
