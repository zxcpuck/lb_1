fetch(`https://dummyjson.com/products`)
    .then(value => value.json())
    .then(productArray => {
        console.log(productArray)
        let container = document.createElement('div');
        container.classList.add('product-container')


        for (const product of productArray.products) {
            let productDiv = document.createElement('div');
            productDiv.classList.add('product-div')
            let productTitle = document.createElement('h3');
            productTitle.innerText = `Product id: ${product.id}\n Title:${product.title}\nProduct price: ${product.price}$`
            let productImg = document.createElement('img');
            productImg.src = `${product.thumbnail}`
            let productDscr = document.createElement('p');
            productDscr.innerText=`${product.description}`
            let hr = document.createElement('hr');




            productDiv.append(productTitle,productImg,productDscr,hr)
            container.append(productDiv)
        }
        document.body.append(container)
    })