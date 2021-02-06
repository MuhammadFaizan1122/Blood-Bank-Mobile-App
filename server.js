const express = require('express');
const app = express();
const cors = require('cors')
const port = 19006;
const mongoose = require('mongoose');
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://admin:admin123@cluster0.ntz5u.mongodb.net/<Testing-Data>?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(console.log('mongoose are connected successfully'))
    .catch(err => console.log('err', err))

const UserSchema = new mongoose.Schema({
    name: string,
    email: string
})

const UserList = mongoose.modal('userList', UserSchema)

// app.get("/", (req, res) => {
//        UserList.find(users => res.json(users))
// })

app.post('/register', async(req, res) => {
    const { name, email } = req.body;
    //     const user = new UserList({ name, email });
    await UserList.create({ name, email });
    res.json({
        "message": "success"
    })

})

app.listen(port, () => {
    console.log(`Example app listening at https://localhost.19006`)
})