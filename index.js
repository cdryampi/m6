const path = require('path');
const express = require('express');
const app = express();



// settings
app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'src')))

// listen the server
const server = app.listen(app.get('port'), () => {
    console.log('Listening on port', app.get('port'))
})