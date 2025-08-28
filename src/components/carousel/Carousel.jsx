import { Carousel } from "primereact/carousel";

import "/src/components/carousel/carousel.css";

import koi1 from "/src/assets/img/1.jpg";
import koi2 from "/src/assets/img/2.jpg";
import koi3 from "/src/assets/img/3.jpg";
import koi4 from "/src/assets/img/4.jpg";
import koi5 from "/src/assets/img/5.jpg";
import koi6 from "/src/assets/img/6.jpg";

const products = [
    { name: "Koi №1", image: koi1 },
    { name: "Koi №3", image: koi2 },
    { name: "Koi №4", image: koi3 },
    { name: "Koi №5", image: koi4 },
    { name: "Koi №6", image: koi5 },
    { name: "Koi №7", image: koi6 },
];

const HeroBanner = () => {
    return (
        < Carousel value={products} numVisible={4}
            numScroll={3}
            itemTemplate={product => (
                <div className="carousel_block">
                    <img className="item_img" src={product.image} alt={product.name} />
                    <div className="item_name">{product.name}</div>
                </div>
            )} />
    )
}

export default HeroBanner;