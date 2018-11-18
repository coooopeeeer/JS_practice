let open = document.getElementById("open"); // open button
let modal = document.getElementById("modalWindow"); // modal content
let close = document.getElementById("close"); // close button
let bg; // A variable for overlay

// Function to show modal
function show() {
    // Add background overlay when a modal is appeared
    bg = document.createElement("div");
    bg.setAttribute("id", "overLay");
    document.body.append(bg);
    // Add style for modal
    modal.style.display = "block";
    // Remove background overlay when a background is clicked
    bg.addEventListener("click", hide);
}

// Function to hide modal
function hide() {
    // Remove background
    bg.remove();
    // Remove modal
    modal.style.display = "none";
}

open.addEventListener("click", show);
close.addEventListener("click", hide);