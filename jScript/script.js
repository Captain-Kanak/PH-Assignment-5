document.querySelectorAll(".complete-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    alert("Board Updated Successfully");

    btn.disabled = true;
    btn.style.backgroundColor = "#d3d3d3";
    btn.style.color = "#888";

    // Get values and convert them to numbers
    const remainingTaskElement = document.getElementById("remaining-task");
    const completedTaskElement = document.getElementById("completed-task");

    let remainingTask = parseInt(remainingTaskElement.innerText);
    let completedTask = parseInt(completedTaskElement.innerText);

    // Update values if tasks are remaining
    if (remainingTask > 0) {
      remainingTask -= 1;
      completedTask += 1;

      // Update with new values
      remainingTaskElement.innerText = remainingTask;
      completedTaskElement.innerText = completedTask;
    }
    if (remainingTask === 0) {
      alert("All");
    }
  });
});
