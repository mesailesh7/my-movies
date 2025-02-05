// This is a higher-order function that takes another function 'fn' as an argument
const asyncHandler = (fn) => (req, res, next) => {
  // Promise.resolve wraps the function execution in a Promise
  // This allows handling both synchronous and asynchronous functions
  Promise.resolve(fn(req, res, next))
      .catch((err) => {
        // If any error occurs during the execution of the function
        // It will be caught here and sent as a JSON response
        res.status(500).json({ message: err.message });
      });
};

export default asyncHandler;

//
// // Instead of writing this:
// app.get('/users', async (req, res) => {
//   try {
//     const users = await getUsers();
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
//
// // You can write this:
// app.get('/users', asyncHandler(async (req, res) => {
//   const users = await getUsers();
//   res.json(users);
// }));
