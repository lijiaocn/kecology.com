document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  const initialBodyBackground = document.body.style.backgroundColor || 'black';

  function enterFullscreen(color) {
    document.body.style.backgroundColor = color;
    content.style.display = 'none';

    document.documentElement.requestFullscreen().catch(err => {
      console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      exitFullscreen();
    });
  }

  function exitFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    content.style.display = 'block';
    document.body.style.backgroundColor = initialBodyBackground;
  }

  document.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.addEventListener('click', (e) => {
      const color = e.target.dataset.color;
      enterFullscreen(color);
    });
  });

  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
      exitFullscreen();
    }
  });

  // Allow exiting fullscreen with a click/tap on the screen
  document.addEventListener('click', (e) => {
      if (document.fullscreenElement && e.target === document.documentElement) {
          exitFullscreen();
      }
  });
});
