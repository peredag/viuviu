const fs = require('fs');
const path = require('path');

module.exports = {
    products: JSON.parse(fs.readFileSync(path.join(__dirname, "/products.json"), "utf-8")),
    categories: JSON.parse(fs.readFileSync(path.join(__dirname, "/categories.json"), "utf-8")),
    writeProductsJSON: (dataBase) => {
        fs.writeFileSync(path.join(__dirname, "../database/products.json"), JSON.stringify(dataBase), "utf-8")
    },
    users: JSON.parse(fs.readFileSync(path.join(__dirname, "/users.json"), "utf-8")),
    writeUsersJSON: (dataBase) => {
        fs.writeFileSync(path.join(__dirname, "../database/users.json"), JSON.stringify(dataBase), "utf-8")
    }
 }