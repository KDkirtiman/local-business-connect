const registerUserCredentials = async (payload={}) => {
    const response = await fetch('http://localhost:8085/authenticate/registerUserCredentials',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(payload)
    })
    .then(data => data.json())
    .catch((error) => {return {error}});

    return response;
}

export { registerUserCredentials };
