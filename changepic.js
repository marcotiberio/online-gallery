// START
function changePicStart() {
    document.getElementById('section').style.backgroundImage="url(assets/backgrounds/background_disk.jpg)";
    document.getElementById('section').style.transition = "ease-in 0.2s";
    document.getElementById('sticker-start').style.display = "none";
    document.getElementById('infoModal').style.display = "none";
    document.getElementById('contactModal').style.display = "none";

    document.getElementById('picname').style.display = "block";
    document.getElementById('picname').style.transition = "ease-in 0.2s";
    document.getElementById('picname').style.top = "44%";
    document.getElementById('picname').style.left = "67%";
    document.getElementById('#picname-info').style.top = "44%";
    document.getElementById('#picname-info').style.left = "67%";
  }

// 002 - TORSO
function changePic0() {
  document.getElementById('section').style.backgroundImage="url(assets/backgrounds/background_stretch.jpg)";
  document.getElementById('section').style.transition = "ease-in 0.2s";
  document.getElementById('thumbnailsModal').style.display = "none";
  document.getElementById('thumbnailsModal').style.transition = "ease-out 0.5s";

  document.getElementById('picname').style.transition = "ease-in 0.2s";
  document.getElementById('picname').style.top = "30%";
  document.getElementById('picname').style.left = "30%";

  document.getElementById('#picname-info').style.display = "none";
  document.getElementById('#picname-info').style.top = "44%";
  document.getElementById('#picname-info').style.left = "67%";


}