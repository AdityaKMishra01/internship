const express = require('express');
const connectDB = require('./db/dbConn');
const User = require('./db/user');
const app = express();
const cors = require('cors');

const port = 8000;

connectDB();

app.use(cors({
  origin: 'http://localhost:3000', // Allow only React app
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow methods you need
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow necessary headers
}));
app.use(express.json());
app.post('/register',async(req,res)=>{
    try{
        const {name,email,mobile,designation,gender,course,image} = req.body;
        const user = new User({name,email,mobile,designation,gender,course,image});
        await user.save() 
        res.status(210).json({msg:"User registered success"})
    } catch(err){
        console.log(err)
    }
});

app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error); // Logs full error to console
        res.status(500).send('Error fetching users');
    }
});


  app.put('/api/users/:id', async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedUser);
    } catch (error) {
      res.status(500).send('Error updating user');
    }
  });

  app.delete('/api/users/:id', async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).send('Error deleting user');
    }
  });

app.listen(port,
    console.log(`server is listening on port ${port}`)
)
