import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

const users = [];

const tweets = [];

server.post("/sign-up", (request, response) => {
    
     users.push(
         {
         username: request.body.username,
         avatar: request.body.avatar
         }
      );
      response.send("OK");
      
});



server.post("/tweets", (request, response) => {

    let image = "";

    for (let i = 0; i < users.length; i++){
        if (users[i].username === request.body.username) {
            image = users[i].avatar;
            break;
        }
    }
    
    tweets.push(
        {
            username: request.body.username,
            tweet: request.body.tweet,
            avatar: image
        });
        
        response.send("OK");
});

server.get("/tweets", (request, response)=> {
    let last10 = [];
    let counter = 0;
    for(let i = tweets.length; i > 0; i--) {
        last10.push(tweets[i - 1]);
        counter++;
        if(counter === 10) {
            break;
        }
    }
    response.send(last10);
});


server.listen(5000);