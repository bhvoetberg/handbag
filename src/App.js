import React from 'react';
import './App.css';
import Button from './Components/Button'
import Product from "./Components/Product";
import bag_1 from "./assets/bag_1.png"
import bag_2 from "./assets/bag_2.png"
import bag_3 from "./assets/bag_3.png"
import bag_4 from "./assets/bag_4.png"

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    name="to the collection"
                    visible={false}
                />
                <Button
                    name="shop all bags"
                    visible={false}
                />
                <Button
                    name="pre-orders"
                    visible={true}
                />
            </nav>
            <main>
                <Product
                    promote="Best seller"
                    image={bag_1}
                    name="The handy bag"
                    price="€400,-"
                />
                <Product
                    promote="Best seller"
                    image={bag_2}
                    name="The stylish bag"
                    price="€250,-"
                />
                <Product
                    promote="Best seller"
                    image={bag_3}
                    name="The simple bag"
                    price="€300,-"
                />
                <Product
                    promote="Best seller"
                    image={bag_4}
                    name="The trendy bag"
                    price="€150,-"
                />
            </main>
            <footer>

            </footer>
        </>
    );
}

export default App;



