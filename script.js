let colorName = [];
function changeColor(){
    let randomcolornumber = Math.floor(Math.random() * 999999);
    let colorcode = "#"+randomcolornumber;
    document.getElementById("colorAnnonce").innerHTML ="This color is :"+colorcode;
    document.body.style.backgroundColor = colorcode;
    let fontColor = Math.floor(Math.random() * 999999);
    let fontColorcode = "#"+randomcolornumber;
    colorName.push(fontColorcode);
    console.log(colorName);
}