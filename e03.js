function masos(str) {
    const sosCount = str.length /3
    const message = 'SOS'.repeat(sosCount)
    let compteur = 0
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== message[i]) {
            compteur++
        }        
    }
    return compteur
}