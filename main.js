
console.log('antes de todo')
const modals = document.getElementsByClassName("modal");
console.log("antes del for")

for(let i = 0; i < modals.length; i++) {
    let modal = modals[i];
    
    let img = document.getElementsByClassName("content-carousel")[0].getElementsByTagName("img")[i];
    let modalImg = document.getElementById("img" + i);
    let captionText = document.getElementsByClassName("caption")[i];
    
    console.log('antes del img onclick')
    img.onclick = function () {
      modal.style.display = "block";
      /*  modalImg.src = this.src;
        console.log('ACA hHAY ALGO MALO')*/
       /* modalImg.alt = this.alt;*/
        captionText.innerHTML = this.alt;
        console.log("ACA HAY OTRA COSA MAS MALA XD")
    }
    
    let span = document.getElementsByClassName("close")[i];
    
    span.onclick = function () {
        modal.style.display = "none";
    }
}
console.log("despues del for")