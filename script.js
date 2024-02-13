
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
    const readingTime = calculateReadingTime();
    
    const readingTimeDisplay = document.createElement('p');
    if(readingTime == 1){
        readingTimeDisplay.textContent = `⌛ | Reading Time: ${readingTime} minute`;
    }
    else {
        readingTimeDisplay.textContent = `⌛ | Reading Time: ${readingTime} minutes`;
    }
    
    readingTimeDisplay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    readingTimeDisplay.style.borderRadius = "5px";
    readingTimeDisplay.style.padding = "10px";
    readingTimeDisplay.style.margin = "10px";
    readingTimeDisplay.style.zIndex = "1000";
    
    readingTimeDisplay.style.position = "fixed";
    readingTimeDisplay.style.bottom = "0";
    readingTimeDisplay.style.left = "0";
    
    readingTimeDisplay.style.fontSize = "20px";
    readingTimeDisplay.style.color = "white";
    readingTimeDisplay.style.fontFamily = "Arial, sans-serif";
    
    document.body.appendChild(readingTimeDisplay);
}

displayReadingTime();