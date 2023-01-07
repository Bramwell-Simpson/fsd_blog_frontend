const getComments = (id) => {

    return fetch("http://localhost:3333/articles/" + id + "/comments/" )
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
        console.log("err", error)
        return Promise.reject(error)
    })
}

const createComment = (id, comment) => {
    return fetch("http://localhost:3333/articles/" + id + "/comments/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({"comment_text": comment})
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
        console.log("err", error)
        return Promise.reject(error)
    })
}

export default { 
    getComments: getComments,
    createComment: createComment
}