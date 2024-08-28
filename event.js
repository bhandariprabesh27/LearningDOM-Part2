//EVENT LISTENER
//jaba hami le kunai element lai kunai prakar ko action garxam taba teha by-default automatically event raise hunxa. Yedi hamile kunai event listener banako xainam vane tyo event lai ignore garinxa tara yedi hamile tyo event ma listener banako xam vane tyo event lai ignore garidaina, jhan tesko listener chalxa.

//syntax:
//eg: btn.addEventListener(event,callback);
//event haru - click, dblclick, mouseover, mouseleave, etc. hunxan

var btn = document.querySelector("button");
btn.addEventListener("mouseover", function () {
  btn.textContent = "Starting... ...";
  btn.style.backgroundColor = "red";
});

btn.addEventListener("mouseleave", function () {
  btn.textContent = "Make a new Card";
  btn.style.backgroundColor = "white";
});

//Event Object
document
  .querySelector("body")
  .addEventListener("mousemove", function (details) {
    console.log(details);
  });
//console ma herda clientX ra clientY le coordinate dinxa mouse ko
