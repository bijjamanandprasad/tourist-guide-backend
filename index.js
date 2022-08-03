const express = require("express")
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

app.use('/',authRoutes);
app.use('/post',postRoutes);

// const CONNECTION_URL = "mongodb://localhost:27017/tourist-guide"
const CONNECTION_URL = "mongodb+srv://miniproject:miniproject@tourist.wbss9.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useUnifiedTopology: true},{useNewUrlParser: true},{useFindAndModify:true})
        .then(() => {
            app.listen(PORT,()=>{
                console.log(`Server running on Port ${PORT}`);
            })
        })
        .catch((error) => {
            console.log(error + "Database connection failed!");
        })