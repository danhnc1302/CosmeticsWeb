export const typeDefs = `#graphql
    type User {
        id: String,
        userName: String,
        password: String,
    }

    type Product {
        id: String,
        name: String,
        image: String,
        description: String,
        price: Float,
        type: String,
    }

    type BasketProduct {
        id: String,
        quantity: Int,
        product: Product,
        user: User
    }

    type Order {
        id: String,
        userName: String,
        phoneNumber: String,
        address: String,
        totalPrice: Float,
        orderProducts: [BasketProduct],
    }

    type Query {
        products: [Product],
        baskets: [BasketProduct],
        orders: [Order]
    }
`