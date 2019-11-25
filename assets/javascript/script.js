



//input the stats into localstorage

var luke ={
    "health":120,
    "power":120,
    "defense":80,
};

var trooper={
    "health":20,
    "power":10,
    "defense":0,
};

var leia ={
    "health":100,
    "power":200,
    "defense":100,
};

var Dooku = {
    "health":100,
    "power":180,
    "defense":100,
};

// function setinitialstatus (){
localStorage.setItem("luke",JSON.stringify(luke));
localStorage.setItem("trooper",JSON.stringify(trooper));
localStorage.setItem("leia",JSON.stringify(leia));
localStorage.setItem("Dooku",JSON.stringify(Dooku));

var LukeActiveStatus= JSON.parse(localStorage.getItem("luke"));
LukeActiveStatus.health -= 10;
localStorage.setItem("luke",JSON.stringify(LukeActiveStatus,));

// };
// window.addEventListener("load",setinitialstatus);

// // mainFrame.addEventlistener("click",function(event){
// //     var playerCharacter=event.target;
// //     if(event.matches(".characterPortrait"){
//         //move the div to the layer area
//         //display status in number and healthbar
//         //button changes to "pick your opponent"

//     // }








// })

// function setupPlayerCharacter(){


// }


// var imageContainer = document.querySelector(".img-container");

// imageContainer.addEventListener("click", function(event) {
//   var element = event.target;

//   if (element.matches("img")) {
//     var state = element.getAttribute("data-state");

//     if (state === "still") {
//       element.setAttribute("data-state", "animate");
//       element.setAttribute("src", element.getAttribute("data-animate"));
//     } else if (state === "animate") {
//       element.setAttribute("data-state", "still");
//       element.setAttribute("src", element.getAttribute("data-still"));
//     }
//   }
// });