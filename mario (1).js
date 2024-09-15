printPyramid(7);
//prompt("How tall do you want your pyramid to be? (Please give your answer as a whole Number)")

function printPyramid(height) {

    let emptySpace = "";
    let brick = "##";
    for (let i = 0; i < height; i++){
        emptySpace = emptySpace+".";
    }
    for (let i = 0; i < height; i++){
        layer = emptySpace + brick;
        console.log(layer);
         emptySpace = emptySpace.substring(1);
        brick = brick + "#";
        
        let para = document.createElement("p");
        //create text
        let rowStr = document.createTextNode(layer);
            //add the text to the paragraph element
            para.appendChild(rowStr);
            //create a variable to reference the div element
            let element = document.getElementById("pyramid");
            //add the paragraph element to the div element      
            element.appendChild(para)

    }

}

