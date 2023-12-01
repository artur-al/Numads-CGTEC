const ButtonDia = document.getElementById("open-dia");
const modal = document.querySelector("dialog");
const userInput = document.getElementById("user-input");
const imageContainer = document.getElementById("image-container");
const Close = document.getElementById("btn-close");

alert("Esta é uma pagina de projeto estudantil a NUMADS é fictícia");

// Mexer com o dialog
ButtonDia.onclick = function () {
    modal.showModal();
};
Close.onclick = function(){
    modal.close();
};

function valor() {
    const resposta = userInput.value;
    userInput.value = "";

    if (resposta === "1") {
        // Criar um elemento de imagem e definir o src
        const img = document.createElement("img");
        img.src = "pix.jpg";
        // Adicionar a imagem ao container na página
        imageContainer.innerHTML = "";
        imageContainer.appendChild(img);
    }
    if (resposta === "2") {
        // Criar um elemento de imagem e definir o src
        const img = document.createElement("img");
        img.src = "pix2.jpg";
        // Adicionar a imagem ao container na página
        imageContainer.innerHTML = "";
        imageContainer.appendChild(img);
    }
    if (resposta === "3") {
        // Criar um elemento de imagem e definir o src
        const img = document.createElement("img");
        img.src = "pix3.jpg";
        // Adicionar a imagem ao container na página
        imageContainer.innerHTML = "";
        imageContainer.appendChild(img);
    }
    if (resposta === "4") {
        // Criar um elemento de imagem e definir o src
        const img = document.createElement("img");
        img.src = "pix4.jpg";
        // Adicionar a imagem ao container na página
        imageContainer.innerHTML = "";
        imageContainer.appendChild(img);
    }
}