function howManyCamelCase(str){
    let char =''
    let compteur_mots = 0
    for (let i = 0; i < str.length; i++) {
        char = str.charAt(i);
        if (char == char.toUpperCase()) {
            compteur_mots++
        }
    }
    return compteur_mots
}