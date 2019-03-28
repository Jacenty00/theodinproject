function snakecase (string) {
    let str = string.toLowerCase();
    str = str.split(" ");
    str = str.join("_");
    return str;
    
}
console.log(snakecase('helloWorld'));