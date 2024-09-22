// masala 1
function greeting(name){
    return 'hello, Mr. ' + name;
}

console.log(greeting('george'));

// masala 2
function reverse(n) {
    let output = '';
    for(let i = n; i >= 0; i--){
        output+=i;
    }
    console.log(output.split(""));
}

reverse(5);

// masala 3
function getMaxMin(arr) {
    arr.sort((a, b) => a - b);
    
    let max = arr[arr.length - 1];
    let min = arr[0];
    
    return {'max': max, 'min': min};
}

let arr = [11, 2, 3, 4, 5, 6, 7, 10, 9];

console.log(getMaxMin(arr));
