function average (arr) {
    let sum = 0;
    for (let i = 0 ; i<arr.length ; i++){
        sum += arr[i];        
    }
    let aver = sum /arr.length;
    return Math.round(aver);

}
console.log(average([1,2,5,5]));