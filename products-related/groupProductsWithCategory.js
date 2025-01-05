// takes an array of products as parameter
// presumes each product has a category, for example 'men's clothing'
// makes an array of categories
// grups each product with its corresponding category
// returns the categories array 

const groupProductsWithCategory = (products) => {
    let categories = [];

    products.forEach(product => {

        let thisProductCategory = categories.find(category => category[product.category])

        if (!thisProductCategory) {
            categories.push({ [product.category]: [] })

            thisProductCategory = categories.find(category => category[product.category])
        }

        thisProductCategory[product.category].push(product)
    })

    return categories
}