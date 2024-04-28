const mode = document.getElementById('styling')
const stylebtn = document.getElementById('toggle')
const btnimg = document.getElementById('btnimg')
// thi is the dark mode light mode toggle 

//this loads the current mode
function loadstyle () {
    style = localStorage.getItem('mode')
    mode.setAttribute('class', style)
}

// invoked function to load the current style and then set appropriate image for button
loadstyle()
loadbtn()

//function to  toggle between dark and light mode
function togglemode () {
    currentTheme = mode.getAttribute('class')
    let theme = (currentTheme ==='dark') ? 'light' : 'dark';
    mode.setAttribute('class',theme)
    localStorage.setItem('mode',theme)
    loadbtn()
    return theme;
}


//add functionality to button. on lick it runs function to toggle the mode
stylebtn.addEventListener('click', event => {
    togglemode()
    
})

// lods correct button for theme
function loadbtn () {
    currentThemes = mode.getAttribute('class')
    if (currentThemes === 'light') {
        btnimg.setAttribute('src','./assets/images/vecteezy_black-light-bulb-line-simple-icon-with-transparent-background_10793870.png')
    } 
    else {
        btnimg.setAttribute('src', './assets/images/vecteezy_light-bulb-that-lights-up-and-shines_11654508.png')
    }
}