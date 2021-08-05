import jwt from 'jsonwebtoken'


const generateToken=(userid)=>
{
   return jwt.sign({userid},'NAnoblack2038',{expiresIn:'1d'})
}


export default generateToken;