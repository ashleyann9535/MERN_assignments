const express = require("express");
const app = express();
    
require("./server/config/mongoose.config");
    
app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyJokeRoutes = require('./server/routes/jokes.routes');
AllMyJokeRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));