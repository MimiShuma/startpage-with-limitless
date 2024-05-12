let photoUrl = `https://picsum.photos/v2/list?page=2&limit=56`;
fetch(photoUrl)
    .then(response => response.json())
    .then(data => {
        let photoBlock = "";
        for (const photo of data) {
            photoBlock += `<a href=${photo.url} target="_blank"><img src= ${photo.download_url} width ="50px" height="50px"></a>`;
        }
        const galleryDiv = document.querySelector("#fetchGallery");
        galleryDiv.innerHTML = photoBlock;
    })

    .catch(error => console.error('Error:', error));