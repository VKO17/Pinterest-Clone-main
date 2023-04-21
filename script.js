// Get all dropdown menu items
const dropdownItems = document.querySelectorAll('.dropdown-item');

// Add event listener to each dropdown item
dropdownItems.forEach((item, index) => {
  item.addEventListener('mouseover', () => {
    // Remove active class from previous active item
    document.querySelector('.dropdown-item.active').classList.remove('active');
    // Add active class to current item
    item.classList.add('active');
  });

  // Set the first item as active
  if (index === 0) {
    item.classList.add('active');
  }
});
