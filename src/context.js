import React, { Component, createContext } from 'react'
import { storeProducts, detailProduct } from './data'

const ProductContext = createContext()

class ProductProvider extends Component {

    state = {
        products: [],
        detailProduct,
        cart: [],
        // Cart.length
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    }

    componentDidMount() {
        this.setProducts()
    }

    setProducts = () => {
        let tempProducts = []
        storeProducts.forEach(item => {
            const singleItem = { ...item }
            tempProducts = [...tempProducts, singleItem]
        })
        this.setState(() => {
            return { products: tempProducts }
            // State that isn't initialized can be created?
        })
    }

    // If you are going to be changing the values then copy it and don't use the direct reference
    getItem = (id) => {
        const product = this.state.products.find((item) => item.id === id)
        return product
    }

    handleDetail = (id) => {
        // console.log('handle Detail bro')
        const product = this.getItem(id)
        // Id not passed?
        this.setState(() => {
            return { detailProduct: product }
        })
    }

    addToCart = (id) => {
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inCart = true
        product.count = 1
        const price = product.price
        product.total = price
        this.setState(() => {
            return {
                products: tempProducts,
                cart: [...this.state.cart, product]
            }
        }, () => {
            this.addTotals()
        })
        // Struture
    }
    // While aren't we just toggling the modalOpen state (open and close)

    openModal = (id) => {
        const product = this.getItem(id)
        this.setState(() => {
            return {
                modalOpen: true,
                modalProduct: product
            }
        })
    }

    closeModal = () => {
        this.setState(() => {
            return {
                modalOpen: false
            }
        })
    }

    increment = (id) => {
        // We used the index instead of using the product directly
        // Writing this as one method
        let tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]

        product.count = product.count + 1
        product.total = product.count * product.price

        this.setState(() => {
            return {
                cart : [...tempCart]
            }
        }, () => {
            this.addTotals()
        })
    }

    decrement = (id) => {
        let tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]

        product.count = product.count - 1

        if(product.count === 0) {
            this.removeItem(id)
        } else {
            product.total = product.price * product.count
            this.setState(() => {
                return {
                    cart : [...tempCart]
                }
            }, () => {
                this.addTotals()
            })
        }

     
     
    }

    removeItem = (id) => {
        // What is the effect of what you did on the state in general
        let tempProducts = [...this.state.products]
        let tempCart = [...this.state.cart]
        tempCart = tempCart.filter(item => item.id !== id)

        const index = tempProducts.indexOf(this.getItem(id))
        let removedProduct = tempProducts[index]

        removedProduct.inCart = false
        removedProduct.count = 0
        removedProduct.total = 0
        this.setState(() => {
            return {
                cart: [...tempCart],
                products : [...tempProducts]
            }
        }, 
        () => {
            this.addTotals()
        })
    }

    clearCart = () => {
        // Dig into functionality
        this.setState(
            () => {
                return {
                    cart: []
                }
            },
            () => {
                this.setProducts();
                this.addTotals();
            }
        )
    }

    addTotals = () => {
        let subTotal = 0
        this.state.cart.map((item) => subTotal += item.total)
        let tempTax = subTotal * 0.1
        const tax = parseFloat(tempTax.toFixed(2))
        const Total = tax + subTotal
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: Total
            }
        })
    }



    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }