function palindromes (str) {
    let string = str;
    string = string.split("");
    string = string.reverse();
    string = string.join("");
    if (string === str){
        return "This is a palindrome !";
    }
    else {
        return "Not a palindrome !";
    }
}
console.log(palindromes('car'));