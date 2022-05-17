function reverse(str){
    let arr = [];
    for (let i = 0; i <str.length; i++){
        arr.unshift(str[i])
    }
    return arr.join('');
    };
    console.log(reverse("Helloworld"));