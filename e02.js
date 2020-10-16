module.exports = function IsAPangrams(string){
    string=string.replace(/\s/g,'') // Delete all the whitespaces in the string
    string=string.toLowerCase() // Passes all the string to lower case to avoid to have the same letter 2 times in 2 different cases
    let array_buffer = []
    let char = ''
    
    for (let i = 0; i < string.length; i++) {
        char = string.charAt(i)
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