const date = new Date();
const date_options = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  month: "short",
  day: "2-digit",
  year: "numeric",
});
const finalDate = date_options.format(date).replace(",", "");
//console.log(formattedDate);

document.getElementById("date").innerText = finalDate;

document.querySelectorAll(".card-complete").forEach((button) => {
  button.addEventListener("click", function (event) {
    alert("Board Updated Successfully!");

    this.disabled = true;

    let totalTaskNumber =
      document.getElementById("total-task-number").innerText;
    totalTaskNumber = parseInt(totalTaskNumber) - 1;
    document.getElementById("total-task-number").innerText = totalTaskNumber;

    //challenge part
    if (totalTaskNumber === 0) {
      alert("Congrates!!! You have completed all the current task");
    }

    let performedTaskNumber =
      document.getElementById("performed-task").innerText;
    performedTaskNumber = parseInt(performedTaskNumber) + 1;
    document.getElementById("performed-task").innerText = performedTaskNumber;

    let time = new Date();

    let currentTime = time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });
    // console.log(
    //   time.toLocaleString("en-US", {
    //     hour: "numeric",
    //     minute: "numeric",
    //     second: "numeric",
    //     hour12: true,
    //   })
    // );
    let cardTitle = event.target
      .closest(".card")
      .querySelector(".card-title").innerText;
    console.log(cardTitle);
    let activityText =
      "You have completed the task " + cardTitle + " at " + currentTime;
    //document.createElement("p");

    let activityElement = document.createElement("p");
    activityElement.classList.add(
      "body-bg",
      "rounded-xl",
      "p-2",
      "text-sm",
      "mb-2"
    );
    activityElement.innerText = activityText;
    document.getElementById("user-activity-list").appendChild(activityElement);
    // console.log(event.target.closest(".card").querySelector(".card-title"));
  });
});

document.getElementById("clear-history").addEventListener("click", function () {
  document.getElementById("user-activity-list").innerHTML = "";
});

document
  .getElementById("rainbow-button")
  .addEventListener("click", function () {
    document.getElementById("body").style.backgroundColor = getBodyColor();
  });

function getBodyColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
