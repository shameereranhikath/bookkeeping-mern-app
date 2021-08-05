import bcrypt from 'bcrypt'


//function for hashing the password
export const hashPassword=async (enteredpassword)=>{
    const salt=await bcrypt.genSalt(10);
    const password=await bcrypt.hash(enteredpassword,salt)
    return password
}

//function for Decrypting the password
export const isPasswordMatch=async (enteredPassword,dbPassword)=>{
    return await bcrypt.compare(enteredPassword,dbPassword)
}



