let path = "../../assets/images/";
const body = document.body;

// * Web
let webBtn = document.getElementById("webBtn");
let webLength = document.querySelectorAll(".web-content-list")
let webContent = document.getElementById("web");

// Indicator post web
document.getElementById("webPost").innerText = webLength.length;

function webShow() {
  webBtn.classList.add("active");
  designBtn.classList.remove("active");
  photoBtn.classList.remove("active");

  webContent.style.display = "grid";
  designContent.style.display = "none";
  photoContent.style.display = "none";
}



// * end web

// * Design
let designBtn = document.getElementById("designBtn");
let designImages = document.querySelectorAll(".design-content .img");
let designContent = document.getElementById("design");

document.getElementById("designPost").innerText = designImages.length;

function designShow() {
  webBtn.classList.remove("active");
  designBtn.classList.add("active");
  photoBtn.classList.remove("active");

  webContent.style.display = "none";
  designContent.style.display = "grid";
  photoContent.style.display = "none";
}

for (let i = 0; i < designImages.length; i++) {
  let reversedIndex = designImages.length - 1 - i;
  designImages[i].style.backgroundImage = `url('${path}design/design${
    reversedIndex + 1
  }.jpg')`;

  designImages[i].addEventListener("click", function () {
    designImages[i].alt = `Foto ${i}`;
    document.getElementById("modalImg").src = `${path}design/design${
      reversedIndex + 1
    }.jpg`;
    document.getElementById("modal").style.display = "flex";
  });
}

// * end design

// * Photography
let photoBtn = document.getElementById("photoBtn");
let photoImages = document.querySelectorAll(".photography-content .img");
let photoContent = document.getElementById("photo");

document.getElementById("photographyPost").innerText = photoImages.length;

// load foto
for (let i = 0; i < photoImages.length; i++) {
  let reversedIndex = photoImages.length - 1 - i;
  photoImages[i].style.backgroundImage = `url('${path}fotografii/photo${
    reversedIndex + 1
  }.jpg')`;

  photoImages[i].addEventListener("click", function () {
    photoImages[i].alt = `Foto ${i}`;
    document.getElementById("modalImg").src = `${path}fotografii/photo${
      reversedIndex + 1
    }.jpg`;
    document.getElementById("modal").style.display = "flex";
    body.classList.add("no-scroll");
  });
}

// Show foto
function photoShow() {
  webBtn.classList.remove("active");
  designBtn.classList.remove("active");
  photoBtn.classList.add("active");

  webContent.style.display = "none";
  designContent.style.display = "none";
  photoContent.style.display = "grid";
}
// * end foto

function closeModal() {
  document.getElementById("modal").style.display = "none";
  body.classList.remove("no-scroll");
}

window.addEventListener("load", function () {
  webContent.style.display = "grid";
  designContent.style.display = "none";
  photoContent.style.display = "none";
});
