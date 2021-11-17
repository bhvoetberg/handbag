import React from 'react';
import './App.css';
import Button from './Components/Button'
import Product from "./Components/Product";
import Tile from "./Components/Tile";
import bag_1 from "./assets/bag_1.png"
import bag_2 from "./assets/bag_2.png"
import bag_3 from "./assets/bag_3.png"
import bag_4 from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import our_story from "./assets/our_story.png"


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
                    promotion="Best seller"
                    image={bag_1}
                    name="The handy bag"
                    price="€400,-"
                />
                <Product
                    promotion="Best seller"
                    image={bag_2}
                    name="The stylish bag"
                    price="€250,-"
                />
                <Product
                    promotion="New collection"
                    image={bag_3}
                    name="The simple bag"
                    price="€300,-"
                />
                <Product
                    promotion="New collection"
                    image={bag_4}
                    name="The trendy bag"
                    price="€150,-"
                />
            </main>
            <footer>
                <Tile
                    title="THE BRAND"
                    text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit magni molestiae molestias nesciunt obcaecati officia porro quaerat, quisquam sequi tenetur. ' +
                    '\n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit magni molestiae molestias nesciunt obcaecati officia porro quaerat, quisquam sequi tenetur.'}
                    image=""
                />
                <Tile
                    title=""
                    text=""
                    image={brand}
                    name="Brand image"
                />
                <Tile
                    title=""
                    text=""
                    image={our_story}
                    name="Designers"
                />
                <Tile
                    title="OUR STORY"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error est fugit illum necessitatibus obcaecati provident quisquam? Delectus dignissimos laboriosam minima necessitatibus vel. Architecto cumque dolores, quidem quisquam repudiandae saepe voluptatum?"
                />
            </footer>
        </>
    );
}

export default App;



