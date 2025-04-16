const MenuBTN = document.getElementById('MenuBarbutton');
const OrigMenuContents = document.getElementById('MenSec');
const ClonedMenuContents = OrigMenuContents.cloneNode(true);
const App = document.querySelector('.appcontainer');

MenuBTN.addEventListener('click', () => {
  const MenuBAR = document.createElement('div');
  MenuBAR.appendChild(ClonedMenuContents);
  
  ClonedMenuContents.querySelectorAll('*').forEach((child) => {
    if (!child.classList.contains('imageContainer')) {
      child.style.display = 'block';
    } else {
      child.style.display = 'none';
    }
  });
  
  console.log(MenuBAR);
  App.appendChild(MenuBAR);
  ClonedMenuContents.classList.add('showmenuCSS');
  ClonedMenuContents.style.left = '-100%'; // Initial position
  
  // Animate slide-in
  setTimeout(() => {
    ClonedMenuContents.style.left = '0';
  }, 0); // Trigger animation
  
  // Prevent popup closure on inner click
  MenuBAR.addEventListener('click', (e) => {
    e.stopPropagation();
  });
  
  // Add event listener to document
  document.addEventListener('click', (e) => {
    if (!MenuBAR.contains(e.target) && !MenuBTN.contains(e.target)) {
      ClonedMenuContents.style.left = '-100%'; // Slide out
      setTimeout(() => {
        MenuBAR.remove();
      }, 500); // Wait for transition to complete
      document.removeEventListener('click', this);
    }
  });
});