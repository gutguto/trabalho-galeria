function previewImage() {
    const imageUrl = document.getElementById("image-url").value;
    const fileInput = document.getElementById("image-upload");
    const previewContainer = document.getElementById("image-preview");

    previewContainer.innerHTML = '';

    if (imageUrl) {
        const img = document.createElement("img");
        img.src = imageUrl;
        previewContainer.appendChild(img);
    } else if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            previewContainer.appendChild(img);
        };

        reader.readAsDataURL(file);
    } else {
        previewContainer.innerHTML = 'Nenhuma imagem para exibir';
    }
}

function addImage() {
    const imageUrl = document.getElementById("image-url").value;
    const fileInput = document.getElementById("image-upload");

    if (imageUrl || (fileInput.files.length > 0)) {
        const imageGallery = document.getElementById("image-gallery");
        const imageContainer = document.createElement("div");
        imageContainer.className = "image-container";

        const img = document.createElement("img");
        if (imageUrl) {
            img.src = imageUrl;
        } else {
            img.src = URL.createObjectURL(fileInput.files[0]);
        }

        imageContainer.appendChild(img);
        imageGallery.appendChild(imageContainer);

        document.getElementById("image-url").value = "";
        fileInput.value = ""; // Limpar o campo de upload
        document.getElementById("image-preview").innerHTML = '';
    } else {
        alert("Por favor, insira uma URL de imagem ou selecione um arquivo de imagem.");
    }
}
