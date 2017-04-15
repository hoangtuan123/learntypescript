let displayColors = function(...colors:string[]){
    console.log(colors);
    for(let i in colors){
        console.log(colors[i]);
    }
}
displayColors("Red");
displayColors("Red","Green","Blue");
displayColors("Red","Green");