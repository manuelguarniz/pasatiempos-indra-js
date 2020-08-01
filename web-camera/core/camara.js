export default class Camara {

  constructor(videoId, canvasId, callback) {

    if (!isSupportCamera()) return;

    this.video = document.getElementById(videoId);
    this.canvas = document.getElementById(canvasId);
    this.contexto = canvas.getContext('2d');

    navigator.mediaDevices.getUserMedia({video: true})
      .then(stream => {
        this.setVideo();
        this.setCanvas();
        callback();
      })
      .catch(error => console.error('Error en cámara'));

    video.srcObject = localMediaStream;

  }

  isSupportCamera() {
    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia);
  }

  setVideo() {
    setInterval(() => {
      contexto.drawImage(this.video, 0, 0);
    }, 1000 / 30);
  }

  setCanvas() {
    this.video.srcObject = localMediaStream;
  }
}