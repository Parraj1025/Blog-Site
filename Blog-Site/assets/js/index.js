username = document.getElementById('username');
title = document.getElementById('title');
postbody = document.getElementById('blog_post');

const post = []

function GrabData () {
    let posts = {
    ID: username.value,
    heading: title.value,
    body: postbody.value
    }
    post.push(posts)
    return posts;
}