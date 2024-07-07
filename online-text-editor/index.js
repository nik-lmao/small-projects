window.onload = function() {
    const font = localStorage.getItem("font");
    const size = localStorage.getItem("size");
    const color = localStorage.getItem("color");

    if(font && size && color) {
        const text = document.querySelector("#text");

        text.style.fontFamily = font;
        text.style.fontSize = size + "px";
        text.style.color = color;
    }
    else {
        localStorage.setItem("font", "Arial");
        localStorage.setItem("size", 16);
        localStorage.setItem("color", "white");

        const text = document.querySelector("#text");

        text.style.fontFamily = localStorage.getItem("font");
        text.style.fontSize = localStorage.getItem("size") + "px";
        text.style.color = localStorage.getItem("color");
    }
    
}

document.getElementById("download").onclick = function() {
    const text = document.getElementById("text").value;

    if(text == "") {
        alert("You probably don't want to download an empty file, do you? ;)")
        return
    }
    
    // Stackoverflow helped me with this one
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'myfile.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.getElementById("save").onclick = function() {
    // Setting variables
    const font = document.getElementById("font-name").value;
    const size = document.getElementById("font-size").value;
    const color = document.getElementById("font-color").value;

    if(font == "" || size == "" || color == "") {
        alert("Please fill in all the fields.");
        return;
    }

    localStorage.setItem("font", font);
    localStorage.setItem("size", size);
    localStorage.setItem("color", color);

    // Applying settings
    
    const text = document.querySelector("#text");

    text.style.fontFamily = font;
    text.style.fontSize = size + "px";
    text.style.color = color;

    // Closing settings
    document.getElementById("settings").style.display = "none";
}

document.getElementById("upload").onclick = function() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt';
    input.onchange = function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            const contents = e.target.result;
            document.getElementById("text").value = contents;
        };
        reader.readAsText(file);
    };
    input.click();
}

document.getElementById("settings-button").onclick = function() {
    document.getElementById("font-name").value = localStorage.getItem("font");
    document.getElementById("font-size").value = localStorage.getItem("size");
    document.getElementById("font-color").value = localStorage.getItem("color");
    document.getElementById("settings").style.display = "block";
}