const User = require("../models/userModel");

exports.registerUser = async(req,res) =>{   
    let user = new User(req.body);
    let data = await user.save();
    res.send(data);
}













// exports.registerUser = async (req, res) => {
//   const { name, email, password, image } = req.body;
//   const userExists = await User.findOne({ email });
//   if (userExists) {
//     res.status(400);
//     throw new Error("User already exists !");
//   } else {
//     const user = await User.save(req.body);
//     if (user) {
//       res.status(201);
//       res.json({
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         image: user.image,
//         isAdmin: user.isAdmin,
//       });
//     } else {
//       res.status(400);
//       throw new Error("Error occured while creating user !");
//     }
//   }
// };
