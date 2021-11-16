import React from 'react';

function Product({promote, image, name, price}) {
    return (
        <>
            <article>
                <span>{promote}</span>
                <img src={image} alt={name} />
                <p>{name}</p>
                <h4>{price}</h4>
            </article>
        </>
    )
}

export default Product;