import fakeData from "../fakeData/index.js"

export const resolvers = {
    Query: {
        products: () => { return fakeData.products },
        orders: () => { return fakeData.orders },
        baskets: () => { return fakeData.basketProducts }
    },
    BasketProduct: {
        product: (parent, args) => { 
            const productId = parent.productId
            return fakeData.products.find(product => product.id === productId)
         },
        user: (parent, args) => {
            const userId = parent.userId
            console.log(userId)
            return fakeData.user.find(user => user.id === userId)
        }
    },
    Order: {
        orderProducts: (parent, args) => {
            const orderId = parent.id
            return fakeData.basketProducts.filter(basketProduct => basketProduct.orderId === orderId )
        }
    }

}
