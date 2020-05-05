const imgContainer = document.getElementById("img-container");
const overlay = document.getElementById("overlay");
const overlayImage = overlay.querySelector("img");
const overlayClose = document.getElementById("close");

// FETCHING STUFF AND POPULATING DOM
fetch('https://images-api.nasa.gov/search?q=nebula')
    .then(res => res.json())
    .then(data => {
        const dataArray = data.collection.items;

        dataArray.forEach((e, val) => {

            const img = document.createElement("div");
            img.classList.add("img");

            if (val % 2 === 0) {
                img.classList.add("v2", "h4");
            } else {
                img.classList.add("v4", "h4");
            }

            e.links.forEach((e, val) => {

                img.innerHTML = `
                    <img src="${e.href}" alt="a gorgeous picture of a nebula">
                    <div class="img-overlay">
                        <button id="btn">View</button>
                    </div>
                `;

                imgContainer.appendChild(img);
            });
        });

        // EVENT LISTENERS
        function handleClick(event) {
            const imageSrc = event.currentTarget.querySelector('img').src;
            overlayImage.src = imageSrc;
            overlay.classList.add('open');
        }

        function close() {
            overlay.classList.remove("open");
        }

        const images = document.querySelectorAll(".img");

        images.forEach(image => image.addEventListener("click", handleClick));
        overlayClose.addEventListener("click", close);
    });

window.addEventListener('click', (event) => {
    event.target == overlay ? overlay.classList.remove('open') : false
});