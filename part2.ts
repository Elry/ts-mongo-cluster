const express = require("express");
const app = express();
const PORT = 8000;

try{
  let mongoose = require("mongoose");
}catch(e){
  console.log(e);
}

const enableCORS = function (req, res, next) {
  if (!process.env.DISABLE_XORIGIN) {
    /* Test only*/
    const allowedOrigins = ["*"]; 
    const origin = req.headers.origin;
    /* Test only*/

    if (!process.env.XORIGIN_RESTRICT || allowedOrigins.indexOf(origin) > -1) {
      console.log(req.method);
      res.set({
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Methods": "GET, POST",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
      });
    }
  }
  next();
};

const TIMEOUT = 10000;

app.get('/', (req, res) => res.send('Celebreak challenge'));
app.listen(PORT, () => {
  console.log(`Running at https://127.0.0.1:${PORT}`);
});