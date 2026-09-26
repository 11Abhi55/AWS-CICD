async function loadProductData() {
    try {
        // बॅकएंडकडून डेटा फेच करणे
        const response = await fetch('http://16.171.13.152:3000/api/info');
        const data = await response.json();
        
        // HTML मध्ये डेटा अपडेट करणे
        document.getElementById('product-name').textContent = data.name;
        document.getElementById('product-desc').textContent = data.description;
        document.getElementById('product-price').textContent = data.price;
        document.getElementById('product-weight').textContent = data.weight;
        document.getElementById('product-contact').textContent = data.contact;
        document.getElementById('product-website').textContent = data.website;
        
    } catch (error) {
        document.getElementById('product-name').textContent = "Error loading data!";
        console.error('Error fetching product data:', error);
    }
}

// पेज लोड झाल्यावर फंक्शन रन करा
window.onload = loadProductData;