const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("server started");
});

let food = {
    pizza: [
        "Margherita",
        "Pepperoni",
        "Vegetarian",
        "Hawaiian",
        "Supreme",
        "BBQ Chicken",
        "Buffalo Chicken",
        "Four Cheese",
        "Meat Lovers",
        "Pesto",
        "Mushroom",
        "Neapolitan",
        "Sicilian",
        "Chicago Deep Dish",
        "White Pizza",
        "Taco Pizza",
        "Greek Pizza",
        "Calzone",
        "Seafood Pizza",
        "Vegan Pizza",
    ],
    burger: [
        "Cheeseburger",
        "Hamburger",
        "Veggie Burger",
        "Turkey Burger",
        "Chicken Burger",
        "BBQ Burger",
        "Mushroom Swiss Burger",
    ],
    paneer: [
        "Regular Paneer",
        "Malai Paneer",
        "Tofu Paneer",
        "Smoked Paneer",
        "Herbed Paneer",
        "Spicy Paneer",
        "Grilled Paneer",
        "Marinated Paneer",
        "Low-Fat Paneer",
        "Cottage Cheese Paneer",
    ],
    dal: [
        "Masoor dal (Red Lentils)",
        "Toor dal (Split Pigeon Peas)",
        "Moong dal (Split Green Gram)",
        "Chana dal (Split Chickpeas)",
        "Urad dal (Split Black Gram)",
        "Arhar dal (Split Yellow Lentils)",
        "Matar dal (Split Yellow Peas)",
        "Kali dal (Whole Black Gram)",
        "Rajma (Kidney Beans)",
        "Chawli (Black Eyed Peas)",
        "Mung beans (Whole Green Gram)",
    ],
    rice: [
        "Jasmine Rice",
        "Basmati Rice",
        "Brown Rice",
        "Sushi Rice",
        "Arborio Rice",
        "Wild Rice",
        "Forbidden Rice",
        "Sticky Rice",
        "Cauliflower Rice",
        "Red Rice",
    ],
};

app.get("/", (req, res, next) => {
    res.send({ name: "nishant", branch: "cse" });
});
app.get("/api/products", (req, res, next) => {
    res.send({ name: "iphone 15", prize: 85000, rating: 4.5 });
});

app.use((req, res, next) => {
    console.log("1st");
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    if (req.accepts("json")) {
        res.json({ error: err.message });
        return;
    }
});

// app.get("/api/food", (req, res) => {
// let { dish } = req.query;

// const filteredUsers = Object.keys(food)
//     .filter(key => dish.includes(key))
//     .reduce((obj, key) => {
//         obj[key] = users[key];
//         return obj;
//   }, {});

// console.log(filteredUsers);

// console.log(food.dish)
// for(let i of Object.keys(food)){
//     console.log(i)
//     if(i === dish){
//         object1.hasOwnProperty(dish)
//     }
// }
// console.log(filteredArr)
// });
