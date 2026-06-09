function login() {

window.location.href = "https://eu-north-1n71axhhwa.auth.eu-north-1.amazoncognito.com/login/continue?client_id=13httd93q3k44u9pi07kimebut&redirect_uri=http%3A%2F%2Flocalhost&response_type=code&scope=email+openid+phone";

}function addTask() {

    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value;

    if (taskValue === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        ${taskValue}
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}

function deleteTask(button) {
    button.parentElement.remove();
}