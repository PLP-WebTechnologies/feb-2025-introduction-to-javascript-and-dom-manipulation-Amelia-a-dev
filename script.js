// Accessing elements
const changeTextBtn = document.getElementById('changeTextBtn');
const changeStyleBtn = document.getElementById('changeStyleBtn');
const addElementBtn = document.getElementById('addElementBtn');
const removeElementBtn = document.getElementById('removeElementBtn');
const textElement = document.getElementById('text');
const contentSection = document.getElementById('content');

// Change text content
changeTextBtn.addEventListener('click', () => {
    textElement.textContent = "See the magic?";
});

// Change CSS styles
changeStyleBtn.addEventListener('click', () => {
    textElement.style.color = "blue";
    textElement.style.fontSize = "20px";
    textElement.style.fontWeight = "bold";
});

// Add a new element
addElementBtn.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "Here is the magic.";
    contentSection.appendChild(newParagraph);
});

// Remove the last element
removeElementBtn.addEventListener('click', () => {
    const lastElement = contentSection.lastElementChild;
    if (lastElement) {
        contentSection.removeChild(lastElement);
    }
});
