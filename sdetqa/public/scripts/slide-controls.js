function hideLastSlideButtons() {
    var buttonRow = document.getElementById("buttonRow");
    if (buttonRow) {
        buttonRow.parentElement.removeChild(buttonRow);
    }
}

function nextSlide() {
    if (index + 1 != data.length) {
        index += 1;
        updateSlide();
    }
}

function previousSlide() {
    if (index > 0) {
        index -= 1;
        updateSlide();
    }
}

function showLastSlideButtons() {
    if (document.location.pathname == "/sdet/framework") {
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
}

function updateSlideControls() {

    if (index + 1 == data.length) {
        document.getElementById("nextLink").hidden = true;
        showLastSlideButtons();
    }
    else {
        document.getElementById("nextLink").hidden = false;
        hideLastSlideButtons();
    }

    if (index == 0) {
        document.getElementById("previousLink").hidden = true;
    }
    else {
        document.getElementById("previousLink").hidden = false;
    }

    var newurl = window.location.origin + window.location.pathname + '?slide=' + index;
    window.history.replaceState({ path: newurl }, '', newurl);
}

window.onload = function () {
    if (index == 0) {
        document.getElementById("previousLink").hidden = true;
    }
    else if (index + 1 == data.length) {
        document.getElementById("nextLink").hidden = true;
        showLastSlideButtons();
    }
};
