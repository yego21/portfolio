const buttons = document.querySelectorAll('.hover-button');
const iframes = document.querySelectorAll('.hover-iframe');
let activeIframeId = null;
<<<<<<< HEAD
let timeout;

buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
    const iframeId = button.getAttribute('data-iframe-id');
    if (activeIframeId !== iframeId) {
      timeout = setTimeout(() => {
      hideActiveIframe();
      showIframe(iframeId);
    }, 1000);
    }
  });

  button.addEventListener('mouseleave', () => {
  clearTimeout(timeout);
});

buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    const iframeId = button.getAttribute('data-iframe-id');
    if (activeIframeId !== iframeId) {
      hideActiveIframe();
      showIframe(iframeId);
    }
  });
>>>>>>> dd814750ab818c4531665ef8fe83f31c96fac091
});

function showIframe(iframeId) {
  const iframeToShow = document.getElementById(iframeId);
  if (iframeToShow) {
    iframeToShow.style.display = 'block';
    activeIframeId = iframeId;
  }
}

function hideActiveIframe() {
  if (activeIframeId) {
    const activeIframe = document.getElementById(activeIframeId);
    if (activeIframe) {
      activeIframe.style.display = 'none';
      activeIframeId = null;
    }
  }
}
