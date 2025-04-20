const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 10000;  // Utilitzem el port 10000 per Render

app.use(cors());
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Servidor en marxa a http://localhost:${port}`);
});


