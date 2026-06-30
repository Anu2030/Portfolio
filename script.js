const monitorBtn = document.getElementById('monitorBtn');
const os = document.getElementById('os');
const boot = document.getElementById('boot');
const bootText = document.getElementById('bootText');
const desktop = document.getElementById('desktop');
const closeBtn = document.getElementById('closeBtn');
const clock = document.getElementById('clock');

const bootLines = [
  "Anoushka's_OS BIOS v1.0",
  "Checking memory......... OK",
  "Loading skills.dll...... OK",
  "Loading caffeine.exe.... OK",
  "Mounting portfolio/...... OK",
  "",
  "Welcome back, Anoushka.",
];

monitorBtn.addEventListener('click', () => {
  os.classList.remove('hidden');
  boot.classList.remove('hidden');
  desktop.classList.add('hidden');
  bootText.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    if (i < bootLines.length) {
      bootText.textContent += bootLines[i] + "\n";
      i++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        boot.classList.add('hidden');
        desktop.classList.remove('hidden');
      }, 500);
    }
  }, 220);
});

closeBtn.addEventListener('click', () => {
  os.classList.add('hidden');
});

// icons open windows
document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('click', () => {
    const link = icon.dataset.link;
    if (link) { window.open(link, '_blank'); return; }
    const id = icon.dataset.win;
    document.querySelectorAll('.window').forEach(w => w.classList.add('hidden'));
    const win = document.querySelector(`.window[data-window="${id}"]`);
    if (win) win.classList.remove('hidden');
  });
});

document.querySelectorAll('.win-close').forEach(btn => {
  btn.addEventListener('click', e => {
    e.target.closest('.window').classList.add('hidden');
  });
});

// clock
function updateClock() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
setInterval(updateClock, 1000);
updateClock();

// esc to close
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') os.classList.add('hidden');
});
