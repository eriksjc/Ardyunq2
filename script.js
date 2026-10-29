let createButton = document.getElementById("createButton");
let clearButton = document.getElementById("clearButton");
let profession = document.getElementById("profession");

let yesButton = document.getElementById("yesButton");
let noButton = document.getElementById("noButton");

createButton.addEventListener("click", createProfile);
clearButton.addEventListener("click", clearForm);

profession.addEventListener("change", function() {
    document.getElementById("result").textContent =
        "Вы выбрали профессию: " + profession.value;
});

yesButton.addEventListener("click", function() {
    let newWindow = window.open("", "_blank", "width=400,height=300");

    if (newWindow) {
        newWindow.document.write(`
            <html>
            <head><title>Yes</title></head>
            <body style="background:#121826;color:white;text-align:center;font-family:Arial;padding:40px">
                <h1 style="color:#38bdf8">Great!</h1>
                <p>Programming is an amazing skill!</p>
            </body>
            </html>
        `);
        newWindow.document.close();
    }
});

noButton.addEventListener("click", function() {
    let newWindow = window.open("", "_blank", "width=400,height=300");

    if (newWindow) {
        newWindow.document.write(`
            <html>
            <head><title>No</title></head>
            <body style="background:#121826;color:white;text-align:center;font-family:Arial;padding:40px">
                <h1 style="color:#f87171">No problem!</h1>
                <p>There are many other interesting things to explore!</p>
            </body>
            </html>
        `);
        newWindow.document.close();
    }
});

function createProfile() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    let interests = document.getElementsByName("interest");
    let selectedInterests = [];

    for (let i = 0; i < interests.length; i++) {
        if (interests[i].checked) {
            selectedInterests.push(interests[i].value);
        }
    }

    document.getElementById("result").innerHTML =
        "<h2>Your Profile</h2>" +
        "Name: " + name + "<br>" +
        "Age: " + age + "<br>" +
        "Profession: " + profession.value + "<br>" +
        "Interests: " +
        (selectedInterests.join(", ") || "None selected");
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    profession.selectedIndex = 0;

    let interests = document.getElementsByName("interest");

    for (let i = 0; i < interests.length; i++) {
        interests[i].checked = false;
    }

    document.getElementById("result").textContent = "";
}
