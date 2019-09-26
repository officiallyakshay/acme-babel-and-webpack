const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
})
// app.get('/api/users', async (req, res, next) => {
//   try {
//     res.send(await db.getUsers());
//   }
//   catch (ex) {
//     next(ex);
//   }

// });

app.listen(3000, () => console.log('listening on port 3000'));

