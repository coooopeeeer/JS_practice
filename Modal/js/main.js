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
    // Make the modal center
    center(modal);
}

// Function to hide modal
function hide() {
    // Remove background
    bg.remove();
    // Remove modal
    modal.style.display = "none";
}

// Function to make the modal center
function center(element) {
    // Get height as px with padding
    let height = element.clientHeight;
    // Get width as px with padding
    let width = element.clientWidth;
    // Add styles for center
    element.style.top = "50%";
    element.style.left = "50%";
    element.style.marginTop = "-" + (height / 2) + "px";
    element.style.marginLeft = "-" + (width / 2) + "px";
}

open.addEventListener("click", show);
close.addEventListener("click", hide);