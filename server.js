require('dotenv').config()
// import packages from './constants/packageinfo.json'
const express = require("express")
const app = express()
app.use(express.json())
const cors = require('cors')
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

app.use(cors({
    origin: process.env.CLIENT_URL,
}))

const storeItems = fetch('http://127.0.0.1:5500/packageinfo.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Fetched Data:', data.packages[0].name);
        return data;
    })
    .catch(error => {
        console.error('Error occurred fetching data:', error);
    });
// console.log('Packages Data:', packInfo);



function getPackageById(id) {
    return storeItems.then(data => {
        if (data && data.packages) {
            const package = data.packages.find(pkg => pkg.id === id);
            if (package) {
                return package;
            } else {
                return null;
            }
        } else {
            throw new Error('Invalid data structure');
        }
    }).catch(error => {
        console.error('Error occurred in getPackageById:', error);
    });
}
app.post('/create-checkout-session', async (req, res) => {
    try {
        const itemsPromises = req.body.items.map(item => getPackageById(item.id));

       
        const items = await Promise.all(itemsPromises);


        const lineItems = items.map((pkg, index) => {
            if (pkg) {
                return {
                    price_data: {
                        currency: "cad",
                        product_data: {
                            name: pkg.name,
                        },
                        unit_amount: pkg.price,
                    },
                    quantity: req.body.items[index].quantity,
                };
            } else {
                throw new Error(`Package with ID ${req.body.items[index].id} not found.`);
            }
        });
        console.log(lineItems)
        // Create the checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: lineItems,
            success_url: `http://localhost:3000`,
            cancel_url: `http://localhost:3000/Pricing`,
        });

        res.json({ url: session.url });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});