const express = require('express');
const app = express();
const PORT = 9101;
const cors = require('cors'); // Import the cors package
const fs = require('fs'); // Import the fs module

app.use(express.json());
app.use(cors()); // Use the cors middleware to enable CORS for all routes

let ordersInfo = [];

app.post('/orders', (req, res) => {
  const requestData = req.body;
   // Log the received data
  // Process requestData and respond accordingly
  console.log("Received request:", req.headers);
  ordersInfo.push(requestData);

  // fs.writeFileSync('orders.json', JSON.stringify(ordersInfo, null, 2), 'utf-8');
  // // For example, you can send a response back to the client:
  // res.status(200).json({ message: 'Order received successfully', data: requestData });
  // console.log("Received data:", requestData);

  try {
    // Process requestData and respond accordingly
    ordersInfo.push(requestData);
    fs.writeFileSync('orders.json', JSON.stringify(ordersInfo, null, 2), 'utf-8');

    res.status(200).json({ message: 'Order received successfully', data: requestData });
    console.log("Response sent.");
    console.log(requestData);
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

app.get('/orders', (req, res) => {
  const cookieValue = req.cookies.myCookie;
  const userAgent = req.headers['user-agent'];
  // Process cookieValue and userAgent and respond accordingly
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
