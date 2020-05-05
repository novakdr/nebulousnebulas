const imgContainer = document.getElementById("img-container");
const overlay = document.getElementById("overlay");
const overlayImage = overlay.querySelector("img");
const overlayClose = document.getElementById("close");
const pictureArray = ["https://apod.nasa.gov/apod/image/2002/Eta-HST-ESO-New-LL1024.jpg", "https://apod.nasa.gov/apod/image/1910/HorseFlame_Priego_3252.jpg", "https://apod.nasa.gov/apod/image/1909/HeartNebula_Falls_960.jpg", "https://apod.nasa.gov/apod/image/2002/Eta-HST-ESO-New-LL1024.jpg", "https://apod.nasa.gov/apod/image/1910/HorseFlame_Priego_3252.jpg", "https://apod.nasa.gov/apod/image/1909/HeartNebula_Falls_960.jpg", "https://apod.nasa.gov/apod/image/2002/Eta-HST-ESO-New-LL1024.jpg", "https://apod.nasa.gov/apod/image/1910/HorseFlame_Priego_3252.jpg", "https://apod.nasa.gov/apod/image/1909/HeartNebula_Falls_960.jpg"];

// POPULATE IMAGE GALLERY WITH, WELL, IMAGES
pictureArray.forEach((e, val) => {
    const img = document.createElement("div");
    img.classList.add("img");

    if (val % 2 === 0) {
        img.classList.add("v2", "h4");
    } else {
        img.classList.add("v4", "h4");
    }

    img.innerHTML = `
        <img src="${e}" alt="a gorgeous picture of a nebula">
        <div class="img-overlay">
            <button id="btn">View</button>
        </div>
    `;

    imgContainer.appendChild(img);
});

// EVENT LISTENERS
function handleClick(e) {
    const imageSrc = e.currentTarget.querySelector('img').src;
    console.log(imageSrc);
    overlayImage.src = imageSrc;

    overlay.classList.add('open');
    overlay.classList.add('open');
}

function close() {
    overlay.classList.remove("open");
}

const images = document.querySelectorAll(".img");

images.forEach(image => image.addEventListener("click", handleClick));
overlayClose.addEventListener("click", close);

window.addEventListener('click', (e) => {
    e.target == overlay ? overlay.classList.remove('open') : false
})