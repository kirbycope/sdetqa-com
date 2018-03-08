'use strict';
// Load the external dependencies (from package.json)
var express = require('express');
var router = express.Router();

// Amazon Web Services config
var AWS = require("aws-sdk");
AWS.config.loadFromPath('./config.json');
AWS.config.update({ endpoint: "https://dynamodb.us-east-1.amazonaws.com" });
var docClient = new AWS.DynamoDB.DocumentClient();

// Get all products
router.get("/products", function (req, res) {
    // DynamoDB Object
    var params = {
        TableName: "microcenter"
    };
    // GET all the Objects from the DataBase
    docClient.scan(params, function (err, data) {
        // If the DB request returned an error
        if (err) {
            // Return the error to the user
            res.send(err);
        }
        else {
            // Send the data
            res.send(data.Items);
        }
    });
});

// Create: /microcenter/products
router.post("/products", function (req, res) {
    // As a pseudo-security measure, require a Request Header with an email address
    if (req.headers["email"]) {
        // DynamoDB Object
        var params = {
            TableName: "microcenter",
            Item: {
                "description": req.body.description,
                "price": req.body.price,
                "savings": req.body.savings,
                "sku": Number(req.body.sku),
                "stock": req.body.stock,
                "url": req.body.url
            }
        };
        // POST the Object to the DataBase
        docClient.put(params, function (err, data) {
            // If the DB request returned an error
            if (err) {
                // Return the error to the user
                res.send(err);
            }
            else {
                // Return a "Created" response
                res.status(201).send(data);
            }
        });
    }
    else {
        res.status(401).send();
    }
});

// Read: /microcenter/product/12345
router.get("/products/:sku", function (req, res) {
    // DynamoDB Object
    var params = {
        TableName: "microcenter",
        Key: {
            "sku": Number(req.params.sku)
        }
    };
    // GET the Object from the DataBase
    docClient.get(params, function (err, data) {
        // If the DB request returned an error
        if (err) {
            // Return the error to the user
            res.send(err);
        }
        else {
            // Send the data
            res.send(data.Item);
        }
    });
});

// Update: /microcenter/product/12345
router.put("/products/:sku", function (req, res) {
    // As a pseudo-security measure, require a Request Header with an email address
    if (req.headers["email"]) {
        // Define the Update Expression
        var updateExpression = "set ";
        // description
        if (req.body.description) {
            updateExpression += "description = :description";
        }
        // price
        if (req.body.price) {
            if (updateExpression.length > 4) { updateExpression += ", "; }
            updateExpression += "price = :price";
        }
        // savings
        if (req.body.savings) {
            if (updateExpression.length > 4) { updateExpression += ", "; }
            updateExpression += "savings = :savings";
        }
        // stock
        if (req.body.stock) {
            if (updateExpression.length > 4) { updateExpression += ", "; }
            updateExpression += "stock = :stock";
        }
        // url
        if (req.body.url) {
            if (updateExpression.length > 4) { updateExpression += ", "; }
            updateExpression += "url = :url";
        }

        // DynamoDB Object
        var params = {
            // The table to update
            TableName: "microcenter",
            // That table's Primary Key
            Key: {
                "sku": Number(req.params.sku)
            },
            // The update expression (above)
            UpdateExpression: updateExpression,
            // The values for the Update Expression
            ExpressionAttributeValues: {
                ":description": req.body.description || undefined,
                ":price": req.body.price || undefined,
                ":savings": req.body.savings || undefined,
                ":stock": Number(req.body.stock) || undefined,
                ":url": req.body.url || undefined
            },
            // Return the Object in its new state
            ReturnValues: "ALL_NEW"
        };
        // PUT the Object change(s) into the DataBase
        docClient.update(params, function (err, data) {
            // If the DB request returned an error
            if (err) {
                // Return the error to the user
                res.send(err);
            }
            else {
                // Send the data
                res.status(200).send(data);
            }
        });
    }
    else {
        res.status(401).send();
    }
});

// Delete: /microcenter/product/12345
router.delete("/products/:sku", function (req, res) {
    // As a pseudo-security measure, require a Request Header with an email address
    if (req.headers["email"]) {
        // DynamoDB Object
        var params = {
            TableName: "microcenter",
            Key: {
                "sku": Number(req.params.sku)
            }
        };
        // Delete the Object from the DataBase
        docClient.delete(params, function (err, data) {
            // If the DB request returned an error
            if (err) {
                // Return the error to the user
                res.send(err);
            }
            else {
                // Send the data
                res.status(200).send(data);
            }
        });
    }
    else {
        res.status(401).send();
    }
});

// Required (https://nodejs.org/api/modules.html#modules_module_exports)
module.exports = router;
