const modals = document.getElementsByClassName("modal");

for(let i = 0; i < modals.length; i++) {
    let modal = modals[i];
    
    let img = document.getElementsByClassName("content-carousel")[0].getElementsByTagName("img")[i];
    let modalImg = document.getElementById("img" + i);
    let captionText = document.getElementsByClassName("caption")[i];
    
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        captionText.innerHTML = this.alt;
    }
    
    let span = document.getElementsByClassName("close")[i];
    
    span.onclick = function () {
        modal.style.display = "none";
    }
}