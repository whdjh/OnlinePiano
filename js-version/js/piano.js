const context = new (window.AudioContext || window.webkitAudioContext)();

function playSound(note) {
  const oscillator = context.createOscillator();
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(getFrequency(note), context.currentTime);
  oscillator.connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.5);
}

function getFrequency(note) {
  const A4Frequency = 440;
  const noteFrequencies = {
    'C1': A4Frequency * Math.pow(2, - 21 / 12),
    'D1b': A4Frequency * Math.pow(2, - 20 / 12),
    'D1': A4Frequency * Math.pow(2, - 19 / 12),
    'E1b': A4Frequency * Math.pow(2, - 18 / 12),
    'E1': A4Frequency * Math.pow(2, - 17 / 12),
    'F1': A4Frequency * Math.pow(2, - 16 / 12),
    'G1b': A4Frequency * Math.pow(2, - 15 / 12),
    'G1': A4Frequency * Math.pow(2, - 14 / 12),
    'A1b': A4Frequency * Math.pow(2, -13 / 12),
    'A1': A4Frequency * Math.pow(2, - 12 / 12),
    'B1b': A4Frequency * Math.pow(2, - 11 / 12),
    'B1': A4Frequency * Math.pow(2, - 10 / 12),
    'C': A4Frequency * Math.pow(2, - 9 / 12),
    'Db': A4Frequency * Math.pow(2, - 8 / 12),
    'D': A4Frequency * Math.pow(2, - 7 / 12),
    'Eb': A4Frequency * Math.pow(2, - 6 / 12),
    'E': A4Frequency * Math.pow(2, - 5 / 12),
    'F': A4Frequency * Math.pow(2, - 4 / 12),
    'Gb': A4Frequency * Math.pow(2, - 3 / 12),
    'G': A4Frequency * Math.pow(2, - 2 / 12),
    'Ab': A4Frequency * Math.pow(2, - 1 / 12),
    'A': A4Frequency,
    'Bb': A4Frequency * Math.pow(2, 1 / 12),
    'B': A4Frequency * Math.pow(2, 2 / 12),
    'C2': A4Frequency * Math.pow(2, 3 / 12),
    'D2b': A4Frequency * Math.pow(2, 4 / 12),
    'D2': A4Frequency * Math.pow(2, 5 / 12),
    'E2b': A4Frequency * Math.pow(2, 6 / 12),
    'E2': A4Frequency * Math.pow(2, 7 / 12),
    'F2': A4Frequency * Math.pow(2, 8 / 12),
    'G2b': A4Frequency * Math.pow(2, 9 / 12),
    'G2': A4Frequency * Math.pow(2, 10 / 12),
    'A2b': A4Frequency * Math.pow(2, 11 / 12),
    'A2': A4Frequency * Math.pow(2, 12 / 12),
    'B2b': A4Frequency * Math.pow(2, 13 / 12),
    'B2': A4Frequency * Math.pow(2, 14 / 12),
    'C3': A4Frequency * Math.pow(2, 15 / 12),
    'D3b': A4Frequency * Math.pow(2, 16 / 12),
    'D3': A4Frequency * Math.pow(2, 17 / 12),
    'E3b': A4Frequency * Math.pow(2, 18 / 12),
    'E3': A4Frequency * Math.pow(2, 19 / 12),
    'F3': A4Frequency * Math.pow(2, 20 / 12),
    'G3b': A4Frequency * Math.pow(2, 21 / 12),
    'G3': A4Frequency * Math.pow(2, 22 / 12),
    'A3b': A4Frequency * Math.pow(2, 23 / 12),
    'A3': A4Frequency * Math.pow(2, 24 / 12),
    'B3b': A4Frequency * Math.pow(2, 25 / 12),
    'B3': A4Frequency * Math.pow(2, 26 / 12)
  };
  return noteFrequencies[note];
}

document.addEventListener('keydown', (event) => {
  const keyToNote = {
    'q' : 'C1',
    '2': 'D1b',
    'w': 'D1',
    '3': 'E1b',
    'e': 'E1',
    'r': 'F1',
    '5': 'G1b',
    't': 'G1',
    '6': 'A1b',
    'y': 'A1',
    '7': 'B1b',
    'u': 'B1',
    'z': 'C',
    's': 'Db',
    'x': 'D',
    'd': 'Eb',
    'c': 'E',
    'v': 'F',
    'g': 'Gb',
    'b': 'G',
    'h': 'Ab',
    'n': 'A',
    "j": 'Bb',
    'm': 'B',
    'Q': 'C2',
    '@': 'D2b',
    'W': 'D2',
    '#': 'E2b',
    'E': 'E2',
    'R': 'F2',
    '%': 'G2b',
    'T': 'G2',
    '^': 'A2b',
    'Y': 'A2',
    "&": 'B2b',
    'U': 'B2',
    'Z': 'C3',
    'S': 'D3b',
    'X': 'D3',
    'D': 'E3b',
    'C': 'E3',
    'V': 'F3',
    'G': 'G3b',
    'B': 'G3',
    'H': 'A3b',
    'N': 'A3',
    'J': 'B3b',
    'M': 'B3'
  };

  if (keyToNote[event.key]) {
    console.log(event.key);
    const note = keyToNote[event.key];
    playSound(note);
  }
});

// 버튼 부분
const backButton = document.getElementById('backButton');

backButton.addEventListener('click', () => {
	window.location.href = 'index.html';
});