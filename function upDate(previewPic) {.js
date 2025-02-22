function upDate(previewPic) {
    // Log to check if the event is triggering
    console.log("Hover event triggered!");
    console.log("Image source:", previewPic.src);
    console.log("Alt text:", previewPic.alt);
    
    // Select the element with id 'image'
    let displayDiv = document.getElementById("image");
    
    // Change background image to the hovered image
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    
    // Change text to the alt attribute of the hovered image
    displayDiv.innerHTML = previewPic.alt;
}

function undo() {
    // Log to check if the event is triggering
    console.log("Mouseout event triggered!");
    
    // Select the element with id 'image'
    let displayDiv = document.getElementById("image");
    
    // Revert background image
    displayDiv.style.backgroundImage = "url('')";
    
    // Revert text to the original message
    displayDiv.innerHTML = "Hover over an image below to display here.";
}
