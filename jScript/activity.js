document
  .getElementById("complete-btn-all")
  .addEventListener("click", function (event) {
    // Check if the clicked element is a button and get the button's id
    if (event.target && event.target.tagName === "BUTTON") {
      const buttonId = event.target.id;
      let taskName = "";

      // Map each button id to its corresponding task title
      if (buttonId === "complete-btn-1") {
        taskName = document.getElementById("tittle-1").innerText;
      } else if (buttonId === "complete-btn-2") {
        taskName = document.getElementById("tittle-2").innerText;
      } else if (buttonId === "complete-btn-3") {
        taskName = document.getElementById("tittle-3").innerText;
      } else if (buttonId === "complete-btn-4") {
        taskName = document.getElementById("tittle-4").innerText;
      } else if (buttonId === "complete-btn-5") {
        taskName = document.getElementById("tittle-5").innerText;
      } else if (buttonId === "complete-btn-6") {
        taskName = document.getElementById("tittle-6").innerText;
      }

      // Add task to the log
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleTimeString();

      const newParagraph = document.createElement("p");
      newParagraph.innerText =
        "You have completed the task " + taskName + " at " + formattedDate;

      newParagraph.style.backgroundColor = "#F4F7FF";
      newParagraph.style.padding = "12px";
      newParagraph.style.borderRadius = "16px";

      const parentElement = document.getElementById("activity-log");
      parentElement.appendChild(newParagraph);
    }
  });

//
document
  .getElementById("clear-history-btn")
  .addEventListener("click", function () {
    document.getElementById("activity-log").innerHTML = "";
  });
