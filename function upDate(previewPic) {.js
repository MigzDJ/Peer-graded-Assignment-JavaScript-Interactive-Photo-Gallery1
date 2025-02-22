function upDate(previewPic) {
    console.log("Hover event triggered!");
    console.log("Image Source: " + previewPic.src);
    console.log("Image Alt: " + previewPic.alt);

    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
}

function undo() {
    console.log("Mouse out event triggered!");

    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
