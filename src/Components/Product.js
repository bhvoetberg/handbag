import React from 'react';

function Product({promotion, image, name, price}) {
    return (
        <>
            <article>
                <span>{promotion}</span>
                <img src={image} alt={name} />
                <p>{name}</p>
                <h4>{price}</h4>
            </article>
        </>
    )
}

export default Product;