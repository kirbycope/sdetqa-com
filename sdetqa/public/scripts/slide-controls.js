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
