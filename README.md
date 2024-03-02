# Pizzeria API

This is a RESTful API built with nodejs and express with typescript for a pizzeria. It allows you to create, read, update and delete pizzas and carts. You can also add or remove pizzas from a cart, and calculate the total and subtotal prices.

## Documentation

You can access the documentation of the API by going to the `/swagger` endpoint, where you will see a swagger UI with all the information about the API. The documentation is generated from the comments and annotations in the code, using the `swagger-jsdoc` and `swagger-ui-express` libraries.

## Installation

To run this project, you need to have nodejs and MongoDB installed on your machine. Then, follow these steps:

- Clone this repository: `git clone https://github.com/ThePixels21/pizzeriaNodeAPI.git`
- Go to the project folder: `cd pizzeriaNodeAPI`
- Install the dependencies: `npm install`
- Run the server: `npm run dev`

## Usage

You can use any HTTP client, such as Swagger, Postman or curl, to make requests to the API. The base URL is `http://localhost:PORT`, where PORT is the port you specified in the .env file or 3001 by default.

The API has two main resources: pizzas and carts. Each resource has its own endpoints.

### Pizzas

The pizzas resource represents the different types of pizzas that the pizzeria offers. Each pizza has a name, an image, a price, a list of ingredients, and a description.

### Carts

The carts resource represents the orders that the customers make. Each cart has an owner, a total, a list of pizzas, and a date. Each pizza in the cart has a quantity, a subtotal, and a list of ingredients. The total and the subtotals are calculated based on the price and the quantity of each pizza. The date is the time when the cart was created, updated or ordered.
