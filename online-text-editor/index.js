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
    // Add size, color, etc. later

    
    // Applying settings
    
    const text = document.querySelector("#text");
    text.style.fontFamily = font;
}
