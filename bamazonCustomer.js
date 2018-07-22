var inquirer = require("inquirer");
var mysql = require("mysql");

// Connecting to DB
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "Bamazon_DB"
});

connection.connect(function(err) {});

listItems();
// buyItem();


function listItems() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

    for (i = 0; i < res.length; i++) {
      // console.log(res)
      console.log("---------------");
      console.log(res[i].item_id);
      console.log(res[i].product_name);
      console.log(res[i].price);
      console.log(res[i].department_name);
      console.log(res[i].stock_quanity);
    }
    inquirer
      .prompt([
        {
          type: "input",
          name: "userInput",
          message: "Please select the product ID that you would like to buy"
        }
      ])
      .then(function(userAnswer) {
        //var input = userAnswer.userInput;
        //logic
        inquirer
          .prompt([
            {
              type: "input",
              name: "IDinput",
              message: "How many items would you like to buy"
            }
          ])
          .then(function(Amount) {});
      });
  });
}

function buyItem() {
  // query th db for all items
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    // once you have all the products form the db ask user what item they want to buy
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].item_id);
            }
            return choiceArray;
          },
          message: "Please select the ID of the item you like to buy."
        },
        {
          name: "amount",
          type: "input",
          message: "How many would you like to buy?"
        }
      ])
      .then(function(answer) {
        // Get info of the chosen id
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].item_id === answer.choice) {
            chosenItem = results[i];
          }
        }

        // determine if there is enough stock of that item
        if (chosenItem.stock_quanity < parseInt(answer.amount)) {
          // if theres aenough stock left, update stock and let user know, then restart
          connection.query("UPDATE products SET ? WHERE ?", [
            {
              stock_quanity: answer.amount
            },
            {
              item_id: chosenItem.item_id
            }
          ],
          function(error){
              if(error) throw err;
              console.log("Purchase Complete!")
              //restart();
          }
        );
        }
        else{
            //if not enough stock 
            console.log("There is not enough in stock, try again some other time.");
            //restart();
        }
      });
  });
}

//pro
//add logic to propmt
//add table style to info
