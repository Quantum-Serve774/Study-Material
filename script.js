function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var button = document.getElementById('toggle-btn');
    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0';
        button.style.left = '250px';
    } else {
        sidebar.style.left = '-250px';
        button.style.left = '0';
    }
}

function toggleDropdown(id) {
    var content = document.getElementById(id);
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
}