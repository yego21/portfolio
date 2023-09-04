const buttons = document.querySelectorAll('.hover-button');
const iframes = document.querySelectorAll('.hover-iframe');
let activeIframeId = null;

buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    const iframeId = button.getAttribute('data-iframe-id');
    if (activeIframeId !== iframeId) {
      hideActiveIframe();
      showIframe(iframeId);
      activateButtonsWithIframeId(iframeId);
    }
  });
});

function activateButtonsWithIframeId(iframeId) {
  buttons.forEach(button => {
    const buttonIframeId = button.getAttribute('data-iframe-id');
    if (buttonIframeId === iframeId) {
      button.classList.add('green-underline-button-active'); // Add an active class to buttons with matching iframeId
    } else {
      button.classList.remove('green-underline-button-active'); // Remove the active class from other buttons
    }
  });
}

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
