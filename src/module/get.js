const getData = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/V0CCIRddQzFzK6uRfVbe/scores',
  );
  const json = await response.json();
  return json;
};

export default () => {
  const list = document.querySelector('.score-list');
  getData().then((json) => {
    const array = json.result;

    array.sort((score1, score2) => score2.score - score1.score);

    for (let i = 0; i < array.length; i += 1) {
      list.innerHTML += `<li class="score">${array[i].user} ${array[i].score}</li>`;
    }
  });
};
