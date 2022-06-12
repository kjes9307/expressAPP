const defineStatus = {
    200 : "success",
    404 : "error"
}
// express status code 預設200
const responseHandler = (res,data,statusCode) => {
    if(data !== null) {
        res.status(statusCode).json({
            "statu" : defineStatus[statusCode],
            "post" : data
        })
    }else{
        res.status(404).json({
            "statu" : "id not match any result",
            "post" : []
        })
    }
}

const errorHandler = (res,msg,statusCode) => {
        res.status(statusCode).json({
            "statu" : defineStatus[statusCode],
            "msg" : msg
        })
}
const checkInput = (body) => {
    if(Object.keys(body).length === 0){  
        throw "Input Error"
    }else{
        let element = ["name","content","tags","type"];
        for(let i = 0 ; i< element.length;i++){
            let key = element[i]
            if(body[key] === "" || !body[key] === true){
                console.log(`${key} is required`)
                throw `${key} is required`
            }
        }
    }
}
module.exports = {responseHandler,errorHandler,checkInput};