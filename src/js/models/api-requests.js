
export const getRequest = async (url) => {
    // console.log(url)
    const data = await fetch(url).then(
        res => {
            if (!res.ok) {
                return Promise.reject(res)
            }
            return res.json();
        }
    ).catch(err => errorHandle(err, url))
    return data
}


function errorHandle(err, url, payload) {
    if (err.status === 401) {
        console.log(`Error: Authentication failed: ${url}`, err, payload)
    }
    console.log(`${err.status ? err.status : 'Error fetching data'}: ${err.statusText} - ${url}`, err, payload)
}


// Api key: 
// http://food2fork.com/api/search , http://food2fork.com/api/get

// const key = 'key=184a44482cec0ac1dd59af50dc13797c';
// const api = 'http://food2fork.com/api/'
