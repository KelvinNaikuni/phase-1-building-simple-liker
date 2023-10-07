// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener("DOMContentLoaded", () => {
  const likeButtons = document.querySelectorAll(".like-glyph");
  const errorModal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-message");

  // Function to simulate a server call
  function mimicServerCall() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomValue = Math.random();
        if (randomValue < 0.2) {
          // Simulate a failure response (20% of the time)
          reject("Server request failed");
        } else {
          // Simulate a successful response
          resolve("Server request successful");
        }
      }, 1000); // Simulate a 1-second delay
    });
  }

  // Function to handle like button click
  function handleLikeClick(event) {
    const likeButton = event.target;
    mimicServerCall()
      .then(() => {
        // Server request was successful
        likeButton.classList.add("activated-heart");
        likeButton.textContent = "❤️";
      })
      .catch((error) => {
        // Server request failed
        errorModal.classList.remove("hidden");
        modalMessage.textContent = error;

        setTimeout(() => {
          errorModal.classList.add("hidden");
        }, 3000); // Hide the modal after 3 seconds
      });
  }

  // Add click event listeners to all like buttons
  likeButtons.forEach((button) => {
    button.addEventListener("click", handleLikeClick);
  });
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
