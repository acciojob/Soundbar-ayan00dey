//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong', 'stop'];

// Get the buttons container
const buttonsContainer = document.createElement('div');
buttonsContainer.id = 'buttons';
document.body.appendChild(buttonsContainer);

// Create buttons for each sound
sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSounds();
        document.getElementById(sound).play();
    });

    buttonsContainer.appendChild(btn);

    // Create audio elements for each sound
    const audio = document.createElement('audio');
    audio.src = `sounds/${sound}.mp3`;
    audio.id = sound;
    document.body.appendChild(audio);
});

// Stop all sounds
function stopSounds() {
    sounds.forEach((sound) => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    });
}
