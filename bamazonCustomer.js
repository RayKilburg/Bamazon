var inquirer = require('inquirer');
var mysql = require('mysql');

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

  connection.connect(function(err){

  })

listItems();



function listItems(){
connection.query("SELECT * FROM products", function(err, res){
    if(err) throw err;

    for(i = 0; i < res.length; i++ ){
    // console.log(res)
    console.log("---------------")
    console.log(res[i].item_id); 
    console.log(res[i].product_name);
    console.log(res[i].price);
    console.log(res[i].department_name);
    console.log(res[i].stock_quanity);
    }
    inquirer.prompt([
        {
            type: "input",
            name: "userInput",
            message: "Please select the product ID that you would like to buy",
            
        }
    ]).then(function(userAnswer){
       // var input = userAnswer.userInput;
       inquirer.prompt([
           {
               type: "input",
               name: "IDinput",
               message: "How many items would you like to buy"
           }
       ])
        
    })
});
}

//pro
//add logic to propmt
//add table style to info