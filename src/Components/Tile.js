import React from 'react';

function Tile({title, text, image, name}) {
    if (text === "" && title === "") {
        return (
            <>
                <section>
                    <img src={image} alt={name}/>
                </section>
            </>
        )
    } else {
        const renderedText = renderText(text);
        return (
            <>
                <section>
                    <h2>{title}</h2>
                    <p>{renderedText}</p>
                </section>
            </>
        )
    }
}

function renderText(text) {
    return text.split ('\n').map ((item, i) => <p key={i}>{item}</p>);
}
export default Tile;