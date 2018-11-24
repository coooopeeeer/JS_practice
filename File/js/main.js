let max_size = 20 * 1024 * 1024; // 20MB
let drop_area = document.getElementById("dropArea");
let file_list = document.getElementById("fileList");

// Function while the file covers the area
function overEvent(e) {
    drop_area.style.backgroundColor = "#ccc";
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
}

// Function after the file leaves the area
function leaveEvent() {
    drop_area.style.backgroundColor = "#eee";
}

// Function when the file is dropped
function dropEvent(e) {
    e.preventDefault();
}

drop_area.addEventListener("dragover", overEvent);
drop_area.addEventListener("dragleave", leaveEvent);
