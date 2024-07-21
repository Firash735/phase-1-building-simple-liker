// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', () => {
  const hearts = document.querySelectorAll('.like-glyph');

  // Function to handle click on heart
  function handleHeartClick(event) {
    const heart = event.target;

    mimicServerCall()
      .then(() => {
        if (heart.innerText === EMPTY_HEART) {
          heart.innerText = FULL_HEART;
          heart.classList.add('activated-heart');
        } else {
          heart.innerText = EMPTY_HEART;
          heart.classList.remove('activated-heart');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        // Simulating error handling
        const modal = document.querySelector('#modal');
        modal.classList.remove('hidden');
        setTimeout(() => {
          modal.classList.add('hidden');
        }, 3000);
      });
  }

  // Add click event listeners to all hearts
  hearts.forEach((heart) => {
    heart.addEventListener('click', handleHeartClick);
  });
});

// Mock server call function
function mimicServerCall(url = 'http://mimicServer.example.com', config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject('Random server error. Try again.');
      } else {
        resolve('Pretend remote server notified of action!');
      }
    }, 300);
  });
}
