import koi1 from "../../assets/img/koi1.jpg";
import koi2 from "../../assets/img/koi2.jpg";
import koi3 from "../../assets/img/koi3.jpg";
import koi4 from "../../assets/img/koi4.jpg";
import koi5 from "../../assets/img/koi5.jpg";
import koi6 from "../../assets/img/koi6.jpg";
import koi7 from "../../assets/img/koi7.jpg";
import koi8 from "../../assets/img/koi8.jpg";


const products = [
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '$48',
        imageSrc: koi1,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: koi2,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        imageSrc: koi3,
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: koi4,
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Focus Card Tray',
        href: '#',
        price: '$64',
        imageSrc: koi5,
        imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
    },
    {
        id: 6,
        name: 'Focus Multi-Pack',
        href: '#',
        price: '$39',
        imageSrc: koi6,
        imageAlt: 'Stack of 3 small drab green cardboard paper card refill boxes with white text.',
    },
    {
        id: 7,
        name: 'Brass Scissors',
        href: '#',
        price: '$50',
        imageSrc: koi7,
        imageAlt: 'Brass scissors with geometric design, black steel finger holes, and included upright brass stand.',
    },
    {
        id: 8,
        name: 'Focus Carry Pouch',
        href: '#',
        price: '$32',
        imageSrc: koi8,
        imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
]

export default function ProductList() {
    return (
        <div className="bg-white">
            <div className="container">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                            <img
                                alt={product.imageAlt}
                                src={product.imageSrc}
                                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                            />
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
