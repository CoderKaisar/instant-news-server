const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const news = require('../instant-news-server/data/news.json')
app.use(cors())

app.get("/", (req, res) => {
    res.send("server is runnng")
})

app.get("/news", (req, res) => {
    res.send(news)
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => parseInt(n._id) === parseInt(id))
    res.send(selectedNews)
})
app.listen(port, () => {
    console.log(`instant news server is running on port ${port}`)
})