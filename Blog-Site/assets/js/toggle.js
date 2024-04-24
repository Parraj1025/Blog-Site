const mode = document.getElementById('styling')
const stylebtn = document.getElementById('toggle')

function togglemode() {
    currentTheme = mode.getAttribute('class')
    theme = (currentTheme ==='light') ? 'dark' : 'light';
    mode.setAttribute('class',theme)
}

stylebtn.addEventListener('click', togglemode)

