const buttonOne = document.getElementById("btn-1");
const buttonTwo = document.getElementById("btn-2");
const buttonThree = document.getElementById("btn-3");

buttonOne.addEventListener("click", function () {
  let displayFirstEvent = document.getElementById("display_first_event");
  let firstEvent = document.createElement("div");
  
  resetDiv();

  displayFirstEvent.style.color = generateRandomColor();
  firstEvent.innerHTML = "Hello World!";
  displayFirstEvent.appendChild(firstEvent);
});

buttonTwo.addEventListener("click", function() {
  let displaySecondEvent = document.getElementById("display_second_event");
  // let secondEvent = document.createElement("div");
  
  resetDiv();

  toggleImg("img");

  quack();
  
  displaySecondEvent.appendChild(secondEvent);
});

buttonThree.addEventListener("click", function() {
  buttonThree.innerText = "WAIT FOR IT";
  buttonThree.disabled = true;
  somethingsHappening(function(){
    buttonThree.innerText = "Whew, that took forever!"
    buttonThree.disabled = false;
  });
})
