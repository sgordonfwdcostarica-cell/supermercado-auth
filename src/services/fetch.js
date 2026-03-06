async function postData(obj, endpoint) {
    try {
        const peticion = await fetch(`http://localhost:1515/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        const data = await peticion.json()
        return data
    } catch (error) {
        console.error("Error al enviar los datos:", error)
    }
}

async function patchData(obj, endpoint, id) {
    try {
        const peticion = await fetch(`http://localhost:1515/${endpoint}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        const data = await peticion.json()
        return data
    } catch (error) {
        console.error("Error al enviar los datos:", error)
    }
}

async function deleteData(endpoint, id) {
    try {
        const peticion = await fetch(`http://localhost:1515/${endpoint}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await peticion.json()
        return data
    } catch (error) {
        console.error("Error al enviar los datos:", error)
    }
}

async function getData(endpoint) {
    try {
        const peticion = await fetch(`http://localhost:1515/${endpoint}`)
        const data = await peticion.json()
        return data
    } catch (error) {
        console.error("Error al obtener los datos:", error)
    }
}
export { postData, getData, deleteData, patchData }