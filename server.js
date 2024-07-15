const express = require('express');
const sendEmail = require('./emailSender'); // নতুন ফাইলটি ইমপোর্ট করুন

const app = express();

app.use(express.json());

app.post('/payment-success', async (req, res) => {
    const { email, subtotal } = req.body;
    await sendEmail(email, 'পেমেন্ট সফল হয়েছে', `আপনার পেমেন্ট সফল হয়েছে। সাবটোটাল: ${subtotal} টাকা`);
    res.redirect('/success.html');
});

app.post('/payment-failure', (req, res) => {
    res.redirect('/failure.html');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
