export function errorHandler(err,req,res,next){console.error(err);const status=Number(err.status)||500;res.status(status).json({error:{message:status===500?"Internal server error":err.message}})}
