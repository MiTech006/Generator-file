function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateUsername() {
  const name = document.getElementById('name').value;
  const hobby = document.getElementById('hobby').value;
  const dob = document.getElementById('dob').value.split('-').join(''); // e.g., 19950812
  const color = document.getElementById('color').value;
  const animal = document.getElementById('animal').value;
  const game = document.getElementById('game').value;
  const food = document.getElementById('food').value;

  const platform = new URLSearchParams(window.location.search).get('platform');
  
  // Define random options for username patterns
  const patterns = [
      `${name}${animal}${Math.floor(Math.random() * 100)}`,
      `${hobby}${food}${dob.slice(-2)}`,
      `${color}${game}${Math.random().toString(36).substring(2, 6)}`,
      `${game}_${name}`,
      `${food}-${animal}${Math.floor(Math.random() * 100)}`,
      `${name}${Math.random().toString(36).substring(2, 5)}_${platform}`
  ];

  // Generate 6 random usernames
  const generatedUsernames = document.getElementById('generatedUsernames');
  generatedUsernames.innerHTML = ''; // Clear the list before appending new usernames

  for (let i = 0; i < 6; i++) {
      const li = document.createElement('li');
      li.textContent = getRandomElement(patterns);
      generatedUsernames.appendChild(li);
  }
}
