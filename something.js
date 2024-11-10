document.addEventListener('DOMContentLoaded', (event) => {
  const sceneEl = document.querySelector('a-scene');
  const cameraEl = document.querySelector('#camera');
  const wasdControls = cameraEl.componenets['wasd-controls'];
  const renderer = sceneEl.renderer;

// When entering VR mode
sceneEl.addEventListener('enter-vr', () => {
  // Disable wasd-controls in VR
  wasdControls.enabled = false;
});

sceneEl.addEventListener('exit-vr', () => {
  // Enable wasd-controls when exiting VR
  wasdControls.enabled = true;
});

  // Enable XR mode
  if (renderer && renderer.xr) {
    renderer.xr.enabled = true;
  }

  // Set the size of the renderer
  renderer.setSize(window.innerWidth, window.innerHeight);
});