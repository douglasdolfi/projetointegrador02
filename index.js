// index.js
import express from 'express'

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT}`);
});

app.get('/',(req,res) => {
	res.send('Nossa API está funcionando!')
})