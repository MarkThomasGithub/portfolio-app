const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public')
const port = process.env.PORT || 3000; //variable set by heroku

app.use(express.static(publicPath));

//if not in public directory serve up index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

//port 3000 okay for local machine but not for heroku
app.listen(port, () => {
    console.log("server online");
});
