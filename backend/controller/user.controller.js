import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    try {
        const { fullname, number, email, password } = req.body;

        // Validate the required fields
        if (!fullname || !number || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if the user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User Already Exists" });
        }

        // Hash the password
        const hashedPassword = await bcryptjs.hash(password, 10);

        // Create a new user
        const createUser = new User({
            fullname,
            number,
            email,
            password: hashedPassword
        });

        // Save the user to the database
        await createUser.save();

        res.status(201).json({ message: "User Created Successfully" , user:{
            _id:createUser._id,
            fullname:createUser.fullname,
            email:createUser.email
        } });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
export const login=async(req,res)=>{
    try {
        const{email,password}=req.body
        const user=await User.findOne({email})
        const isMatch=await bcryptjs.compare(password,user.password)
        if (!user || !isMatch) {
            res.status(400).json({message:"Invalid Creditnial"})
    
            
        }else{
            res.status(200).json({message:"Login Succesful",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            }})
    
        }
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
