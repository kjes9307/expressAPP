const defineStatus = {
    200 : "success",
    404 : "error"
}
const responseHandler = (res,data,statusCode) => {
    if(data !== null) {
        res.status(statusCode).json({
            "statu" : defineStatus[statusCode],
            "post" : data
        })
    }else{
        res.status(statusCode).json({
            "statu" : "id not match any result",
            "post" : data
        })
    }
}

const errorHandler = (res,msg,statusCode) => {
        res.status(statusCode).json({
            "statu" : defineStatus[statusCode],
            "msg" : msg
        })
}
module.exports = {responseHandler,errorHandler};