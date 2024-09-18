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
        'x-api-key': "61b833e3775949919410374d2b830b36_7081146179a447db9a79a65842a74dc7_andoraitools",
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
                'x-api-key': "61b833e3775949919410374d2b830b36_7081146179a447db9a79a65842a74dc7_andoraitools",
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
              'x-api-key': "61b833e3775949919410374d2b830b36_7081146179a447db9a79a65842a74dc7_andoraitools",
            },
  })
  console.log("response:" , response)
       res.send(response.data);
  }catch(error){
      res.status(500).send(error.message);
  }
})


app.post('/avtar-status' , async (req , res) => {
  console.log(req.body)
  try{
    const response = await axios.post('https://api.lightxeditor.com/external/api/v1/order-status' , req.body ,{
      headers: {
          'Content-Type': 'application/json',
          'x-api-key': "61b833e3775949919410374d2b830b36_7081146179a447db9a79a65842a74dc7_andoraitools",
        },
    })
    res.send(response?.data)
  }catch(error){
    res.status(500).send(error.message);
  }
})

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
