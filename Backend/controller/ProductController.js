import Product from '../Model/Product.js';

export const getProduct = async (req, res) => {
  try {
    // Fetch all products from the database
    const products = await Product.find();
    
    // Send the fetched products in the response
    res.status(200).json(products);
  } catch (error) {
    console.log('Error:', error);
    
    // Send a 500 error response if something goes wrong
    res.status(500).json({ message: 'Internal Server Error', error });
  }
};
