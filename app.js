window.onload = function() {
    let toggleElems = document.getElementsByClassName("toggleElem");
    for (let i = 0; i < toggleElems.length - 1; i++) {
        toggleElems[i].classList.add("open");
        toggleElems[i].addEventListener("click", () => toggleElems[i].classList.toggle("open"));
    }
    toggleElems[toggleElems.length - 1].addEventListener("click", () => toggleElems[toggleElems.length - 1].classList.toggle("open"));
}