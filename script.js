// Array of colors for the text to cycle through
const colors = ['#00d4ff', '#ff4081', '#4caf50', '#ffeb3b', '#ff9800', '#e91e63'];
let index = 0;

const textElement = document.getElementById('dynamicText');
const button = document.getElementById('changeTextBtn');

// Change color every 2 seconds
setInterval(() => {
  index = (index + 1) % colors.length;
  textElement.style.color = colors[index];
  textElement.style.textShadow = `0 0 15px ${colors[index]}, 0 0 30px ${colors[index]}`;
}, 2000);

// Button click to change text content
button.addEventListener('click', () => {
  const messages = ['Welcome!', 'Good Vibes ✨', 'Code Magic 💻', 'Stay Creative 🎨'];
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  textElement.textContent = randomMsg;
});
