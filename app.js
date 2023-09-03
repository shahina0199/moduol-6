const express = require('express');
const router = express.Router();

// Import your controller functions
const blogController = require('../Controllers/blogController');
const blogDetailsController = require('../Controllers/blogDetailsController');
const commentController = require('../Controllers/commentController');
const messageController = require('../Controllers/messageController');
const portfolioController = require('../Controllers/portfolioController');
const productController = require('../Controllers/productController');
const profitController = require('../Controllers/profitController');
const projectController = require('../Controllers/projectController');
const serviceController = require('../Controllers/serviceController');
const titleController = require('../Controllers/titleController');

// Define router paths for each controller function

// Example for the blogController
router.get('/blog/create', blogController.create);
router.get('/blog/read', blogController.read);
router.get('/blog/delete', blogController.delete);
router.get('/blog/update', blogController.update);

// Repeat this pattern for all other controllers and functions...

// Routes for blogDetailsController
router.get('/blog-details/create', blogDetailsController.create);
router.get('/blog-details/read', blogDetailsController.read);
router.get('/blog-details/delete', blogDetailsController.delete);
router.get('/blog-details/update', blogDetailsController.update);

// Routes for commentController
router.get('/comment/create', commentController.create);
router.get('/comment/read', commentController.read);
router.get('/comment/delete', commentController.delete);
router.get('/comment/update', commentController.update);

// Continue this pattern for all controllers and functions...

module.exports = router;
