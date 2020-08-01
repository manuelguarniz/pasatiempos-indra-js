;(function() {
  let camara = new Camara('video', 'canvas', () => {
    
  });
  if (!!(navigator.getUserMedia || navigator.webkitGetUserMedia)) {
    navigator.mediaDevices.getUserMedia({video: true})
      .then(localMediaStream => {
        let video = document.getElementById('video');
        video.srcObject = localMediaStream;

        let canvas = document.getElementById('canvas');
        let contexto = canvas.getContext('2d');

        let downloadBtn = document.getElementById('snap');

        setInterval(() => {
          contexto.drawImage(this.video, 0, 0);
        }, 1000 / 30);

        downloadBtn.addEventListener('click', () => {
          let image = canvas.toDataURL('image/png');
          let downloadLink = document.createElement('a');
          downloadLink.href = image;
          downloadLink.download = 'photo.png'
          downloadLink.click();
        })
      });
  } else {
    alert('No soportado')
  }
})()