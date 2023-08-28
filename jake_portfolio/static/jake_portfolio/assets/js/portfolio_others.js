const slider = document.querySelector('.pslider');
const thumbnails = document.querySelectorAll('.pthumbnails img');

const gslider = document.querySelector('.gslider');
const gthumbnails = document.querySelectorAll('.gthumbnails img');

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    const offset = -index * slider.clientWidth;
    slider.style.transform = `translateX(${offset}px)`;

    // Optional: You can also highlight the selected thumbnail
    thumbnails.forEach((thumb) => {
      thumb.style.borderColor = 'transparent';
    });
    thumbnail.style.borderColor = '#3498db';
  });
});

gthumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    const offset = -index * gslider.clientWidth;
    gslider.style.transform = `translateX(${offset}px)`;

    // Optional: You can also highlight the selected thumbnail
    gthumbnails.forEach((thumb) => {
      thumb.style.borderColor = 'transparent';
    });
    thumbnail.style.borderColor = '#3498db';
  });
});
