const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Parse form bodies (for contact form submissions)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing
app.get('/', (req, res) => {
    res.render('home', { activePage: 'home', title: 'House On The Clouds' });
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio', { activePage: 'portfolio', title: 'Portfolio - House On The Clouds' });
});

app.get('/our-story', (req, res) => {
    res.render('our-story', { activePage: 'our-story', title: 'Our Story - House On The Clouds' });
});

app.get('/blogs', (req, res) => {
    res.render('blogs', { activePage: 'blogs', title: 'Blogs - House On The Clouds' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { activePage: 'contact', title: 'Contact Us - House On The Clouds' });
});

// Handle contact form submission
app.post('/contact/submit', (req, res) => {
    console.log('Contact form submission received:', req.body);
    // Return a success JSON message
    res.json({ success: true, message: 'Thank you for reaching out! We will get in touch with you shortly.' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
