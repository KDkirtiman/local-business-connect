
const authenticateUser = async (payload={}) => {
    const response = await fetch('http://localhost:8085/authenticate/user',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(payload)
    })
    .then(data => data.json())
    .catch((error) => console.log("Error While Fetching Data {}", error));

    return response;
}

export default authenticateUser;
