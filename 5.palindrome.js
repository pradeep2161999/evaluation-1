function palindrome(str){
    var reversed = str.split("").reverse().join("");
    if(reversed === str){
        return "palindrome";
    
    }
    else{

        return "notpalindrome";
}
}
    console.log(palindrome("racecar"));
    