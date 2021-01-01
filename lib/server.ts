import dotenv from "dotenv";
import express from "express";
import mongoose, { Schema } from "mongoose";

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

mongoose.connect(process.env.MONGO_URI, {})

// home
app.get('/', (req, res) => res.send('Celebreak challenge'));

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

const findByDate = (date:string, done) => {
  Player.find({lastGame:date}, function(err, data){
    if(err) return console.log(err);
    done(null, data);
  });
};

router.get("/findByDate", function(req, res){
  Player.find({lastGame: "2020-01-01"}, function(err, result) {
    if (!err) {
      console.log('players', result);
      res.send(result);
    }else{
      console.log(err);
      res.send("nops");
    }
  });
});

/* PLAYER CREATION */
const playerSchema:Schema = new Schema({
  name: {type:String,required: true},
  lastGame: {type:String}
});

const Player = mongoose.model("Player", playerSchema);

const createPlayers = (playersArr, done) => {
  Player.create(playersArr, function(err, data){
    if(err) return console.log(err);
    done(null, data);
  });
};

const createPlayer = (done) => {
  let player = new Player({
    name:"a",
    lastGame: "2020-01-01"
  });

  player.save(function(err,data){
    if(err) return console.log(err);
    done(null, data);
  });
};

router.get("/cPlayer", function (req, res, next) {
  let t = setTimeout(() => {
    next({ message: "timeout" });
  }, 10000);
  createPlayer(function (err, data) {
    clearTimeout(t);
    if (err) {
      return next(err);
    }
    if (!data) {
      console.log("Missing `done()` argument");
      return next({ message: "Missing callback argument" });
    }
    Player.findById(data._id, function (err, pers) {
      if (err) {
        return next(err);
      }
      res.json(pers);
    });
  });
});
/* PLAYER CREATION */