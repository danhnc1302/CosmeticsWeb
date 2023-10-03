import express from 'express'
import http from 'http'
import cors from 'cors'
import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import bodyParser from 'body-parser'
import { expressMiddleware } from '@apollo/server/express4'
import fakeData from './fakeData/index.js'
const app =  express()

const typeDefs = `#graphql
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
        orders: [Order]
    }
`
const resolvers = {
    Query: {
        products: () => { return fakeData.products },
        orders: () => { return fakeData.orders }
    },
    BasketProduct: {
        product: (parent, args) => { 
            const productId = parent.productId
            return fakeData.products.find(product => product.id === productId)
         },
    },
    Order: {
        orderProducts: (parent, args) => {
            const orderId = parent.id
            return fakeData.basketProducts.filter(basketProduct => basketProduct.orderId === orderId )
        }
    }
}

const httpServer = http.createServer(app)
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})]
})

await server.start()

app.use(cors(), bodyParser.json(), expressMiddleware(server))

await new Promise((resolver) => httpServer.listen({port: 4000}, resolver))

console.log("Server ready at http://localhost:4000/")




