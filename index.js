const path = require('path');
const express = require('express');
const app = express();



// settings
app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'src')))

// listen the server
const server = app.listen(3000, '0.0.0.0', () => {
    console.log('Estic escoltant al port ', app.get('port'))
})