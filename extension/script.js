const paragraphs = document.querySelectorAll('p');

function calculateReadingTime(){

    var string = ""

    paragraphs.forEach((p) => {
        string += p.textContent + " ";
    });
    
    const words = string.split(' ');
    
    const wordCount = words.length;
    
    const readingTime = Math.ceil(wordCount / 230);

    return readingTime;
}

function displayReadingTime(){
    // Calculate reading time

    const readingTime = calculateReadingTime();

    // Create elements

    const readingTimeDisplay = document.createElement('p');

    // Check reading time length

    if(readingTime == 1){
        readingTimeDisplay.textContent = `⌛ | Reading Time: ${readingTime} minute`;
    }
    else {
        readingTimeDisplay.textContent = `⌛ | Reading Time: ${readingTime} minutes`;
    }

    // Reading Time Display
    
    readingTimeDisplay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    readingTimeDisplay.style.borderRadius = "5px";
    readingTimeDisplay.style.padding = "10px";
    readingTimeDisplay.style.margin = "10px";
    readingTimeDisplay.style.zIndex = "5000";
    
    readingTimeDisplay.style.position = "fixed";
    readingTimeDisplay.style.bottom = "0";
    readingTimeDisplay.style.left = "0";
    
    readingTimeDisplay.style.fontSize = "20px";
    readingTimeDisplay.style.color = "white";
    readingTimeDisplay.style.fontFamily = "Arial, sans-serif";
    readingTimeDisplay.style.fontWeight = "bold";
    
    // Reading Time Display Hover

    readingTimeDisplay.onmouseover = function(){
        readingTimeDisplay.style.cursor = "pointer";
    }

    // Close Reading Time Display

    readingTimeDisplay.onclick = function(){
        readingTimeDisplay.style.display = "none";
    }

    // Append to body
    
    document.body.appendChild(readingTimeDisplay);
}

// Call function

displayReadingTime();