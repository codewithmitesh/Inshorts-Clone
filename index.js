// ES6 Imports (latest imports and to use we add module in package.json 
import express from 'express';
// to resolve cors issue of backend eg. to run the different servers front and backend on localhost 
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
//components
// import Connection from './connection/db.js';
import Route from './routes/Route.js';
// import DefaultData from './default.js'

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', Route);

const PORT = process.env.port || 8000;

// Heroku Deployment

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(frontend / build)));
    const path = require('path');
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
}



app.listen(PORT,
    () => console.log(`Server is running successfully on PORT ${PORT}`));

// DefaultData();

/**News ApI key :- 356800ee65934fd3b1b6e9b871d7388d */