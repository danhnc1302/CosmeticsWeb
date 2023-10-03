export default {
    products: [
        {
            id: "1",
            name: "Product1",
            image: "Image1",
            description: "Description1",
            price: 1.1,
            type: "Type1",
        },
        {
            id: "2",
            name: "Product2",
            image: "Image2",
            description: "Description2",
            price: 2.2,
            type: "Type2",
        },
        {
            id: "3",
            name: "Product3",
            image: "Image3",
            description: "Description3",
            price: 3.3,
            type: "Type3",
        },
    ],
    basketProducts: [
        {
            id: "111",
            quantity: 2,
            productId: "1",
            orderId: "1111"
        },
        {
            id: "222",
            quantity: 2,
            productId: "2",
            orderId: "2222"
        }
    ],
    orders: [
        {
            id: "1111",
            userName: "danh",
            phoneNumber: "0373",
            address: "196CH",
            totalPrice: 12.345,
        }
    ]
}