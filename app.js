const express = require('express')
var cors = require('cors');
const responseTime = require('response-time')

const app = express()
app.use(express.json())
app.use(cors());

const port = 3000;

app.use(responseTime((req, res, time) => {
  console.log(req.method, req.url, time + 'ms');
}));

// routes
app.use('/api/user/',require('./src/routes/userRoute'))


app.get('/health',(req, res)=>{
  res.status(200).send({ success: true, message: "health check success"});
})

app.get('/favicon.ico',(req, res, next)=>{
    res.status(200).send({ success: true});
})
app.all('*', (req, res, next) => {
  res.status(404).send({ success: false, error:`Can't find ${req.originalUrl} on the server`});
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
  });

module.exports = app;