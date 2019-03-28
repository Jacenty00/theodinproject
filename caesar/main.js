function caesar (string, key) {
    let newString = '';
    for (i = 0; i < string.length; i++){
        let a = string.charCodeAt(i);
        console.log(a);
        if ((a >= 97 && a <= 122) || (a >= 65 && a <= 90)){
            if (a >= 97 && a <= 122) {
                a = (a - 97 + key) % 26 + 97;
            }
            else 
                a = (a - 65 + key) % 26 + 65;
                //console.log(a);
            
        }
        let newLetter = String.fromCharCode(a);
        newString += newLetter;

    }
    return newString;
}
let xd = caesar('Mjqqt, Btwqi!', -5);
console.log(xd);