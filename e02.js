module.exports = function IsAPangrams(str){
    str=string.replace(/\s/g,'') // Delete all the whitespaces in the string
    str=string.toLowerCase() // Passes all the string to lower case to avoid to have the same letter 2 times in 2 different cases
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