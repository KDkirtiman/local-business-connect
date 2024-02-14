
const authenticateUser = async (payload={userName:'KDDE',password:'admin12345'}) => {
    const response = await fetch('http://localhost:8085/authenticateUser',{
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
