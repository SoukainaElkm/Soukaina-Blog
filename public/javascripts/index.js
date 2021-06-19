document.getElementById('listUsers').style.display = "none"
document.getElementById('listArticles').style.display = "none"
document.getElementById('listTags').style.display = "none"
document.getElementById('listComments').style.display = "none"

for (var i = 1; i <= 14; i++)
    document.getElementById(i).style.display = "none"


function affiche(a) {
    let div = document.getElementById(a)

    if (div.style.display == "none")
        div.style.display = "inline";
    else
        div.style.display = "none";
}



function AfficherUsers() {
    let list = document.getElementById('listUsers')
    list.innerHTML = ""

    if (list.style.display == "none")
        list.style.display = "block"
    else
        list.style.display = "none"

    fetch('/users')
        .then(res => res.json())
        .then(function (data) {
            let tb = Object.keys(data)
            let usersList;
            usersList = '<center><h1>Liste des Utilisateurs</h1><table class="table table-bordered">'
            usersList += '<tr> <td><b>id</b></td> <td><b>username</b></td> <td><b>email</b></td> <td><b>role</b></td> <td><b>createdAt</b></td> <td><b>updatedAt</b></td> </tr>'
            for (i = 0; i < tb.length; i++) {
                usersList += '<tr> <td>' + data[i].id + '</td><td>' + data[i].username + '</td> <td>' + data[i].email + '</td> <td>' + data[i].role + '</td> <td>' + data[i].createdAt + '</td> <td>' + data[i].updatedAt + '</td> </tr>'
            }
            usersList += "</table></center>"
            list.innerHTML = usersList
        })
}

function addUser() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    const data = { username, email, password, role }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch('/users', options)
}

function updateUser() {
    const id = document.getElementById('iduser').value;
    const username = document.getElementById('newusername').value;
    const email = document.getElementById('newemail').value;
    const password = document.getElementById('newpassword').value;
    const role = document.getElementById('newrole').value;
    const data = { id, username, email, password, role }
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch('/users', options)
}

function deleteUser() {
    const id = document.getElementById('idUserDelete').value;
    const data = { id }
    const options = {
        method: 'Delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch('/users/:id', options)
}

function AfficherArticles() {
    let list = document.getElementById('listArticles')
    list.innerHTML = ""

    if (list.style.display == "none")
        list.style.display = "block"
    else
        list.style.display = "none"

    fetch('/articles')
        .then(res => res.json())
        .then(function (data) {
            let tb = Object.keys(data)
            let articlesList;
            articlesList = '<center><h1>Liste des Articles</h1><table class="table table-bordered">'
            articlesList += '<tr> <td><b>id</b></td> <td><b>title</b></td> <td><b>content</b></td> <td><b>published</b></td> <td><b>UserId</b></td> <td><b>createdAt</b></td> <td><b>updatedAt</b></td> </tr>'
            for (i = 0; i < tb.length; i++) {
                articlesList += '<tr> <td>' + data[i].id + '</td><td>' + data[i].title + '</td> <td>' + data[i].content + '</td> <td>' + data[i].published + '</td> <td>' + data[i].UserId + '</td> <td>' + data[i].createdAt + '</td> <td>' + data[i].updatedAt + '</td> </tr>'
            }
            articlesList += "</table></center>"
            list.innerHTML = articlesList
        })
}

function addArticle() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const published = document.getElementById('published').value;
    const UserId = document.getElementById('UserId').value;

    const data = { title, content, published, UserId }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch('/articles', options)
}

function updateArticle() {
    const id = document.getElementById('idarticle').value;
    const title = document.getElementById('newtitle').value;
    const content = document.getElementById('newcontent').value;
    const published = document.getElementById('newpublished').value;
    const UserId = document.getElementById('newUserId').value;
    const data = { id, title, content, published, UserId }
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch('/articles', options)
}

function deleteArticle() {
    const id = document.getElementById('idArticleDelete').value;
    const data = { id }
    const options = {
        method: 'Delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch('/articles/:id', options)
}


function AfficherTags() {
    let list = document.getElementById('listTags')

    if (list.style.display == "none")
        list.style.display = "block"
    else
        list.style.display = "none"

    fetch('/tags')
        .then(res => res.json())
        .then(function (data) {
            let tb = Object.keys(data)
            let tagsList;
            tagsList = '<center><h1>Liste des Tags</h1><table class="table table-bordered">'
            tagsList += '<tr> <td><b>id</b></td> <td><b>name</b></td> <td><b>createdAt</b></td> <td><b>updatedAt</b></td> </tr>'
            for (i = 0; i < tb.length; i++) {
                tagsList += '<tr> <td>' + data[i].id + '</td><td>' + data[i].name + '</td> <td>' + data[i].createdAt + '</td> <td>' + data[i].updatedAt + '</td> </tr>'
            }
            tagsList += "</table></center>"
            list.innerHTML = tagsList
        })
}

function addTag() {
    _
    const name = document.getElementById('name').value;

    const data = { name }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch('/tags', options)
}

function updateTag() {
    const id = document.getElementById('idtag').value;
    const name = document.getElementById('newname').value;
    const data = { id, name }
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch('/tags', options)
}

function deleteTag() {
    const id = document.getElementById('idTagDelete').value;
    const data = { id }
    const options = {
        method: 'Delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch('/tags/:id', options)
}


function AfficherComments() {
    let list = document.getElementById('listComments')

    if (list.style.display == "none")
        list.style.display = "block"
    else
        list.style.display = "none"

    fetch('/comments')
        .then(res => res.json())
        .then(function (data) {
            let tb = Object.keys(data)
            let commentsList = '<center><h1>Liste des Comments</h1><table class="table table-bordered">'
            commentsList += '<tr> <td><b>id</b></td> <td><b>content</b></td> <td><b>ArticleId</b></td> <td><b>createdAt</b></td> <td><b>updatedAt</b></td> </tr>'
            for (i = 0; i < tb.length; i++) {
                commentsList += '<tr> <td>' + data[i].id + '</td> <td>' + data[i].content + '</td> <td>' + data[i].ArticleId + '</td> <td>' + data[i].createdAt + '</td> <td>' + data[i].updatedAt + '</td> </tr>'
            }
            commentsList += "</table></center>"
            list.innerHTML = commentsList
        })
}

function addComment() {
    const content = document.getElementById('contentt').value;
    const ArticleId = document.getElementById('ArticleId').value;

    const data = { content, ArticleId }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch('/comments', options)
}

function updateComment() {
    const id = document.getElementById('idcomment').value;
    const content = document.getElementById('newcontentt').value;
    const ArticleId = document.getElementById('newArticleId').value;
    const data = { id, content, ArticleId }
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch('/comments', options)
}

function deleteComment() {
    const id = document.getElementById('idCommentDelete').value;
    const data = { id }
    const options = {
        method: 'Delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch('/comments/:id', options)
}


function getArticles() {
    let list = document.getElementById('listUsers')
    list.innerHTML = ""

    if (list.style.display == "none")
        list.style.display = "block"
    else
        list.style.display = "none"

    let id = document.getElementById('idUserArticles').value

    fetch('/users/' + id + '/articles')
        .then(res => res.json())
        .then(function (data) {
            let tb = Object.keys(data)
            let articlesList;
            articlesList = '<center><h1>Liste des Articles</h1><table class="table table-bordered">'
            articlesList += '<tr> <td><b>id</b></td> <td><b>title</b></td> <td><b>content</b></td> <td><b>published</b></td> <td><b>UserId</b></td> <td><b>createdAt</b></td> <td><b>updatedAt</b></td> </tr>'
            for (i = 0; i < tb.length; i++) {
                articlesList += '<tr> <td>' + data[i].id + '</td><td>' + data[i].title + '</td> <td>' + data[i].content + '</td> <td>' + data[i].published + '</td> <td>' + data[i].UserId + '</td> <td>' + data[i].createdAt + '</td> <td>' + data[i].updatedAt + '</td> </tr>'
            }
            articlesList += "</table></center>"
            list.innerHTML = articlesList
        })
}

function getCommentsByArticle() {
    let list = document.getElementById('listArticles')
    list.innerHTML = ""

    if (list.style.display == "none")
        list.style.display = "block"
    else
        list.style.display = "none"

    let id = document.getElementById('idArticleComments').value

    fetch('/articles/' + id + '/comments')
        .then(res => res.json())
        .then(function (data) {
            let tb = Object.keys(data)
            let commentsList = '<center><h1>Liste des Comments</h1><table class="table table-bordered">'
            commentsList += '<tr> <td><b>id</b></td> <td><b>content</b></td> <td><b>ArticleId</b></td> <td><b>createdAt</b></td> <td><b>updatedAt</b></td> </tr>'
            for (i = 0; i < tb.length; i++) {
                commentsList += '<tr> <td>' + data[i].id + '</td> <td>' + data[i].content + '</td> <td>' + data[i].ArticleId + '</td> <td>' + data[i].createdAt + '</td> <td>' + data[i].updatedAt + '</td> </tr>'
            }
            commentsList += "</table></center>"
            list.innerHTML = commentsList
        })
}


function AfficherAdmins() {
    let list = document.getElementById('listUsers')
    list.innerHTML = ""

    if (list.style.display == "none")
        list.style.display = "block"
    else
        list.style.display = "none"

    fetch('/users/:id/admins')
        .then(res => res.json())
        .then(function (data) {
            let tb = Object.keys(data)
            let usersList;
            usersList = '<center><h1>Liste des Admins</h1><table class="table table-bordered">'
            usersList += '<tr> <td><b>id</b></td> <td><b>username</b></td> <td><b>email</b></td> <td><b>role</b></td> <td><b>createdAt</b></td> <td><b>updatedAt</b></td> </tr>'
            for (i = 0; i < tb.length; i++) {
                usersList += '<tr> <td>' + data[i].id + '</td><td>' + data[i].username + '</td> <td>' + data[i].email + '</td> <td>' + data[i].role + '</td> <td>' + data[i].createdAt + '</td> <td>' + data[i].updatedAt + '</td> </tr>'
            }
            usersList += "</table></center>"
            list.innerHTML = usersList
        })
}

function AfficherAuthors() {
    let list = document.getElementById('listUsers')
    list.innerHTML = ""

    if (list.style.display == "none")
        list.style.display = "block"
    else
        list.style.display = "none"

    fetch('/users/:id/authors')
        .then(res => res.json())
        .then(function (data) {
            let tb = Object.keys(data)
            let usersList;
            usersList = '<center><h1>Liste des Auteurs</h1><table class="table table-bordered">'
            usersList += '<tr> <td><b>id</b></td> <td><b>username</b></td> <td><b>email</b></td> <td><b>role</b></td> <td><b>createdAt</b></td> <td><b>updatedAt</b></td> </tr>'
            for (i = 0; i < tb.length; i++) {
                usersList += '<tr> <td>' + data[i].id + '</td><td>' + data[i].username + '</td> <td>' + data[i].email + '</td> <td>' + data[i].role + '</td> <td>' + data[i].createdAt + '</td> <td>' + data[i].updatedAt + '</td> </tr>'
            }
            usersList += "</table></center>"
            list.innerHTML = usersList
        })
}

function AfficherGuests() {
    let list = document.getElementById('listUsers')
    list.innerHTML = ""

    if (list.style.display == "none")
        list.style.display = "block"
    else
        list.style.display = "none"

    fetch('/users/:id/guests')
        .then(res => res.json())
        .then(function (data) {
            let tb = Object.keys(data)
            let usersList;
            usersList = '<center><h1>Liste des Guests</h1><table class="table table-bordered">'
            usersList += '<tr> <td><b>id</b></td> <td><b>username</b></td> <td><b>email</b></td> <td><b>role</b></td> <td><b>createdAt</b></td> <td><b>updatedAt</b></td> </tr>'
            for (i = 0; i < tb.length; i++) {
                usersList += '<tr> <td>' + data[i].id + '</td><td>' + data[i].username + '</td> <td>' + data[i].email + '</td> <td>' + data[i].role + '</td> <td>' + data[i].createdAt + '</td> <td>' + data[i].updatedAt + '</td> </tr>'
            }
            usersList += "</table></center>"
            list.innerHTML = usersList
        })
}

/* For our Header */

$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 10) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});