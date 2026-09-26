const express = require('express');
const cors = require('cors');
const path = require('path'); // फाईल्स जोडण्यासाठी
const app = express();
const PORT = 3000;

app.use(cors()); 

// फ्रंटएंड फोल्डर बॅकएंडला जोडण्यासाठी
app.use(express.static(path.join(__dirname, '../frontend')));

// प्रॉडक्टचा हार्डकोडेड डेटा 
const productInfo = {
    id: 101,
    name: "Dhanashree Jaggery Powder",
    description: "100% Natural & Chemical-Free Organic Jaggery Powder.",
    price: "₹150",
    weight: "1 kg",
    contact: "+91 84593 78198",
    website: "www.dhanshreejaggarypowedr.in"
};

// API Endpoint
app.get('/api/product', (req, res) => {
    res.json(productInfo);
});

// मुख्य पेज (/) लोड झाल्यावर फ्रंटएंड दिसण्यासाठी
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// सर्व्हर स्टार्ट करणे
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});