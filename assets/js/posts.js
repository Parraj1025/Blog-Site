const posts = JSON.parse(localStorage.getItem('posts'))
const count = localStorage.getItem('count')
const again = document.getElementById('container')
let postpage = document.getElementById('posts')
const counting = document.getElementById('count')
// set variables for what we will be using

// set function to grab data from local storage and put it in a div container as a post with user name. title and blog post. also changes the count of posts to be accurate
function addpost () {
 for (i=0; i<posts.length; i++){ 
    let fullpost = document.createElement('div')
    fullpost.setAttribute('class','posting')

    let postuser = document.createElement('p');
    postuser.innerText = `Username: ${posts[i].user}`;
    fullpost.appendChild(postuser)

    let posttitle = document.createElement('p');
    posttitle.innerText = `Title: ${posts[i].heading}`;
    fullpost.appendChild(posttitle)

    let postbody = document.createElement('p')
    postbody.innerText = `Thoughts: ${posts[i].body}`;
    fullpost.appendChild(postbody)

    postpage.appendChild(fullpost)

    counting.innerText = `Current posts: ${posts.length}`
 }
}

// gave functionality to new post button to return to index page
again.addEventListener('click',event => {
    event.preventDefault()
    window.location = "./index.html"
})

// automatically loads posts in local storage
addpost()