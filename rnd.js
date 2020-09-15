var StringFormat = function(stringValue, dictValue){
    for (var k in dictValue){
        if( stringValue.indexOf(k) !== -1){
            var startIndex = stringValue.indexOf("{")
            var endIndex = stringValue.indexOf("}")
            var key = stringValue.substring(startIndex+1, endIndex)
            if(key in dictValue){
                stringValue = stringValue.replace("{"+key+"}", dictValue[key])
            }
            else{
                throw "String doesn't exists in the dictionary"
            }
        }
    }
    console.log(stringValue)
}