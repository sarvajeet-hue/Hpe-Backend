const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())

app.post('/remove-background', async (req, res) => {
  try {
    
    const response = await axios.post('https://api.lightxeditor.com/external/api/v1/remove-background', req.body, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '1bdb846f1ab84fa98163fb15ec784f26_2db605f0fb574a7dbf726bce5dbfe952_andoraitools',
      },
    });
    res.send(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/remove-background-with-orderId' , async (req , res) => {
    try{
            const response = await axios.post('https://api.lightxeditor.com/external/api/v1/order-status' , req.body ,{
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '1bdb846f1ab84fa98163fb15ec784f26_2db605f0fb574a7dbf726bce5dbfe952_andoraitools',
              },
    })
         res.send(response.data);
    }catch(error){
        res.status(500).send(error.message);
    }
})


app.post('/avtar' , async (req , res) => {
  try{
      console.log(req.body)
      const response = await axios.post('https://api.lightxeditor.com/external/api/v1/avatar' , req.body ,{
          headers: {
              'Content-Type': 'application/json',
              'x-api-key': '1bdb846f1ab84fa98163fb15ec784f26_2db605f0fb574a7dbf726bce5dbfe952_andoraitools',
            },
  })
       res.send(response.data);
  }catch(error){
      res.status(500).send(error.message);
  }
})

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
