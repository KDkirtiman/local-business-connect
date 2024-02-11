
const authenticateUser = async (payload={userName:'',password:''}) => {
    const response = await fetch('URL to be created',{
        method: 'POST',
        headers: {},
        body: JSON.stringify(payload)
    }).then(data => data.json())

    return response;
}

export default authenticateUser;
