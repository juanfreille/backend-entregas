class ProductManager {
  constructor(products) {
    this.products = products || [];
    this.idCounter = 1;
  }

  addProduct(product) {
    // Validación de campos obligatorios
    if (!this.isValidProduct(product)) return false;

    // Validación de código único
    const existingProduct = this.products.find((p) => p.code === product.code);
    if (existingProduct) {
      console.error(`Ya existe un producto con el código "${product.code}".`);
      return false;
    }

    // Asignación de ID
    product.id = this.idCounter++;

    // Agregar el nuevo producto al array
    this.products.push(product);

    console.log(`Producto "${product.title}" agregado correctamente.`);
    return true;
  }

  isValidProduct(product) {
    const requiredFields = [
      "title",
      "description",
      "price",
      "thumbnail",
      "code",
      "stock",
    ];
    for (const field of requiredFields) {
      if (!product.hasOwnProperty(field)) {
        console.error(
          `El campo "${field}" es obligatorio. "${product.title}" no puede ser agregado`
        );
        return false;
      }
    }
    return true;
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      console.error(`Producto con ID "${id}" no encontrado.`);
      return;
    }
    console.log(`Producto con ID "${id}" encontrado:`);
    return product;
  }
}

const products = [];

const productManager = new ProductManager(products);

const product1 = {
  title: "Jeans",
  description: "Pantalón tiro intermedio, calce chupín.",
  price: 15500,
  thumbnail: "https://i.ibb.co/5FFKrDM/jeans.webp",
  code: "AAA123",
  stock: 10,
};

const product2 = {
  title: "Canguro",
  description: "Canguro con Capucha, Casual",
  price: 16500,
  thumbnail: "https://i.ibb.co/xMT8Lp4/canguro.webp",
  code: "BBB123",
  stock: 20,
};

const product3 = {
  title: "Buzo",
  price: 20000,
  thumbnail: "https://i.ibb.co/M2f1FtF/buzo.webp",
  code: "CCC123",
  stock: 5,
};

const product4 = {
  title: "Camisa",
  description: "Camisa a cuadros con capucha",
  price: 15000,
  thumbnail: "https://i.ibb.co/MsgNGXz/camisa.webp",
  code: "AAA123",
  stock: 15,
};

productManager.addProduct(product1);
productManager.addProduct(product2);
productManager.addProduct(product3);
productManager.addProduct(product4);

console.log(productManager.getProducts());

const product = productManager.getProductById(1);
console.log(product);
const notFoundProduct = productManager.getProductById(20);
