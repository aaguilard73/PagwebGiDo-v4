export const skipTabbableElements = () => {
  const skipLink = document.querySelector('.skip-link');
  
  if (skipLink) {
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement)?.getAttribute('href')?.substring(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        targetElement?.setAttribute('tabindex', '-1');
        targetElement?.focus();
      }
    });
  }
};

export const trapFocus = (element: HTMLElement) => {
  const focusableElements = element.querySelectorAll(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );
  
  if (focusableElements.length === 0) return;
  
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
  
  // Focus the first element
  firstElement.focus();
  
  element.addEventListener('keydown', (e) => {
    const isTabPressed = e.key === 'Tab';
    
    if (!isTabPressed) return;
    
    if (e.shiftKey) {
      /* shift + tab */
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      /* tab */
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  });
};