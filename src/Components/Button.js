import React from 'react';

function Button({name, visible}) {
    return (
        <button type="button"
                disabled={visible}
                onClick={handleClick}>
            {name}</button>
    )
}

function handleClick() {
    console.log("Activated")
}

export default Button;