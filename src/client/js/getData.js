async function getData(url, info) {
    const response = await fetch(url, {
        method: 'POST',
        credentials:'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    })
    try {
        const info = await response.json();
        return info;
    } catch(error) {
        console.log("ERROR", error);
    }
}

export { getData };