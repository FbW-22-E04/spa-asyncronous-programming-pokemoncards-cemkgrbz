const button = document.querySelector("button");
const input = document.querySelector("input");
const card = document.querySelector(".pokeCard");
const img = document.querySelector("img");
const cardName = document.querySelector(".cardName");
const hp = document.querySelector(".hp");
const attack = document.querySelector(".attack");
const defence = document.querySelector(".defence");
const spAttack = document.querySelector(".sp-attack");
const spDefence = document.querySelector(".sp-defence");
const speed = document.querySelector(".speed");
const ability1 = document.querySelector(".ability1");
const ability2 = document.querySelector(".ability2");
const error = document.querySelector(".error");

button.addEventListener("click", function (e) {
    e.preventDefault();

    (async function handleClick() {
        const inputValue = input.value.toLowerCase().trim();
    
        try {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${inputValue}`
          );
          const data = await response.json();

          if (!input.value) {
            card.style.display = "none";
            error.style.display = "block";
            error.textContent = "Please enter some Value";
            alert("No Input Found");
            throw new Error("No input found");
          }
          error.style.display ="none";
          card.style.display = "block";
          cardName.textContent = data.name.toUpperCase();
          hp.textContent = data.stats[0].base_stat;
          attack.textContent = data.stats[1].base_stat;
          defence.textContent = data.stats[2].base_stat;
          spAttack.textContent = data.stats[3].base_stat;
          spDefence.textContent = data.stats[4].base_stat;
          speed.textContent = data.stats[5].base_stat;
          img.src = data.sprites.front_default;
          ability1.textContent = data.abilities[0].ability.name;
          ability2.textContent = data.abilities[1].ability.name;

        } catch (error) {
          console.log("Error", error.message);
        }

      })();
})