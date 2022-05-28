const express = require("express");
const app = express();

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

const bp = require("body-parser");
const cors = require('cors');

/*app.use((req, res, next=undefined) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Credentials', false)
  if (next) next();
})*/

// Body Parser allows us to process json/url-encoded requests properly
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

// Allows us to use our API on websites not on the same origin
app.use(cors());

// Add in routers
//app.use('/config', require('./config.js'))
//app.use('/mff', )
//app.use('/fetch', )

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

module.exports=app