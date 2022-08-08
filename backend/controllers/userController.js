const asyncHandler = require('express-async-handler')

// @desc      Register a new user 
// @ routes   /api/users
// @access    Public
const registerUser = asyncHandler( async (req, res) => {
  
  const { name, email, password } = req.body
  
  // Validation
  if(!name || !email || !password ) {
  res.status(400)
  throw new Error('Please include all required fields')
  }
  res.send('register route')
})

// @desc      Login a new user 
// @ routes   /api/users/login
// @access    Public
const loginUser = asyncHandler(async (req, res) => {
  res.send('login route')
})

module.exports = {
  registerUser,
  loginUser
}