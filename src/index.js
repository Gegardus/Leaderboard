import './style.css';
import renderData from './module/get.js';
import recieveData from './module/post.js';

// Implement the "Refresh" button (receiving data from the API and parsing the JSON)

const refreshBtn = document.querySelector('.refresh-btn');

refreshBtn.addEventListener('click', () => {
  const list = document.querySelector('.score-list');

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  
  const msg = document.querySelector('.msg');
  msg.innerHTML = '';
  renderData();
});

renderData();
recieveData();
