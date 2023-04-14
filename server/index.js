const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoutes = require("./routes/userRoutes")
const tournamentRoutes = require("./routes/tournamentRoutes")
const PORT = 5000;
const cors = require('cors');
const corsOption = {
    origin: ['http://localhost:3000'],
};
app.use(cors(corsOption));
app.use(cors())
app.use(express.json())
app.use("/" , userRoutes)
app.use("/" , tournamentRoutes)
mongoose.connect('mongodb+srv://ankitshivhare0328:ankitdatabase@cluster0.qifixmn.mongodb.net/?retryWrites=true&w=majority')
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});



