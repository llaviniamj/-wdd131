document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Última Modificação: ${document.lastModified}`;

const temp = 8;
const wind = 12;

function calcularSensacaoTermica(t, w) {
    return 13.12 + (0.6215 * t) - (11.37 * Math.pow(w, 0.16)) + (0.3965 * t * Math.pow(w, 0.16));
}

const windChillElement = document.getElementById("windchill");

if (temp <= 10 && wind > 4.8) {
    const windChill = calcularSensacaoTermica(temp, wind);
    windChillElement.textContent = `${windChill.toFixed(1)} °C`;
} else {
    windChillElement.textContent = "N/A";
}