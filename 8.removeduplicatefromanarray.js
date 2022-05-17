   var arr = [1,2,9,4,5,8,3,5,1,4,5];
 
    function removeDuplicates(arr) {
        return [...new Set(arr)];
    }
 
    console.log(removeDuplicates(arr));