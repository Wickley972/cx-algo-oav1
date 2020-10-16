module.exports = function howManyCamelCase(string){
    let char =''
    let compteur_mots = 0
    for (let i = 0; i < string.length; i++) {
        char = string.charAt(i);
        if (char == char.toUpperCase()) {
            compteur_mots++
        }
    }
    return compteur_mots
}