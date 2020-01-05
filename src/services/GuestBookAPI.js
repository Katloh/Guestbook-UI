export async function getEntries() {
    const response = await fetch("http://localhost:8080/guestbook", {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await response.json()
}

export async function putEntry(entry) {
    await fetch("http://localhost:8080/guestbook", {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(entry)
    });
}