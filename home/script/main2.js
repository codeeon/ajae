// Function to sort the table rows by recommendation (likes)
function sortByRecommendation() {
  let table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById('boardTable');
  switching = true;
  while (switching) {
    switching = false;
    rows = table.getElementsByTagName('tr');
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = parseInt(rows[i].getElementsByTagName('td')[3].innerText);
      y = parseInt(rows[i + 1].getElementsByTagName('td')[3].innerText);
      if (x < y) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

// Function to sort the table rows by latest date
function sortByLatest() {
  let table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById('boardTable');
  switching = true;
  while (switching) {
    switching = false;
    rows = table.getElementsByTagName('tr');
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = new Date(rows[i].getElementsByTagName('td')[1].innerText);
      y = new Date(rows[i + 1].getElementsByTagName('td')[1].innerText);
      if (x < y) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

// Function to sort the table rows by oldest date
function sortByOldest() {
  let table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById('boardTable');
  switching = true;
  while (switching) {
    switching = false;
    rows = table.getElementsByTagName('tr');
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = new Date(rows[i].getElementsByTagName('td')[1].innerText);
      y = new Date(rows[i + 1].getElementsByTagName('td')[1].innerText);
      if (x > y) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

// Add event listener for sorting on title click
const postLinks = document.getElementsByClassName('postLink');
for (let i = 0; i < postLinks.length; i++) {
  postLinks[i].addEventListener('click', function (event) {
    event.preventDefault();
    const url = event.currentTarget.getAttribute('href');
    window.open(url, '_blank');
  });
}
