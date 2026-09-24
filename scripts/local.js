// Atualiza automaticamente o ano atual e a data da última modificação no rodapé
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Valores estáticos definidos para temperatura e velocidade do vento (°C e km/h)
// Obs: Temperatura de 8 °C e vento de 12 km/h para ativarem a regra do cálculo (<= 10°C e > 4.8 km/h)
const temp = 8;
const wind = 12;

// Função requerida com exatamente uma linha de retorno para a fórmula de sensação térmica (métrico: °C e km/h)
function calcularSensacaoTermica(t, w) {
    return 13.12 + (0.6215 * t) - (11.37 * Math.pow(w, 0.16)) + (0.3965 * t * Math.pow(w, 0.16));
}

// Elemento do DOM onde a sensação térmica será renderizada
const windChillElement = document.getElementById("windchill");

// Verificação das condições limítrofes do sistema Métrico (Temp <= 10 °C e Vento > 4.8 km/h)
if (temp <= 10 && wind > 4.8) {
    const windChill = calcularSensacaoTermica(temp, wind);
    windChillElement.textContent = `${windChill.toFixed(1)} °C`;
} else {
    windChillElement.textContent = "N/A";
}