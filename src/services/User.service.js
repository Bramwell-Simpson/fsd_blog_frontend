const authUser = (email, password) => {
    return fetch("http://localhost:3333/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    })
    .then((response) => {
        if(response.status === 200) {
            return response.json()
        }
        else if(response.status === 400) {
            throw "Wrong email/password"
        }
        else {
            throw "Something went wrong"
        }
    })
    .then((resJson) => {
        return resJson
    })
    .catch((error) => {
        console.log("err", error)
        return Promise.reject(error)
    })
}

const getAllUsers = (authToken) => {
    return fetch("http://localhost:3333/users", {
        method: "GET",
        headers: {"X-Authorization": authToken}
    })
    .then((response) => {
        if(response.status === 200) {
            return response.json();
        }
        else {
            throw "Something went wrong"
        }
    })
    .then((resJson) => {
        return resJson
    })
    .catch((error) => {
        console.log("err", error)
        return Promise.reject(error.text())
    })
}

const logout = (authToken) => {
    return fetch("http://localhost:3333/logout", {
        method: "POST",
        headers: {
            "X-Authorization": authToken,
            "Content-Type": "application/json"
    }
    })
    .then((response) => {
        if(response.status === 200) {
            return response.body;
        }
        else { 
            throw response.statusText
        }
    })
    .then((resJson) => {
        return resJson
    })
    .catch((error) => {
        console.log("err", error)
        return Promise.reject(error)
    })
}

const addUser = (authToken, fname, lname, email, pass) => {
    return fetch("http://localhost:3333/users", {
        method: "POST",
        headers: {
            "X-Authorization": authToken,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "first_name": fname,
            "last_name": lname,
            "email": email,
            "password": pass
        })
    })
    .then((response) => {
        if(response.status === 201) {
            return response.json();
        }
        else { 
            throw response.statusText
        }
    })
    .then((resJson) => {
        return resJson
    })
    .catch((error) => {
        console.log("err", error)
        return Promise.reject(error)
    })
}


export default {
    authUser: authUser,
    getAllUsers: getAllUsers,
    addUser: addUser,
    logout: logout
}