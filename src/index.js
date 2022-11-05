import "./style.css";

window.addEventListener("load", () => {
  const form = document.querySelector(".add-list");
  const input = document.querySelector("#item-add");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskEnter = input.value;
    const tasks = [
      {
        description: "Take breakfast",
        completed: true,
        index: "1",
      },
      {
        description: "Take Lunch",
        completed: false,
        index: "2",
      },
      {
        description: "Take Dineer",
        completed: true,
        index: "3",
      },
    ];

    const listEl = document.querySelector(".taskContainer");

    tasks.forEach((element) => {
      const taskContent = document.createElement("div");
      taskContent.classList.add("task");
      taskContent.innerHTML = ` 
	  	<input type="checkbox">
	  	${element.description}
		  `;
      listEl.appendChild(taskContent);
    });

    //     const task = input.value;

    //     const taskEl = document.createElement("div");
    //     taskEl.classList.add("task");

    //     const taskContent = document.createElement("div");
    //     taskContent.classList.add("list-items");

    //     taskEl.appendChild(taskContent);

    //     const taskCheck = document.createElement("input");
    //     taskCheck.type = "checkbox";
    //     taskContent.appendChild(taskCheck);

    //     const taskInput = document.createElement("input");
    //     taskInput.classList.add("add-item");
    //     taskContent.type = "text";
    //     taskInput.value = task;
    //     taskInput.setAttribute("readonly", "readonly");

    //     taskContent.appendChild(taskInput);

    //     listEl.appendChild(taskContent);
  });
});

{
  /* <div class="list-items" id="tasks">
         <input type="checkbox">
        <input id="new-item" class="add-item" placeholder="Add to your list..." type="text">
</div> */
}
