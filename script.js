const espiga = document.getElementById("espiga");

const linhas = 10;
const colunas = 5;

for (let y = 0; y < linhas; y++) {
    for (let x = 0; x < colunas; x++) {
        const grao = document.createElement("div");
        grao.classList.add("grao");

        grao.style.left = `${x * 20 + (y % 2 ? 10 : 0)}px`;
        grao.style.top = `${y * 20}px`;

        espiga.appendChild(grao);
    }
}