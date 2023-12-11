import React, { useState } from 'react';

const Field = () => {
    const [content, setContent] = useState(1);

    const handleClick = () => {
        setContent(content + 1);
    };

    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            <div>{content}</div>
        </div>
    );
};

export default Field;
