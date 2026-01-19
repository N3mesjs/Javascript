const form = document.querySelector("#form");
form.addEventListener("submit", (e) => { e.preventDefault(); fetchData(); });

async function fetchData() {
    const inputValue = document.getElementById("inputArea").value;

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue.toLowerCase()}`);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            const pockemonName = data.name;
            const pockemonImage = data.sprites.front_default;
            const pockemonWeight = `Weight: ${data.weight}`;

            document.getElementById("pokemonName").innerText = pockemonName;
            document.getElementById("pokemonImage").src = pockemonImage;
            document.getElementById("pokemonWeigth").innerText = pockemonWeight;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}