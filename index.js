//just a comments

//define a variable and place into it the http package (shared code) from node.js
let myhttp = require("http");

//use dot notation in javascript to access an object and its methods (commands) and properties

let myserver = myhttp.createServer(
  function( myrequest, myresponse ){
    console.log( myrequest.url );

    let mytext;
    if(myrequest.url === "/hey"){
       mytext = "Well hello there...";
    }else{
       mytext = "I don't know you!";
    }

    mytext = mytext + " - Please help me... I am trapped in a Node.js server!";
    
    myresponse.writeHead( 200, {"Content-Type": "text/plain"});

    myresponse.end(mytext + "\n");
  }
);

myserver.listen(8080, "0.0.0.0");

console.log("server has started");