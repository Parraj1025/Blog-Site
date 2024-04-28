//set variables for objects we will be leveraging from HTML file.

const username = document.getElementById('username');
const title = document.getElementById('title');
const postbody = document.getElementById('blog_post');
const submit = document.getElementById('submit')
const count = document.getElementById('count')

// loads information from local storage 
function loadpost() {
    let currentposts = JSON.parse(localStorage.getItem('posts'))
        post.push(...currentposts)
        count.innerText = `current posts: ${post.length}`

}

// set an array to put posts into and added an array to keep count of posts submitted
const post = []
let postcount = 0



//collect data for a post and push it into the array post for access later as well as pushes it into local storage
function GrabData () {
    let user = username.value
    let heading = title.value
    let body = postbody.value

    let postdata = {
        user, heading, body
    }
    post.push(postdata)
    localStorage.setItem('posts',JSON.stringify(post))
    postcount++
    localStorage.setItem('count',postcount)
}

//function to go to next page
function nextsite() {
    window.location.href = './posts.html'
}


//added functionality to submit buttin. this button 
// makes sure empty form cant be submitted
//resets value
//sends to next page
submit.addEventListener('click',event => {
event.preventDefault()
if (!username.value || !title.value || !postbody.value) {
    alert('fill out all fields')
}
else {
GrabData()
nextsite()}
username.value = null,
title.value = null,
postbody.value = null

})

// invoke function to load post in order to not lose info in local storage
loadpost()

