const cardList = document.querySelector('[data-js="card-container"]');

export function CharacterCard(url, name, status, type, episode) {
  const newCard = document.createElement("li");
  newCard.classList.add("card");
  newCard.innerHTML = `
  <div class="card__image-container">
    <img
      class="card__image"
      src="${url}"
      alt="Rick Sanchez"
    />
    <div class="card__image-gradient"></div>
  </div>
  <div class="card__content">
    <h2 class="card__title">${name}</h2>
    <dl class="card__info">
      <dt class="card__info-title">Status</dt>
      <dd class="card__info-description">${status}</dd>
      <dt class="card__info-title">Type</dt>
      <dd class="card__info-description">${type}</dd>
      <dt class="card__info-title">Occurrences</dt>
      <dd class="card__info-description">${episode.length}</dd>
    </dl>
  </div>
`;
  cardList.append(newCard);
}

// const url =
//   "https://upload.wikimedia.org/wikipedia/commons/d/d8/Person_icon_BLACK-01.svg";
// const episode = ["keks", "krümel", "kuchen"];
// CharacterCard(url, "John", "alive", "male", episode);
