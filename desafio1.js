class Product {
    constructor() {
        this.products = [];

    }
    addProduct(title, description, price, thumbnail, code, stock) {
        const product = {
            id: this.#getProductsById() + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }
        this.products.push(product);
    }
    #getProductsById() {
        let maxId = 0;
        this.products.map((product) => {
            if (product.id > maxId) maxId = product.id;
        });
        return maxId;
    }

    getProducts() {
        return this.products;
    }

    addProductCode() {
        const codeExists = this.#getProductCode(code);

        if (codeExists) {
            console.error("not found");
            return false;
        }

    }
    #getProductCode(code) {
        return this.getProducts.find((product) => product.code === code)
    };
}

const product = new Product();

product.addProduct("iPhone 14", "Smartphone de alta gama", 1500, "https://m.media-amazon.com/images/I/619f09kK7tL._AC_UF894,1000_QL80_.jpg", 1, 20)
product.addProduct("Monitor", "monitor sansung 32", 500, "https://images.fravega.com/f500/32397e21c5240c13f2d32ad3842cd3e8.jpg", 2, 5)
console.log(product.getProducts())