


function output(code,msg,data){
    if(!data){
        data=null;
    }
    return {code,msg,data};
}


module.exports={output};