import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
    openapi: "3.0.0",
    info: {
        title: "My API Documentation",
        version: "1.0.0"
    },
    servers: [
        {
            url: "http://localhost:3000"
        }
    ],
    components: {
        schemas: {
            pizza: {
                type: "object",
                required: ["name", "image", "price", "ingredients"],
                properties: {
                    name: {
                        type: "string"
                    },
                    image: {
                        type: "string"
                    },
                    price: {
                        type: "number"
                    },
                    ingredients: {
                        type: "array",
                        items: {
                            type: "string"
                        }
                    },
                    description: {
                        type: "string"
                    }
                }
            },
            cart: {
                type: "object",
                required: ["owner", "total", "pizzas"],
                properties: {
                    owner: {
                        type: "string"
                    },
                    total: {
                        type: "number",
                        readOnly: true
                    },
                    pizzas: {
                        type: "array",
                        items: {
                            type: "object",
                            required: ["pizza", "quantity", "subtotal", "ingredients"],
                            properties: {
                                pizza: {
                                    type: "string",
                                    format: "objectId"
                                },
                                quantity: {
                                    type: "number"
                                },
                                subtotal: {
                                    type: "number",
                                    readOnly: true
                                },
                                ingredients: {
                                    type: "array",
                                    items: {
                                        type: "string"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            cartPizza: {
                type: "object",
                required: ["pizza", "quantity", "ingredients"],
                properties: {
                    pizza: {
                        type: "string",
                        format: "objectId"
                    },
                    quantity: {
                        type: "number"
                    },
                    subtotal: {
                        type: "number"
                    },
                    ingredients: {
                        type: "array",
                        items: {
                            type: "string"
                        }
                    }
                }
            },
            order: {
                type: "object",
                required: ["address", "arrived"],
                properties: {
                    cart: {
                        type: "object",
                        readOnly: true,
                        required: ["owner", "total", "pizzas"],
                        properties: {
                            owner: {
                                type: "string"
                            },
                            total: {
                                type: "number"
                            },
                            pizzas: {
                                type: "array",
                                items: {
                                    type: "object",
                                    required: ["pizza", "quantity", "subtotal", "ingredients"],
                                    properties: {
                                        pizza: {
                                            type: "string",
                                            format: "objectId"
                                        },
                                        quantity: {
                                            type: "number"
                                        },
                                        subtotal: {
                                            type: "number"
                                        },
                                        ingredients: {
                                            type: "array",
                                            items: {
                                                type: "string"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    address: {
                        type: "string"
                    },
                    arrived: {
                        type: "boolean",
                        default: false
                    },
                    arrivalTime: {
                        type: "string",
                        format: "date-time",
                    }
                }
            }
        }
    }
};

const swaggerOptions: OAS3Options = {
    swaggerDefinition,
    apis: ["./src/routes/pizza.routes.ts", "./src/routes/cart.routes.ts", "./src/routes/order.routes.ts"]
};

export default swaggerJSDoc(swaggerOptions);