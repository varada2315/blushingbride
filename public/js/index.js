document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // STICKY HEADER & BG CHANGE ON SCROLL
    // ==========================================
    const header = document.querySelector('.header-nav');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // ==========================================
    // MOBILE HAMBURGER MENU DRAWER
    // ==========================================
    const burgerBtn = document.querySelector('.burger-menu');
    const mobileOverlay = document.querySelector('.mobile-nav-overlay');
    
    if (burgerBtn && mobileOverlay) {
        burgerBtn.addEventListener('click', () => {
            burgerBtn.classList.toggle('open');
            mobileOverlay.classList.toggle('open');
            // Prevent body scroll when menu is open
            document.body.style.overflow = mobileOverlay.classList.contains('open') ? 'hidden' : '';
        });

        // Close mobile overlay on clicking a link
        const mobileLinks = mobileOverlay.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                burgerBtn.classList.remove('open');
                mobileOverlay.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // ==========================================
    // PORTFOLIO TABS TOGGLER
    // ==========================================
    const tabs = document.querySelectorAll('.portfolio-tab');
    const galleries = document.querySelectorAll('.portfolio-gallery-section');
    
    if (tabs.length > 0 && galleries.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetTab = tab.getAttribute('data-tab');
                
                // Set active tab
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Show corresponding gallery
                galleries.forEach(gallery => {
                    if (gallery.getAttribute('id') === `${targetTab}-gallery`) {
                        gallery.classList.add('active');
                    } else {
                        gallery.classList.remove('active');
                    }
                });
            });
        });
    }

    // ==========================================
    // INTERSECTION OBSERVER FOR FADE-IN SCROLL
    // ==========================================
    const animatedElements = document.querySelectorAll('.fade-in-section');
    if (animatedElements.length > 0) {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Animates once
                }
            });
        }, observerOptions);

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    // ==========================================
    // CINEMATIC VIDEO LIGHTBOX MODAL
    // ==========================================
    const videoCards = document.querySelectorAll('.video-card');
    const lightboxModal = document.querySelector('.lightbox-modal');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxIframe = document.querySelector('.lightbox-iframe');
    
    if (videoCards.length > 0 && lightboxModal && lightboxIframe) {
        videoCards.forEach(card => {
            card.addEventListener('click', () => {
                const videoUrl = card.getAttribute('data-video-url');
                if (videoUrl) {
                    lightboxIframe.src = videoUrl;
                    lightboxModal.style.display = 'flex';
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        const closeLightbox = () => {
            lightboxModal.style.display = 'none';
            lightboxIframe.src = '';
            document.body.style.overflow = '';
        };

        if (lightboxClose) {
            lightboxClose.addEventListener('click', closeLightbox);
        }

        // Close lightbox on clicking outside content area
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                closeLightbox();
            }
        });

        // Close lightbox on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightboxModal.style.display === 'flex') {
                closeLightbox();
            }
        });
    }

    // ==========================================
    // CONTACT FORM INTERACTIVE SUBMISSION
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.querySelector('.form-feedback');
    
    if (contactForm && formFeedback) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Simple validation
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const email = document.getElementById('email').value.trim();
            
            if (!firstName || !lastName || !email) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Extract form data
            const formData = new FormData(contactForm);
            const serializedData = {};
            formData.forEach((value, key) => {
                serializedData[key] = value;
            });
            
            try {
                const response = await fetch('/contact/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(serializedData)
                });
                
                const result = await response.json();
                
                if (result.success) {
                    // Hide form and show feedback
                    contactForm.style.display = 'none';
                    formFeedback.textContent = result.message;
                    formFeedback.style.display = 'block';
                    formFeedback.scrollIntoView({ behavior: 'smooth' });
                } else {
                    alert('Submission failed. Please try again.');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('An error occurred. Please try again later.');
            }
        });
    }
});
