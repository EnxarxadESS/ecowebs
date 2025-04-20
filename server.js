const express = require('express');
const cors = require('cors');
const app = express();

// Utilitza el port proporcionat per Render o el port per defecte (3000)
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('public'));

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.listen(port, () => {
  console.log(`Servidor en marxa a http://localhost:${port}`);
});



