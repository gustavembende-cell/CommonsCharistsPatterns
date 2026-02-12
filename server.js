const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const subscriptionRoutes = require('./routes/subscription');
const middleware = require('./middleware/auth');

// Middleware
app.use(bodyParser.json());
app.use(middleware);

// Routes
app.use('/api/users', userRoutes);
app.use('/api/subscriptions', subscriptionRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/commons_charists_patterns', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('MongoDB connected');
}).catch(err => console.log(err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});