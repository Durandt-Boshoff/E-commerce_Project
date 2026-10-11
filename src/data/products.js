import AppleWatch from "../assets/images/apple-watch.png";
import SonyHeadphones from "../assets/images/sony-headphones.png";
import Iphone11Black from "../assets/images/iphone-11-black.png";
import Iphone11Blue from "../assets/images/iphone-11-blue.png";
import Iphone11Red from "../assets/images/iphone-11-red.png";
import Iphone11White from "../assets/images/iphone-11-white.png";
import Iphone13 from "../assets/images/iphone-13.png";
import Iphone14 from "../assets/images/iphone-14.png";

export const products = [
  {
    id: 'p1',
    name: 'Apple Watch',
    variant: 'Series 5 SE',
    price: 529.99,
    category: 'Watches',
    image: AppleWatch,
    rating: 4.5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim odio faucibus nec malesuada.',
  },
  {
    id: 'p2',
    name: 'Sony ZX330BT',
    variant: 'Light Grey',
    price: 39.99,
    category: 'Headphones',
    image: SonyHeadphones,
    rating: 4.5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim odio faucibus nec malesuada.',
  },
  {
    id: 'p3',
    name: 'Iphone 11',
    variant: 'Serious Black',
    price: 619.99,
    category: 'Phones',
    image: Iphone11Black,
    rating: 4.5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim odio faucibus nec malesuada.',
  },
  {
    id: 'p4',
    name: 'Iphone 11',
    variant: 'Subway Blue',
    price: 619.99,
    category: 'Phones',
    image: Iphone11Blue,
    rating: 4.5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim odio faucibus nec malesuada.',
  },
  {
    id: 'p5',
    name: 'Iphone 11',
    variant: 'Product RED',
    price: 619.99,
    category: 'Phones',
    image: Iphone11Red,
    rating: 4.5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim odio faucibus nec malesuada.',
  },
  {
    id: 'p6',
    name: 'Iphone 11',
    variant: 'Milky White',
    price: 619.99,
    category: 'Phones',
    image: Iphone11White,
    rating: 4.5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim odio faucibus nec malesuada.',
  },
  {
    id: 'p7',
    name: 'Iphone 13',
    variant: 'Product RED',
    price: 619.99,
    category: 'Phones',
    image: Iphone13,
    rating: 4.5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim odio faucibus nec malesuada.',
  },
  {
    id: 'p8',
    name: 'Iphone 14',
    variant: 'Product RED',
    price: 619.99,
    category: 'Phones',
    image: Iphone14,
    rating: 4.5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim odio faucibus nec malesuada.',
  },
];

export function getProductById(id) {
  return products.find((product) => product.id === id);
}

export default products;
