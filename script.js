//Creating and Deleting Elements
//createElement()
//appendChild()
//removeChild()

var creationOFh1 = document.createElement("h1");
creationOFh1.textContent = "Hello Sir, it's Prabesh speaking!!!";
creationOFh1.classList.add("makeitred");

document.querySelector("body").appendChild(creationOFh1);

//Image Example
var creationOFimg = document.createElement("img");
creationOFimg.src =
  "https://plus.unsplash.com/premium_photo-1680553492268-516537c44d91?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
document.querySelector("body").appendChild(creationOFimg);
// document.querySelector("body").removeChild(creationOFimg);  //This will remove image
