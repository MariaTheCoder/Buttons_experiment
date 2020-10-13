const buttonOne = document.getElementById("btn-1");
const buttonTwo = document.getElementById("btn-2");

buttonOne.addEventListener("click", function () {
  let displayFirstEvent = document.getElementById("display_first_event");
  let firstEvent = document.createElement("div");
  displayFirstEvent.innerHTML = "";

  displayFirstEvent.style.color = generateRandomColor();
  firstEvent.innerHTML = "Hello World!";
  displayFirstEvent.appendChild(firstEvent);
});
