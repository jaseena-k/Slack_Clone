export const productRoute =(req,res,next)=>{
    if(!req.auth().isAuthenticated){
        return res.status(401).json(
            {
                massage:"Unautherazed-you must be logged"
            }
        )
    }
    next();
}