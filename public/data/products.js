import koi1 from "../../public/img/carousel/koi1.jpg";
import koi2 from "../../public/img/carousel/koi2.jpg";
import koi3 from "../../public/img/carousel/koi3.jpg";
import koi4 from "../../public/img/carousel/koi4.jpg";
import koi5 from "../../public/img/carousel/koi5.jpg";
import koi6 from "../../public/img/carousel/koi6.jpg";
import koi7 from "../../public/img/carousel/koi7.jpg";
import koi8 from "../../public/img/carousel/koi8.jpg";


const products = [
    {
        id: 1,
        name: 'Earthen Bottle',
        price: '$48',
        href: '/PLP/1',
        breadcrumbs: [
            { id: 1, name: 'Home', href: '/' },
            { id: 2, name: 'Shop', href: '/PLP' },
        ],
        images: [
            { src: koi1, alt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.' },
            { src: koi2, alt: 'Side view of Earthen Bottle.' },
            { src: koi3, alt: 'Earthen Bottle on the table.' },
            { src: koi4, alt: 'Close-up of Earthen Bottle.' },
        ],
        colors: [
            { id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400' },
            { id: 'gray', name: 'Gray', classes: 'bg-gray-200 checked:outline-gray-400' },
            { id: 'black', name: 'Black', classes: 'bg-gray-900 checked:outline-gray-900' },
        ],
        sizes: [
            { name: 'XS', inStock: true },
            { name: 'S', inStock: true },
            { name: 'M', inStock: true },
            { name: 'L', inStock: true },
            { name: 'XL', inStock: true },
        ],
        description: 'A tall slender porcelain bottle with natural clay textured body and cork stopper.',
        highlights: [
            'Handmade',
            'Unique texture',
            'Natural clay',
            'Eco-friendly cork',
        ],
        details: 'This bottle is crafted from natural clay and features a cork stopper for keeping liquids fresh.',
    },
    {
        id: 2,
        name: 'Nomad Tumbler',
        price: '$35',
        href: '/PLP/2',
        breadcrumbs: [
            { id: 1, name: 'Home', href: '/' },
            { id: 2, name: 'Shop', href: '/PLP' },
        ],
        images: [
            { src: koi2, alt: 'Olive drab green insulated bottle with flared screw lid and flat top.' },
            { src: koi3, alt: 'Nomad Tumbler on the desk.' },
            { src: koi4, alt: 'Nomad Tumbler being held in hand.' },
            { src: koi5, alt: 'Close-up of Nomad Tumbler.' },
        ],
        colors: [
            { id: 'olive', name: 'Olive', classes: 'bg-green-700 checked:outline-green-700' },
            { id: 'black', name: 'Black', classes: 'bg-gray-900 checked:outline-gray-900' },
        ],
        sizes: [
            { name: 'S', inStock: true },
            { name: 'M', inStock: true },
            { name: 'L', inStock: false },
        ],
        description: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        highlights: [
            'Keeps drinks hot/cold',
            'Durable design',
            'Leak-proof',
        ],
        details: 'Perfect for travel and everyday use.',
    },
    {
        id: 3,
        name: 'Focus Paper Refill',
        price: '$89',
        href: '/PLP/3',
        breadcrumbs: [
            { id: 1, name: 'Home', href: '/' },
            { id: 2, name: 'Shop', href: '/PLP' },
        ],
        images: [
            { src: koi3, alt: 'Person using a pen to cross a task off a productivity paper card.' },
            { src: koi3, alt: 'Product side view.' },
            { src: koi3, alt: 'Product on desk.' },
            { src: koi3, alt: 'Product close-up.' },
        ],
        colors: [],
        sizes: [],
        description: '',
        highlights: [],
        details: '',
    },
    {
        id: 4,
        name: 'Machined Mechanical Pencil',
        price: '$35',
        href: '/PLP/4',
        breadcrumbs: [
            { id: 1, name: 'Home', href: '/' },
            { id: 2, name: 'Shop', href: '/PLP' },
        ],
        images: [
            { src: koi4, alt: 'Hand holding black machined steel mechanical pencil with brass tip and top.' },
            { src: koi4, alt: 'Side view of Mechanical Pencil.' },
            { src: koi4, alt: 'Mechanical Pencil on desk.' },
            { src: koi4, alt: 'Close-up of Mechanical Pencil.' },
        ],
        colors: [
            { id: 'black', name: 'Black', classes: 'bg-gray-900 checked:outline-gray-900' },
            { id: 'brass', name: 'Brass', classes: 'bg-yellow-700 checked:outline-yellow-700' },
        ],
        sizes: [],
        description: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        highlights: [
            'Precision crafted',
            'Durable material',
        ],
        details: '',
    },
    {
        id: 5,
        name: 'Focus Card Tray',
        price: '$64',
        href: '/PLP/5',
        breadcrumbs: [
            { id: 1, name: 'Home', href: '/' },
            { id: 2, name: 'Shop', href: '/PLP' },
        ],
        images: [
            { src: koi5, alt: 'Paper card sitting upright in walnut card holder on desk.' },
            { src: koi5, alt: 'Focus Card Tray on table.' },
            { src: koi5, alt: 'Another view of Focus Card Tray.' },
            { src: koi5, alt: 'Close-up of Focus Card Tray.' },
        ],
        colors: [
            { id: 'walnut', name: 'Walnut', classes: 'bg-yellow-900 checked:outline-yellow-900' },
        ],
        sizes: [],
        description: 'Paper card sitting upright in walnut card holder on desk.',
        highlights: [
            'Natural walnut wood',
            'Elegant design',
        ],
        details: '',
    },
    {
        id: 6,
        name: 'Focus Multi-Pack',
        price: '$39',
        href: '/PLP/6',
        breadcrumbs: [
            { id: 1, name: 'Home', href: '/' },
            { id: 2, name: 'Shop', href: '/PLP' },
        ],
        images: [
            { src: koi6, alt: 'Stack of 3 small drab green cardboard paper card refill boxes with white text.' },
            { src: koi6, alt: 'Another view of Focus Multi-Pack.' },
            { src: koi6, alt: 'Focus Multi-Pack on desk.' },
            { src: koi6, alt: 'Close-up of Focus Multi-Pack.' },
        ],
        colors: [
            { id: 'green', name: 'Green', classes: 'bg-green-600 checked:outline-green-600' },
            { id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400' },
        ],
        sizes: [],
        description: 'Stack of 3 small drab green cardboard paper card refill boxes with white text.',
        highlights: [
            'Set of 3',
            'Eco-friendly packaging',
        ],
        details: '',
    },
    {
        id: 7,
        name: 'Brass Scissors',
        price: '$50',
        href: '/PLP/7',
        breadcrumbs: [
            { id: 1, name: 'Home', href: '/' },
            { id: 2, name: 'Shop', href: '/PLP' },
        ],
        images: [
            { src: koi7, alt: 'Brass scissors with geometric design, black steel finger holes, and included upright brass stand.' },
            { src: koi7, alt: 'Side view of Brass Scissors.' },
            { src: koi7, alt: 'Brass Scissors in stand.' },
            { src: koi7, alt: 'Close-up of Brass Scissors.' },
        ],
        colors: [
            { id: 'brass', name: 'Brass', classes: 'bg-yellow-700 checked:outline-yellow-700' },
            { id: 'black', name: 'Black', classes: 'bg-gray-900 checked:outline-gray-900' },
        ],
        sizes: [],
        description: 'Brass scissors with geometric design, black steel finger holes, and included upright brass stand.',
        highlights: [
            'Elegant brass finish',
            'Includes stand',
        ],
        details: '',
    },
    {
        id: 8,
        name: 'Focus Carry Pouch',
        price: '$32',
        href: '/PLP/8',
        breadcrumbs: [
            { id: 1, name: 'Home', href: '/' },
            { id: 2, name: 'Shop', href: '/PLP' },
        ],
        images: [
            { src: koi8, alt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.' },
            { src: koi8, alt: 'Another view of Focus Carry Pouch.' },
            { src: koi8, alt: 'Focus Carry Pouch on table.' },
            { src: koi8, alt: 'Close-up of Focus Carry Pouch.' },
        ],
        colors: [
            { id: 'gray', name: 'Gray', classes: 'bg-gray-300 checked:outline-gray-400' },
        ],
        sizes: [],
        description: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
        highlights: [
            'Soft felt material',
            'Compact size',
        ],
        details: '',
    },
];

export default products;