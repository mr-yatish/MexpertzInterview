const fetchData = async (url, requestOptions) => {
    try {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formdata)
        };
        const response = await fetch('http://localhost:4000/user/signUp', requestOptions);
        const fetchedData = await response.json();
        return fetchedData;

    } catch (error) {
        console.log(error);
    }
};

export default fetchData;