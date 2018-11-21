let max_size = 20 * 1024 * 1024; // 20MB
let drop_area = document.getElementById("dropArea");
let file_list = document.getElementById("fileList");

// Function while the file covers the area
function overEvent(e) {
    drop_area.style.backgroundColor = "ddd";
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
}

drop_area.addEventListener("dragover", overEvent);
