const express = require('express');
const router = express.Router();
//add all other routes here for usage
const UserRoutes = require('./api/userRoutes');
const BookRoutes = require('./api/bookRoutes'); // Adjust path to `bookRoutes.js`

// Mount book routes at `/books`
router.use('/books', BookRoutes);
router.use('/user', UserRoutes);


// Add any other routers here if needed
// e.g., router.use('/users', userRoutes);
//for now, I just added books for the explore the connection between this scripts (yorumları okuyun o kadar yaziyom :(((

module.exports = router;