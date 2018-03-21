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

function updateSlide(callback) {

    try { document.getElementById("sectionHeading").innerText = data[index].sectionHeading; } catch (err) { /* do nothing */ }
    try { document.getElementById("slideNumber").innerText = index; } catch (err) { /* do nothing */ }
    try { document.getElementById("slideText").innerText = data[index].text; } catch (err) { /* do nothing */ }
    try { document.getElementById("slideImage").src = data[index].imgUrl; } catch (err) { /* do nothing */ }

    if (index + 1 == data.length) {
        document.getElementById("nextLink").hidden = true;
        showLastSlideButtons();
    }
    else {
        document.getElementById("nextLink").hidden = false;
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
