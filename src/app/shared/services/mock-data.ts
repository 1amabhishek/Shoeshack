import { PaymentCard } from '../models/payment-card.model'
import { Person } from '../models/person.model'
import { Product } from '../models/product.model'
import { Purchase } from '../models/purchases.model'
import { User } from '../models/user.model'

export const products: Product[] = [
  {
    id: 1,
    name: 'Climacool',
    brand: 'Adidas',
    category: 'Running',
    color: 'Black',
    description:
      'The Adidas Climacool is a running shoe that is designed to keep your feet cool and dry. The shoe features a breathable mesh upper that allows air to flow through the shoe, keeping your feet cool and comfortable. The shoe also has a cushioned midsole that provides support and comfort for long runs. The Adidas Climacool is a great shoe for runners who want to stay cool and comfortable on their runs.',
    price: 30000,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/30/COLUMBIA_MEN%E2%80%99S_CONSPIRACY%E2%84%A2_OUTDRY_SHOE.gif'
  },
  {
    id: 2,
    name: 'Air Max',
    brand: 'Nike',
    category: 'Running',
    color: 'White',
    description:
      'The Nike Air Max is a running shoe that is designed to provide maximum cushioning and support. The shoe features a full-length Max Air unit that provides responsive cushioning and impact protection. The shoe also has a breathable mesh upper that helps keep your feet cool and comfortable. The Nike Air Max is a great shoe for runners who want a comfortable and supportive shoe for long runs.',
    price: 35000,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Bally_shoe_animation.gif'
  },
  {
    id: 3,
    name: "Gel-Kayano",
    brand: "Asics",
    category: "Running",
    color: "Blue",
    description: "The Asics Gel-Kayano is built for stability and cushioning, featuring a durable GEL technology to absorb impact and support long-distance running.",
    price: 36000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Diadora_Trail_Race_Sport_Shoes.gif"
  },
  {
    id: 4,
    name: "Pegasus",
    brand: "Nike",
    category: "Running",
    color: "Grey",
    description: "Nike Pegasus is a versatile running shoe with responsive foam cushioning and a breathable mesh upper, ideal for both daily training and race day.",
    price: 33000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Asics_nimbus.gif"
  },
  {
    id: 5,
    name: "FuelCell Rebel",
    brand: "New Balance",
    category: "Running",
    color: "Red",
    description: "The New Balance FuelCell Rebel offers a lightweight design with FuelCell foam for a propulsive and energetic feel, perfect for faster paces.",
    price: 34000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/26/Canterbury_Speed_rugby_boots.gif"
  },
  {
    id: 6,
    name: "Metcon",
    brand: "Nike",
    category: "Crossfit",
    color: "Black",
    description: "Nike Metcon is a training shoe designed for high-intensity workouts, offering stability and durability for lifting and high-impact exercises.",
    price: 29000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/92/Raf_Simons_shoe_animation.gif"
  },
  {
    id: 7,
    name: "Nano X1",
    brand: "Reebok",
    category: "Crossfit",
    color: "Grey",
    description: "Reebok Nano X1 is engineered for versatile training, featuring lightweight cushioning and flexibility for dynamic movements.",
    price: 31000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Sportive_footwear_animation.gif"
  },
  {
    id: 8,
    name: "HOVR Phantom",
    brand: "Under Armour",
    category: "Running",
    color: "Blue",
    description: "Under Armour HOVR Phantom offers a connected experience, tracking your running metrics with its HOVR technology and providing energy return.",
    price: 34000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Adidas_Yeezy_Boost_Pirate_Black.gif"
  },
  {
    id: 9,
    name: "Speedcross",
    brand: "Salomon",
    category: "Trail",
    color: "Green",
    description: "Salomon Speedcross is a rugged trail shoe with aggressive grip, ideal for soft and technical terrain. It features durable materials and a precise fit.",
    price: 30000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/84/Givenchy_footwear_animation.gif"
  },
  {
    id: 10,
    name: "GEL-Nimbus",
    brand: "Asics",
    category: "Running",
    color: "Purple",
    description: "Asics GEL-Nimbus provides plush comfort with GEL technology and FlyteFoam, designed to absorb impact and reduce strain over long distances.",
    price: 37000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7c/LV_Trainer_Sneaker_Boot_animation.gif"
  }
]

export const users: User[] = [
  {
    id: 1,
    email: 'abhishekyadav@gmail.com',
    role: 'Admin'
  }
]

export const people: Person[] = [
  {
    id: 1,
    firstName: 'Abhishek',
    lastName: 'Yadav',
    phoneNumber: '(+34) 0934567890',
    country: 'India',
    address: 'Banglore, Karnataka-560066'
  }
]

export const paymentCards: PaymentCard[] = [
  {
    id: 1,
    user: users[0],
    cardholder: 'John Doe',
    expiration: '12/2026',
    number: '4491956412564387'
  },
  {
    id: 2,
    user: users[0],
    cardholder: 'John Doe',
    expiration: '06/2028',
    number: '5314856419852647'
  },
  {
    id: 3,
    user: users[0],
    cardholder: 'John Doe',
    expiration: '09/2025',
    number: '3856412563145874'
  }
]

export const purchases: Purchase[] = [
  {
    id: 1,
    user: users[0],
    paymentCard: paymentCards[0],
    purchaseDate: new Date(),
    total: 50000,
    items: [
      {
        product: products[1],
        quantity: 2
      }
    ]
  }
]
