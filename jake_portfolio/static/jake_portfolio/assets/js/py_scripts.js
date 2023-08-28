
  const openPopupButtons = document.querySelectorAll('.openPopupButton');
  const closePopupButtons = document.querySelectorAll('.close-button');
  const popupOverlays = document.querySelectorAll('.popup-overlay');



  openPopupButtons.forEach(button => {
    button.addEventListener('click', () => {
      const popupId = button.getAttribute('data-popup-id');
      const popupOverlay = document.getElementById(popupId);
      popupOverlay.style.display = 'block';
      popupOverlays.classList.add("show-popup");
      // Call the function to set the dynamic content
      setDynamicContent(popupId);
    });
  });

  closePopupButtons.forEach(button => {
    button.addEventListener('click', () => {
      const popupId = button.getAttribute('data-popup-id');
      const popupOverlay = document.getElementById(popupId);
      popupOverlay.style.display = 'none';
      popupOverlays.classList.remove("show-popup");
    });
  });

  function setDynamicContent(popupId) {
    const popupContentElement = document.getElementById(`${popupId}Content`);
    const existingContent = popupContentElement.textContent;

    // Modify the existing content or set a completely new content
    const newContent = existingContent.replace('Default', 'New'); // Example modification
    popupContentElement.textContent = newContent;
  }












  // Select all <pre> elements
  const preElements = document.querySelectorAll('pre');

  // Define the specific words you want to match
  const wordsToMatch = ['def', 'while', 'for', 'try', 'with', 'class ', 'import' ,'except', 'if'];
  const functionNames = [];
  const quoted_texts = [];


  const def_regex = /def\s+(\w+)\s*\(/g;
  const class_regex = /class\s+(\w+)\s*:/;
  const capture_quote = /"([^"]*)"/g;






  preElements.forEach(preElement => {
    const content = preElement.textContent;

    const lines = content.split('\n');
    const processedLines = lines.map(line => {
      if (line.trim().startsWith('#')) {
        return `<span class='commented'>${line}</span>`;
      } else {
        return line;
      }
    });


    const updatedContent1 = processedLines.join('\n');
    const combinedContent = updatedContent1.replace(/"([^"]*)"/g, '<span class="quoted">$&</span>');
    preElement.innerHTML = combinedContent;



    let match, match1;
    while ((match = def_regex.exec(content)) !== null) {
      const functionName = match[1];
      functionNames.push(functionName)
      console.log(match)
    }
    while ((match1 = capture_quote.exec(content)) !== null) {
      console.log(match1)
      const quoted_text = match1[1];
      quoted_texts.push(quoted_text)
      console.log(match1)
    }


    wordsToMatch.forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      preElement.innerHTML = preElement.innerHTML.replace(regex, match => `<span class="highlight">${match}</span>`);
    });

    functionNames.forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      preElement.innerHTML = preElement.innerHTML.replace(regex, match => `<span class="name_colors">${match}</span>`);

    });
  });


  console.log(wordsToMatch)

  const style = document.createElement('style');
  style.textContent = `
    .highlight {
      color: #f0b659;
      font-weight: bold;
    }

    .name_colors {
      color: #59c6eb;
    }

    .quoted {
      color: #61e86a;
    }

    .commented {
      color: #878a96;
    }
  `;



  // Append the style to the document
  document.head.appendChild(style);
