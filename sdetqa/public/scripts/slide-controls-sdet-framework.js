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

function updateSlide() {
    
    try { document.getElementById("sectionHeading").innerText = data[index].sectionHeading; } catch (err) { /* do nothing */ }
    try { document.getElementById("slideNumber").innerText = index; } catch (err) { /* do nothing */ }
    try { document.getElementById("slideText").innerText = data[index].text; } catch (err) { /* do nothing */ }
    try { document.getElementById("slideImage").src = data[index].imgUrl; } catch (err) { /* do nothing */ }

    updateSlideControls();

}
