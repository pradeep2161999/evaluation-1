// foreach
/*Foreach()
    for each element can execute a function for everytime in an array.Each iteration step can be received 3 arguments value,index and object.It is similar to the for loop */
let animals =['Tiger',
            'lion',
            'leopard',
            'zebra',
            'giraffee']
let print = function(item,index,object){
    console.log(item,index,object);
}
animals.forEach( print );



//map
/*map()
    It can be give a return value it is a copy of original value with modified arrays and also the original array is unchanged
    */
let numbers = [0,1,3,5,6,257,9988];
let result = numbers.map(value => value = value + 1);
console.log(result);

