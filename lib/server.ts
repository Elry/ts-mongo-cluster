import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import gameRoute from "./routes/game.route";
import fieldRoute from "./routes/field.route";
import playerRoute from "./routes/player.route";

dotenv.config();

const app = express();
const router = express.Router();
const enableCORS = function (req, res, next) {
  if (!process.env.DISABLE_XORIGIN) {
    /* Test only*/
    const allowedOrigins = ["*"]; 
    const origin = req.headers.origin;
    /* Test only*/

    if (!process.env.XORIGIN_RESTRICT || allowedOrigins.indexOf(origin) > -1) {
      res.set({
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Methods": "GET, POST",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
      });
    }
  }
  next();
};

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

// home
app.get('/', (req, res) => res.json('TS challenge'));

// setting basic cors
app.use('/api', enableCORS, router);

// get err
app.use(function (err, req, res, next) {
  if (err) {
    res
      .status(err.status || 500)
      .type("json")
      .send(err.message || "SERVER ERROR");
  }
});

// 404
app.use(function (req, res) {
  if (req.method.toLowerCase() === "options") {
    res.end();
  } else {
    res.status(404).type("json").send("Not Found");
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Running at https://${process.env.HOSTNAME}:${process.env.PORT}`);
});

// setting routes
router.use('/game', gameRoute);
router.use('/field', fieldRoute);
router.use('/player', playerRoute);
