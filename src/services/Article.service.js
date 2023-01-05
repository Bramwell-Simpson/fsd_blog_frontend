const getAll = () => {

    return fetch("https://localhost:3333/articles")
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

export default {
    getAll: getAll
}