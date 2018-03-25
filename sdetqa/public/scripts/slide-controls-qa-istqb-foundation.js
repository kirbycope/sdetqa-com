function updateSlide() {

    try { document.getElementById("slideNumber").innerText = index; } catch (err) { /* do nothing */ }
    try { document.getElementById("sectionHeading").innerText = data[index].sectionHeading; } catch (err) { /* do nothing */ }
    try { document.getElementById("section").innerText = data[index].section; } catch (err) { /* do nothing */ }
    try { document.getElementById("slideImage").src = data[index].imgUrl; } catch (err) { /* do nothing */ }
    try {
        if (data[index].syllabusText) {
            document.getElementById("syllabusText").innerText = "Syllabus: " + data[index].syllabusText;
        }
        else {
            document.getElementById("syllabusText").innerText = "";
        }
    } catch (err) { /* do nothing */ }
    try {
        if (data[index].fostSynopsis) {
            document.getElementById("fostSynopsis").innerText = "FoST: " + data[index].fostSynopsis;
        }
        else {
            document.getElementById("fostSynopsis").innerText = "";
        }
    } catch (err) { /* do nothing */ }
    try {
        if (data[index].aostSynopsis) {
            document.getElementById("aostSynopsis").innerText = "AoST: " + data[index].aostSynopsis;
        }
        else {
            document.getElementById("aostSynopsis").innerText = "";
        }
    } catch (err) { /* do nothing */ }

    updateSlideControls();
}
