function hideLastSlideButtons() {
    var buttonRow = document.getElementById("buttonRow");
    if (buttonRow) {
        buttonRow.parentElement.removeChild(buttonRow);
    }
}

function showLastSlideButtons() {
    if (document.getElementById("buttonRow") === null) {

        var buttonRow = document.createElement("div");
        buttonRow.id = "buttonRow";
        buttonRow.className = "container text-center";
        document.getElementById("slideText").insertAdjacentElement("afterend", buttonRow);

        var apiLink = document.createElement("a");
        apiLink.className = "btn btn-danger";
        apiLink.textContent = "API";
        apiLink.href = "./api";
        buttonRow.appendChild(apiLink);

        var mobileLink = document.createElement("a");
        mobileLink.className = "btn btn-warning";
        mobileLink.textContent = "Mobile";
        mobileLink.href = "./mobile";
        buttonRow.appendChild(mobileLink);

        var webLink = document.createElement("a");
        webLink.className = "btn btn-success";
        webLink.textContent = "Web";
        webLink.href = "./web";
        buttonRow.appendChild(webLink);

    }
}
