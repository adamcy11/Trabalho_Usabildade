tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        dark: '#1F1F20',
        gray: '#2A303C',
        gray2: '#3B3B3C',
        lightgray: '#848486',
        purple: '#B718EF',
        purpledark: '#3B0350',
        bluedark: '#03124F',
      },
      backgroundImage: {
        'loginBgImg': "url('./img/background_login.jpeg')",
      },
    }
  }
}


function toggleMenu(button) {
  var menu = button.nextElementSibling;
  menu.classList.toggle("hidden");
}
