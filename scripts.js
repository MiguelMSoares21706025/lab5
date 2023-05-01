/*PLAYGROUND SCRIPT*/
function calcular() {
    const expressao = document.getElementById("expressao").value;
    const resultado = eval(expressao);
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function apagar() {
    document.getElementById("resultado").innerHTML = "";
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#frase').onkeyup = detetar_texto
})

function detetar_texto() {
    console.log(document.getElementById("resultadoTexto"));
    let texto = document.getElementById("frase").value;
    document.getElementById("resultadoTexto").innerHTML = texto;
}

function diferentLocations() {
    let name = document.getElementById("insertedName").value;
    document.getElementById("locationTitle").innerHTML = "Your Name is " + name;
    document.getElementById("hiBellow").innerHTML = "Hello " + name + "!";
    document.getElementById("byeBellow").innerHTML = "Goodbye " + name + "   😉";


}

function getDate() {
    var dataAtual = new Date();

    var dia = dataAtual.getDate()
    var mes = dataAtual.getMonth() + 1;
    var ano = dataAtual.getFullYear();

    var dataFormatada = dia + '/' + mes + '/' + ano;

    document.getElementById("currentDay").innerHTML = dataFormatada;

}

window.addEventListener('DOMContentLoaded', getDate);


/*THEME SCRIPT*/
const darkModeButton = document.querySelector('#darkModeBTN');

function loadStyle() {
    const darkModeStat = localStorage.getItem("darkModeStat");
    console.log("Darkmode: " + darkModeStat);

    if (darkModeStat == null) {
        localStorage.setItem("darkModeStat", 0);
    } else {
        if (darkModeStat == 1) {
            setDarkMode();
        } else {
            setLightMode();
        }
    }
}

function setDarkMode() {
    document.getElementById("stylesheet").href = "style-dark.css";
    document.getElementById("darkModeBTN").textContent="dark_mode";
    var vid = document.getElementById("myVideo");
    vid.src = "source/10mb preto.mp4";
}

function setLightMode() {
    document.getElementById("stylesheet").href = "style-light.css";
    document.getElementById("darkModeBTN").textContent="light_mode";
    var vid = document.getElementById("myVideo");
    vid.src = "source/10mb branco.mp4";
}

darkModeButton.addEventListener('click', function () {
    const darkModeStat = localStorage.getItem("darkModeStat");

    if (darkModeStat == true) {
        localStorage.setItem("darkModeStat", 0);
        setLightMode();
    } else {
        localStorage.setItem("darkModeStat", 1);
        setDarkMode();
    }
});