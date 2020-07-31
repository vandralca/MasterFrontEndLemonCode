import logo1 from "./assets/logo_1.png";

const holaMundo: string = "Hola Mundo !";

const title: HTMLElement = document.getElementById("title");
const messageToDisplay: string = `<span class="title">
${holaMundo}
</span>`;

title.innerHTML = messageToDisplay;

const imagen = document.createElement("img");

imagen.src = logo1;

document.getElementById('logoContainer').appendChild(imagen);
