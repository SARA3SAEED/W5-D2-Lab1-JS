// AddEventListener:

let paragraph = document.getElementById('pra');


    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    let btn3 = document.getElementById('btn3');
    let btn4 = document.getElementById('btn4');
    let btn5 = document.getElementById('btn5');

    btn1.addEventListener('click', function(){
        paragraph.innerText = "SARA SAEED"
    });


    btn2.addEventListener('click', function(){
        paragraph.style.fontWeight = "bold";
    });

    btn3.addEventListener('click', function(){
        paragraph.style.color = "blue";
    });

    btn4.addEventListener('click', function(){
        paragraph.style.fontSize = "14px";
    });


    btn5.addEventListener('click', function(){
        paragraph.style.backgroundColor = "yellow";
    });


/*----------------------------------------------------------------*/
// On Click Event:


// let paragraph = document.getElementById('pra');


// function myFunction(){
//     paragraph.innerText = "SARA SAEED";
// }

// function myFunction(){
// console.log("hello");
//     paragraph.style.fontWeight = "bold";
// }


// function myFunction(){
//         paragraph.style.color = "red";
//     }

    


//     function myFunction(){
//         paragraph.style.fontSize = "14px";
//     }


//     function myFunction(){
//         paragraph.style.backgroundColor = "yellow";
//     }


