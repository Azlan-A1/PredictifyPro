const path = require('path');
require('dotenv').config({path:'.env'})
// console.log("url " + process.env.SERVER_URL)
console.log(process.env.SERVER_URL)
const checkoutSessionUrl = `${process.env.SERVER_URL}/create-checkout-session`;
const submitHandler = (subType) => {
    fetch("http://localhost:3001/create-checkout-session", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            items: [
                {id: subType, quantity: 1}
            ]
        })
    })
    .then(res => {
        if (res.ok) return res.json()
        return res.json.then(json => Promise.reject(json))
    })
    .then(({url}) => {
        window.location = url
    })
    .catch(e=>{console.log(e.error)})
}

export default submitHandler