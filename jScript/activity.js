document
  .getElementById("complete-btn-1")
  .addEventListener("click", function () {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleTimeString();

    const newParagraph = document.createElement("p");
    newParagraph.innerText =
      "You have completed the task Fix Mobile Button Issue at " + formattedDate;

    newParagraph.style.backgroundColor = "#F4F7FF";
    newParagraph.style.padding = "12px";
    newParagraph.style.borderRadius = "16px";

    const parentElement = document.getElementById("activity-log");

    parentElement.appendChild(newParagraph);
  });

document
  .getElementById("complete-btn-2")
  .addEventListener("click", function () {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleTimeString();

    const newParagraph = document.createElement("p");
    newParagraph.innerText =
      "You have completed the task Add Dark Mode at " + formattedDate;

    newParagraph.style.backgroundColor = "#F4F7FF";
    newParagraph.style.padding = "12px";
    newParagraph.style.borderRadius = "16px";

    const parentElement = document.getElementById("activity-log");

    parentElement.appendChild(newParagraph);
  });

document
  .getElementById("complete-btn-3")
  .addEventListener("click", function () {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleTimeString();

    const newParagraph = document.createElement("p");
    newParagraph.innerText =
      "You have completed the task Optimize Home page at " + formattedDate;

    newParagraph.style.backgroundColor = "#F4F7FF";
    newParagraph.style.padding = "12px";
    newParagraph.style.borderRadius = "16px";

    const parentElement = document.getElementById("activity-log");

    parentElement.appendChild(newParagraph);
  });

document
  .getElementById("complete-btn-4")
  .addEventListener("click", function () {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleTimeString();

    const newParagraph = document.createElement("p");
    newParagraph.innerText =
      "You have completed the task Add new emoji 🤲 at " + formattedDate;

    newParagraph.style.backgroundColor = "#F4F7FF";
    newParagraph.style.padding = "12px";
    newParagraph.style.borderRadius = "16px";

    const parentElement = document.getElementById("activity-log");

    parentElement.appendChild(newParagraph);
  });

document
  .getElementById("complete-btn-5")
  .addEventListener("click", function () {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleTimeString();

    const newParagraph = document.createElement("p");
    newParagraph.innerText =
      "You have completed the task Integrate OpenAI API at " + formattedDate;

    newParagraph.style.backgroundColor = "#F4F7FF";
    newParagraph.style.padding = "12px";
    newParagraph.style.borderRadius = "16px";

    const parentElement = document.getElementById("activity-log");

    parentElement.appendChild(newParagraph);
  });

document
  .getElementById("complete-btn-6")
  .addEventListener("click", function () {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleTimeString();

    const newParagraph = document.createElement("p");
    newParagraph.innerText =
      "You have completed the task Improve Job searching at " + formattedDate;

    newParagraph.style.backgroundColor = "#F4F7FF";
    newParagraph.style.padding = "12px";
    newParagraph.style.borderRadius = "16px";

    const parentElement = document.getElementById("activity-log");

    parentElement.appendChild(newParagraph);
  });
