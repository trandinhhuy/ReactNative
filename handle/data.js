
import image from "../handle/image"
import icons from "../handle/icon"

const CartData = [
    {
        id: 1,
        stock: 1,
    },
    {
        id: 10,
        stock: 2
    }
]
const RestaurantData = [
    {
        id: 1,
        name: "King",
        rate: 4
    },
    {
        id: 2,
        name: "Steak House",
        rate: 4
    },
    {
        id: 3,
        name: "Bistrot De Saigon",
        rate: 3
    },
    {
        id: 4,
        name: "Vietname House",
        rate: 5
    }
]


const ProductData = [
    {
        id: 1,
        name: "Chesse burger",
        title: 1,
        image: image.burger1,
        price: 10,
        restaurant: 1,
        stock: 10,

    },
    {
        id: 2,
        name: "Beef burger",
        title: 1,
        image: image.burger2,
        price: 15,
        restaurant: 1,
        stock: 6
    },
    {
        id: 3,
        name: "Burger and chip",
        title: 1,
        image: image.burger3,
        price: 20,
        restaurant: 2,
        stock: 10
    },
    {
        id: 4,
        name: "2 layer burger",
        title: 1,
        image: image.burger4,
        price: 12,
        restaurant: 3,
        stock: 13
    },
    {
        id: 5,
        name: "Indian Burger",
        title: 1,
        image: image.burger5,
        price: 16,
        restaurant: 3,
        stock: 11
    },
    {
        id: 6,
        name: "Italy pasta",
        title: 2,
        image: image.pasta1,
        price: 19,
        restaurant: 2,
        stock: 12
    },
    {
        id: 7,
        name: "Nui Pasta",
        title: 2,
        image: image.pasta2,
        price: 15,
        restaurant: 3,
        stock: 12
    },
    {
        id: 8,
        name: "Spagetti",
        title: 2,
        image: image.pasta3,
        price: 19,
        restaurant: 4,
        stock: 20
    },
    {
        id: 9,
        name: "Broccoli Pasta",
        title: 2,
        image: image.pasta4,
        price: 17,
        restaurant: 3,
        stock: 20
    },
    {
        id: 10,
        name: "Huge Pasta",
        title: 2,
        image: image.pasta5,
        price: 25, 
        restaurant: 2,
        stock: 10
    },
    {
        id: 11,
        name: "Lobster Risotto",
        title: 3, 
        image: image.risotto1,
        price: 20, 
        restaurant: 1,
        stock: 9
    },
    {
        id: 12,
        name: "Mini Risotto",
        title: 3, 
        image: image.risotto2,
        price: 17,
        restaurant: 2,
        stock: 8
    },
    {
        id: 13,
        name: "Seafood Risotto",
        title: 3, 
        image: image.risotto3,
        price: 19,
        restaurant: 2,
        stock: 10
    },
    {
        id: 14,
        name: "Mushroom Risotto",
        title: 3,
        image: image.risotto4,
        price: 21, 
        restaurant: 4,
        stock: 5
    },
    {
        id: 15,
        name: "Original Beefsteak",
        title: 4,
        image: image.beefsteak1,
        price: 29,
        restaurant: 4,
        stock: 10
    },
    {
        id: 16,
        name: "Ribeye Steak",
        title: 4,
        image: image.beefsteak2,
        price: 24,
        restaurant: 4,
        stock: 11
    },
    {
        id: 17,
        name: "Salt bae Steak",
        title: 4,
        image: image.beefsteak3,
        price: 30, 
        restaurant: 2,
        stock: 15
    },
    {
        id: 18,
        name: "tenderloin Steak",
        title: 4, 
        image: image.beefsteak4,
        price: 28,
        restaurant: 1,
        stock: 10
    },
    {
        id: 19,
        name: "Tomahauk BeefSteak",
        title: 4,
        image: image.beefsteak5,
        price: 32, 
        restaurant: 4,
        stock: 10
    }
]
const TitleData = [
    {
        id: 1,
        name: "Burger",
        icon: icons.hamburger
    },
    {
        id: 2,
        name: "Pasta",
        icon: icons.pasta
    },
    {
        id: 3, 
        name: "Risotto",
        icon: icons.risotto
    },
    {
        id: 4,
        name: "BeefSteak",
        icon: icons.beefsteak
    }
]

export default {
    RestaurantData, 
    TitleData,
    ProductData,
    CartData
}