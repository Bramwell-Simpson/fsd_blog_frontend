const getAll = () => {

    return fetch("http://localhost:3333/articles")
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
        return Promise.reject(error)
    })
}

const getOne = (id) => {

    return fetch("http://localhost:3333/articles/" + id)
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
        return Promise.reject(error)
    })
};

const addArticle = (authToken, title, author, text) => {
    return fetch("http://localhost:3333/articles", {
        method: "POST",
        headers: {
            "X-Authorization": authToken,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "title": title,
            "author": author,
            "article_text": text
        })
    })
    .then((response) => {
        if(response.status === 201) {
            return response.json()
        }
        else {
            throw "Something went wrong"
        }
    })
    .then((resJson) => {
        return resJson
    })
    .catch((error) => {
        return Promise.reject(error)
    })
}

const deleteArticle = (authToken, id) => {
    return fetch("http://localhost:3333/articles/" + id, {
        method: "DELETE",
        headers: {
            "X-Authorization": authToken,
        }
    })
    .then((response) => {
        if(response.status === 200) {
            return response.json()
        }
        else {
            throw "Something went wrong"
        }
    })
    .then((resJson) => {
        return resJson
    })
    .catch((error) => {
        return Promise.reject(error)
    })
}

export default {
    getAll: getAll,
    getOne: getOne,
    addArticle: addArticle,
    deleteArticle: deleteArticle
}