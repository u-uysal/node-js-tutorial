function randomQuetos (objectQuetos,index){
    let quetosArray = [];
    let min=0; 
    let max=quetosArray.length;
    quetosArray.push(objectQuetos)
    return quetosArray[Math.floor(Math.random() * (+max - +min)) + +min];
}