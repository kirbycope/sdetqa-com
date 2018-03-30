function updateSlide() {

    try { document.getElementById("sectionHeading").innerText = data[index].sectionHeading; } catch (err) { /* do nothing */ }
    try { document.getElementById("slideNumber").innerText = index; } catch (err) { /* do nothing */ }
    try { document.getElementById("slideText").innerText = data[index].text; } catch (err) { /* do nothing */ }
    try { document.getElementById("slideImage").src = data[index].imgUrl; } catch (err) { /* do nothing */ }

    updateSlideControls();

}