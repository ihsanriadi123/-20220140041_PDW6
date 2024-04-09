document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('video');
    const audio = document.querySelector('audio');
  
    // Membuat pengaturan untuk video
    video.onmouseover = function() {
      video.play(); // Memutar video saat mouse di atasnya
    };
  
    video.onmouseout = function() {
      video.pause(); // Jeda video saat mouse meninggalkannya
    };
  
    // Membuat pengaturan untuk audio
    audio.volume = 0.5; // Set volume audio menjadi setengah dari volume maksimum
  
    // Menambahkan kontrol keyboard untuk mengendalikan kereta
    document.addEventListener('keydown', function(event) {
      const key = event.key;
      if (key === 'ArrowLeft') {
        // Logika untuk menggerakkan kereta ke kiri
        console.log('Kereta bergerak ke kiri');
      } else if (key === 'ArrowRight') {
        // Logika untuk menggerakkan kereta ke kanan
        console.log('Kereta bergerak ke kanan');
      }
    });
  });