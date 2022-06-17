import express from "express";
import cors from "cors";

const server = express();
server.use(cors());

const users = [];

server.post("/sign-up", (request, response) => {
    console.log(request);
    // users.push(
    //     {
    //     username: request.body.username,
    //     avatar: request.body.avatar
    //     }
    //  );
    //  response.send("OK");
});

server.get("/sign-up", (request, response) => {
    response.send(users);
});

server.listen(5000);