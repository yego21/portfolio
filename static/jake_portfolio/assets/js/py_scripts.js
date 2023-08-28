
  const openPopupButtons = document.querySelectorAll('.openPopupButton');
  const closePopupButtons = document.querySelectorAll('.close-button');
  const popupOverlays = document.querySelectorAll('.popup-overlay');


  openPopupButtons.forEach(button => {
    button.addEventListener('click', () => {
      const popupId = button.getAttribute('data-popup-id');
      const popupOverlay = document.getElementById(popupId);
      popupOverlay.style.display = 'block';
      // Call the function to set the dynamic content
      setDynamicContent(popupId);
    });
  });

  closePopupButtons.forEach(button => {
    button.addEventListener('click', () => {
      const popupId = button.getAttribute('data-popup-id');
      const popupOverlay = document.getElementById(popupId);
      popupOverlay.style.display = 'none';
    });
  });

  function setDynamicContent(popupId) {
    const popupContentElement = document.getElementById(`${popupId}Content`);
    const existingContent = popupContentElement.textContent;

    // Modify the existing content or set a completely new content
    const newContent = existingContent.replace('Default', 'New'); // Example modification
    popupContentElement.textContent = newContent;
  }
