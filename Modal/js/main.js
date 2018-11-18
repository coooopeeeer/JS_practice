let open = document.getElementById("open"); // open button
let modal = document.getElementById("modalWindow"); // modal content
let close = document.getElementById("close"); // close button

function show() {
    // Add background overlay when a modal is appeared
    let bg = document.createElement("div");
    bg.setAttribute("id", "overLay");
    document.body.append(bg);
    // Add style for modal
    modal.style.display = "block";
}

open.addEventListener("click", show);