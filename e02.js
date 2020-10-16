function IsAPangrams(str){
    str=string.replace(/\s/g,'')
    str=string.toLowerCase()
    let array_buffer = []
    let char = ''
    
    for (let i = 0; i < str.length; i++) {
        char = str.charAt(i)
        if (!array_buffer.includes(char)) {
            array_buffer.push(char)
        }
    }
    if (array_buffer.length == 26) {
        return true
    } else {
        return false
    }
}