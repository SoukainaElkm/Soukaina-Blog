document.getElementById('listUsers').style.display = "none"
/*document.getElementById('listArticles').style.display = "none"
document.getElementById('listTags').style.display = "none"
document.getElementById('listComments').style.display = "none"*/

for (var i = 1; i <= 3; i++)
    document.getElementById(i).style.display = "none"


function affiche(a) {
    let div = document.getElementById(a)

    if (div.style.display == "none")
        div.style.display = "inline";
    else
        div.style.display = "none";
}



function displayUsers() {
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

function displayAdmins() {
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

function displayAuthors() {
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

function displayGuests() {
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