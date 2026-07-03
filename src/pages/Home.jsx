import React, { useState } from 'react';
import VideoLightbox from '../VideoLightbox';

function Home() {
  const [lightbox, setLightbox] = useState({ isOpen: false, videoUrl: '' });

  const openVideo = (url) => {
    setLightbox({ isOpen: true, videoUrl: url });
  };

  const closeVideo = () => {
    setLightbox({ isOpen: false, videoUrl: '' });
  };

  return (
    <>
      {/* SECTION 2: HERO BANNER */}
      <section 
        className="hero-banner" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920')", 
          height: '100vh' 
        }}
      >
        <div className="hero-overlay" style={{ background: 'rgba(0,0,0,0.15)' }}></div>
        <div style={{ position: 'absolute', bottom: '8vh', left: '4vw', zIndex: 10, color: 'var(--color-white)', maxWidth: '500px' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--color-white)', opacity: 0.8 }}>
            Blushing Bride Studios
          </span>
        </div>
      </section>

      {/* SECTION 3: BRAND INTRO / ABOUT (Redesigned to 3-Column Layout) */}
      <section className="section theme-cream fade-in-section" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container">
          <div className="about-3col-layout">
            {/* Left Column: Portrait Photo */}
            <div className="about-col-left">
              <div className="img-zoom-wrapper" style={{ aspectRatio: '3/4', boxShadow: '0 15px 30px rgba(0,0,0,0.05)', backgroundColor: '#e5dec9' }}>
                <img src="https://images.unsplash.com/photo-1591555200813-ac537f6317d6?q=80&w=800" alt="Intimate couple portrait close up" />
              </div>
            </div>

            {/* Center Column: Text Content & Logos */}
            <div className="about-col-center">
              <div className="about-title-block">
                <span className="about-est">ESTABLISHED 2015</span>
                <h2 className="about-heading-top">A MODERN APPROACH</h2>
                <h2 className="about-heading-bottom"><em>to an</em> AGE OLD TRADITION</h2>
              </div>

              <div className="about-text-content">
                <p>
                  Considered to be the epitome of Modern Photography and Filmmaking, HOTC has transformed the Indian Wedding landscape on a regular basis. For almost a decade House On The Clouds has been creating photographs and films which are timeless and have been etched in memories of thousands of people forever.
                </p>
                <p>
                  Awarded as the Wedding Filmmaker of the year for four consecutive years at the Weddingsutra awards along with numerous other awards HOTC is the only company listed on IMDB for its award winning films.
                </p>
              </div>

              <div className="about-logos-row">
                <span className="about-logo-item">VOGUE</span>
                <span className="about-logo-item">COSMOPOLITAN</span>
                <span className="about-logo-item">HELLO!</span>
                <span className="about-logo-item">BRIDES</span>
                <span className="about-logo-item">TRAVEL+LEISURE</span>
              </div>
            </div>

            {/* Right Column: Landscape Photo */}
            <div className="about-col-right">
              <div className="img-zoom-wrapper" style={{ aspectRatio: '3/2', boxShadow: '0 15px 30px rgba(0,0,0,0.05)', backgroundColor: '#e5dec9' }}>
                <img src="https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=800" alt="Scenic wedding party landscape" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PHOTOGRAPHY SHOWCASE (Clean 5x3 Grid, 14 Images) */}
      <section className="section theme-white full-bleed fade-in-section" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="photography-collage-grid">
          {/* Row 1 */}
          <div className="collage-item">
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600" alt="Groom with bouquet close up" />
          </div>
          <div className="collage-item">
            <img src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=600" alt="Bride and groom holding hands showing wedding rings" />
          </div>
          <div className="collage-item">
            <img src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=600" alt="Beautiful outdoor wedding altar setting" />
          </div>
          <div className="collage-item">
            <img src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=600" alt="Bride and groom walking outdoors" />
          </div>
          <div className="collage-item">
            <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=600" alt="Close up intimate couple embrace" />
          </div>

          {/* Row 2 */}
          <div className="collage-item">
            <img src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600" alt="Bride's veil floating in the wind" />
          </div>
          <div className="collage-item">
            <img src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=600" alt="Bride and groom laughing candid portrait" />
          </div>
          <div className="collage-item collage-text-card">
            <span className="subtitle-top">some of the most</span>
            <h3 className="title-main">“ICONIC”</h3>
            <span className="subtitle-bottom">wedding images</span>
          </div>
          <div className="collage-item">
            <img src="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=600" alt="Elegant reception table settings close up" />
          </div>
          <div className="collage-item">
            <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600" alt="Wedding guest sparklers celebration sendoff" />
          </div>

          {/* Row 3 */}
          <div className="collage-item">
            <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=600" alt="Guests raising a toast at the wedding dinner" />
          </div>
          <div className="collage-item">
            <img src="https://images.unsplash.com/photo-1537907690979-ee8e01276184?q=80&w=600" alt="Classic elegant bride portrait" />
          </div>
          <div className="collage-item">
            <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600" alt="Sunset kiss wedding portrait" />
          </div>
          <div className="collage-item">
            <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600" alt="Intimate couple portrait close up" />
          </div>
          <div className="collage-item">
            <img src="https://images.unsplash.com/photo-1520854221256-17451cc35d53?q=80&w=600" alt="Wedding couple happy moments" />
          </div>
        </div>

        <div className="container" style={{ textAlign: 'center', marginTop: '50px' }}>
          <span className="btn-primary" style={{ fontSize: '0.75rem', padding: '14px 30px', letterSpacing: '0.1em', border: '1px solid rgba(0,0,0,0.15)', background: 'transparent', color: 'var(--color-charcoal)', display: 'inline-block' }}>
            Photography Blog
          </span>
        </div>
      </section>

      {/* SECTION 5: FEATURED WEDDINGS */}
      <section className="section theme-white fade-in-section" style={{ paddingTop: 0, paddingBottom: '120px' }}>
        <div className="container">
          <div style={{ marginBottom: '60px' }}>
            <span className="text-uppercase letter-spacing-wide font-sans" style={{ fontSize: '0.75rem', color: 'var(--color-softgrey)', display: 'block', marginBottom: '10px' }}>FEATURED ARCHIVES</span>
            <h3 style={{ fontSize: '3rem', color: 'var(--color-charcoal)' }}>Selected Weddings</h3>
          </div>

          <div className="grid-3" style={{ alignItems: 'end', gap: '50px' }}>
            {/* Card 1 */}
            <div className="portfolio-card">
              <div className="img-zoom-wrapper portfolio-card-img" style={{ aspectRatio: '3/4' }}>
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600" alt="TAMANNA & DAN cover" />
              </div>
              <div className="portfolio-card-info" style={{ marginTop: '15px' }}>
                <h4 className="portfolio-card-title" style={{ fontSize: '1.4rem' }}>Tamanna & Dan</h4>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-softgrey)' }}>October 2025 . Jodhpur, India</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="portfolio-card">
              <div className="img-zoom-wrapper portfolio-card-img" style={{ aspectRatio: '1/1' }}>
                <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=600" alt="REVA & ZACH cover" />
              </div>
              <div className="portfolio-card-info" style={{ marginTop: '15px' }}>
                <h4 className="portfolio-card-title" style={{ fontSize: '1.4rem' }}>Reva & Zach</h4>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-softgrey)' }}>December 2025 . Rome, Italy</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="portfolio-card">
              <div className="img-zoom-wrapper portfolio-card-img" style={{ aspectRatio: '3/4' }}>
                <img src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=600" alt="ALIA & RANBIR cover" />
              </div>
              <div className="portfolio-card-info" style={{ marginTop: '15px' }}>
                <h4 className="portfolio-card-title" style={{ fontSize: '1.4rem' }}>Alia & Ranbir</h4>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-softgrey)' }}>April 2025 . Mumbai, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FILMS SECTION (Redesigned with looping stock video, clip-path, & SVG flower overlays) */}
      <section className="films-section fade-in-section">
        {/* Background Looping Stock Video */}
        <video autoPlay loop muted playsInline className="films-bg-video">
          <source src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054f4d82b3d0cf93a8d9cc2f6230f2f&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
        </video>

        {/* Overlay Dark Tint */}
        <div className="films-overlay"></div>

        {/* Left Flower Overlays */}
        <svg className="films-flower films-flower-left-1" viewBox="0 0 200 200" fill="rgba(255, 255, 255, 0.85)">
          <g transform="translate(100, 100)">
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" opacity="0.9" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(30)" opacity="0.75" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(60)" opacity="0.9" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(90)" opacity="0.75" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(120)" opacity="0.9" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(150)" opacity="0.75" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(180)" opacity="0.9" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(210)" opacity="0.75" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(240)" opacity="0.9" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(270)" opacity="0.75" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(300)" opacity="0.9" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(330)" opacity="0.75" />
          </g>
        </svg>

        <svg className="films-flower films-flower-left-2" viewBox="0 0 200 200" fill="rgba(255, 255, 255, 0.75)">
          <g transform="translate(100, 100)">
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" opacity="0.9" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(30)" opacity="0.75" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(60)" opacity="0.9" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(90)" opacity="0.75" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(120)" opacity="0.9" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(150)" opacity="0.75" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(180)" opacity="0.9" />
          </g>
        </svg>

        {/* Right Flower Overlays */}
        <svg className="films-flower films-flower-right-1" viewBox="0 0 200 200" fill="rgba(255, 255, 255, 0.85)">
          <g transform="translate(100, 100)">
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" opacity="0.9" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(30)" opacity="0.75" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(60)" opacity="0.9" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(90)" opacity="0.75" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(120)" opacity="0.9" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(150)" opacity="0.75" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(180)" opacity="0.9" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(210)" opacity="0.75" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(240)" opacity="0.9" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(270)" opacity="0.75" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(300)" opacity="0.9" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(330)" opacity="0.75" />
          </g>
        </svg>

        <svg className="films-flower films-flower-right-2" viewBox="0 0 200 200" fill="rgba(255, 255, 255, 0.75)">
          <g transform="translate(100, 100)">
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" opacity="0.9" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(30)" opacity="0.75" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(60)" opacity="0.9" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(90)" opacity="0.75" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(120)" opacity="0.9" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(150)" opacity="0.75" />
            <path d="M 0 0 C -25 -45, -45 -85, 0 -105 C 45 -85, 25 -45, 0 0" transform="rotate(180)" opacity="0.9" />
          </g>
        </svg>

        {/* Content Container */}
        <div className="films-content-container">
          <h3 className="films-title">SOUL<span>+</span>CINEMA</h3>
          <p className="films-description">
            Every wedding is unique and so are our films. For past 8 years HOTC has set new benchmarks of storytelling within wedding realm and beyond. We are fortunate to have experienced so unique cultures and traditions across 25 countries and to document stories that continuously overwhelm us.
          </p>
        </div>
      </section>

      {/* SECTION 7: AWARDS STRIP */}
      <section className="section theme-white" style={{ paddingTop: '100px', paddingBottom: '100px', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px' }}>
          <div className="awards-header">
            <h3 className="awards-title">AWARD WINNING FILMS</h3>
            <div className="awards-line"></div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '6vw', flexWrap: 'wrap', width: '100%' }}>
            {/* Badge 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '180px', textAlign: 'center' }}>
              <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.5">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: 'var(--color-charcoal)' }}>Filmmaker of the Year</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', opacity: 0.5 }}>Weddingsutra Awards</span>
            </div>

            {/* Badge 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '180px', textAlign: 'center' }}>
              <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.5">
                <path d="M22 12A10 10 0 1112 2v10h10z"/>
              </svg>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: 'var(--color-charcoal)' }}>Top 10 Worldwide</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', opacity: 0.5 }}>Destination Film Guild</span>
            </div>

            {/* Badge 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '180px', textAlign: 'center' }}>
              <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
              </svg>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: 'var(--color-charcoal)' }}>Best Cinematography</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', opacity: 0.5 }}>International Video Awards</span>
            </div>

            {/* Badge 4 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '180px', textAlign: 'center' }}>
              <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.75 0L12 5.67l-1.09-1.06a5.5 5.5 0 00-7.75 7.75l1.09 1.06L12 21.23l7.75-7.75 1.09-1.06a5.5 5.5 0 000-7.75z"/>
              </svg>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: 'var(--color-charcoal)' }}>Editors Choice</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', opacity: 0.5 }}>Wedding Collective US</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FEATURED FILMS (Two Column side-by-side) */}
      <section className="section theme-white fade-in-section" style={{ paddingTop: '120px', paddingBottom: '120px', position: 'relative', overflow: 'hidden' }}>
        <div className="video-bg-element video-bg-circle-1"></div>
        <div className="video-bg-element video-bg-arch-1"></div>
        <div className="video-bg-element video-bg-watermark-1">Cinema</div>
        
        <svg className="video-bg-element video-bg-botanical-1" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10,90 C30,80 50,60 60,35 C70,10 90,5 90,5" />
          <path d="M35,70 C40,55 55,50 62,53" />
          <path d="M50,52 C55,38 68,34 75,36" />
          <path d="M22,78 C25,66 38,62 44,66" />
        </svg>

        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '60px', position: 'relative', zIndex: 1 }}>
          <div className="grid-2" style={{ gap: '60px', width: '100%', alignItems: 'start' }}>
            {/* Video 1 */}
            <div className="portfolio-card video-card video-card-left" onClick={() => openVideo('https://www.youtube.com/embed/dQw4w9WgXcQ')}>
              <div className="video-card-media video-media-arch">
                <div className="video-card-thumbnail" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600')" }}></div>
                <div className="video-card-overlay">
                  <div className="video-play-btn"><span>&#9658;</span></div>
                </div>
              </div>
              <div style={{ marginTop: '20px' }}>
                <h4 style={{ fontSize: '1.6rem', marginBottom: '10px' }}>Zina & Zain . Srinagar</h4>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', opacity: 0.75, fontWeight: 300, lineHeight: 1.7 }}>
                  A slow, atmospheric visual piece capturing traditional vows in the mist-laden valleys of Kashmir, set to raw ambient soundscapes.
                </p>
              </div>
            </div>
 
            {/* Video 2 */}
            <div className="portfolio-card video-card video-card-right" onClick={() => openVideo('https://www.youtube.com/embed/dQw4w9WgXcQ')}>
              <div className="video-card-media video-media-leaf">
                <div className="video-card-thumbnail" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=600')" }}></div>
                <div className="video-card-overlay">
                  <div className="video-play-btn"><span>&#9658;</span></div>
                </div>
              </div>
              <div style={{ marginTop: '20px' }}>
                <h4 style={{ fontSize: '1.6rem', marginBottom: '10px' }}>Rhea & Divish . Udaipur</h4>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', opacity: 0.75, fontWeight: 300, lineHeight: 1.7 }}>
                  An energetic, stylized afterparty montage showcasing modern palace celebrations, neon accents, and beautiful candid laughter.
                </p>
              </div>
            </div>
          </div>

          <div>
            <span className="btn-primary" style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-white)', border: 'none', cursor: 'pointer', display: 'inline-block' }}>
              Watch All Our Award Winning Films
            </span>
          </div>

          <p style={{ maxWidth: '600px', textAlign: 'center', fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: '1.8', opacity: 0.6, fontWeight: 300, marginTop: '20px' }}>
            Our approach to cinematography is minimal and unobtrusive. We avoid heavy setups and bulky rigs to allow real, authentic human connections to take center stage.
          </p>
        </div>
      </section>

      {/* SECTION 9: SELECTED FILMS */}
      <section className="section theme-white fade-in-section" style={{ paddingTop: 0, paddingBottom: '180px', position: 'relative', overflow: 'hidden' }}>
        <div className="stories-bg-element stories-bg-circle-1"></div>
        <div className="stories-bg-element stories-bg-arch-1"></div>
        <div className="stories-bg-element stories-bg-watermark-1">Stories</div>

        <div className="container">
          <div style={{ marginBottom: '60px' }}>
            <span className="text-uppercase letter-spacing-wide font-sans" style={{ fontSize: '0.75rem', color: 'var(--color-softgrey)', display: 'block', marginBottom: '10px' }}>SELECTED CINEMA</span>
            <h3 style={{ fontSize: '3.5rem', color: 'var(--color-charcoal)', fontFamily: 'var(--font-serif)', fontWeight: 300 }}>Visual Stories</h3>
          </div>

          <div className="visual-stories-grid">
            {/* Card 1 */}
            <div className="portfolio-card video-card stories-card stories-card-1" onClick={() => openVideo('https://www.youtube.com/embed/dQw4w9WgXcQ')}>
              <div className="stories-card-thumbnail" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1537907690979-ee8e01276184?q=80&w=800')" }}></div>
              <div className="stories-card-overlay">
                <span className="stories-card-meta">October 2025 • Srinagar</span>
                <h4 className="stories-card-title">
                  Tamanna<br />& Dan
                </h4>
                <div className="stories-card-play"><span>&#9658;</span></div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="portfolio-card video-card stories-card stories-card-2" onClick={() => openVideo('https://www.youtube.com/embed/dQw4w9WgXcQ')}>
              <div className="stories-card-thumbnail" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800')" }}></div>
              <div className="stories-card-overlay">
                <span className="stories-card-meta">December 2025 • Rome</span>
                <h4 className="stories-card-title">
                  Reva<br />& Zach
                </h4>
                <div className="stories-card-play"><span>&#9658;</span></div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="portfolio-card video-card stories-card stories-card-3" onClick={() => openVideo('https://www.youtube.com/embed/dQw4w9WgXcQ')}>
              <div className="stories-card-thumbnail" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=800')" }}></div>
              <div className="stories-card-overlay">
                <span className="stories-card-meta">April 2025 • Mumbai</span>
                <h4 className="stories-card-title">
                  Alia<br />& Ranbir
                </h4>
                <div className="stories-card-play"><span>&#9658;</span></div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="portfolio-card video-card stories-card stories-card-4" onClick={() => openVideo('https://www.youtube.com/embed/dQw4w9WgXcQ')}>
              <div className="stories-card-thumbnail" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=800')" }}></div>
              <div className="stories-card-overlay">
                <span className="stories-card-meta">August 2025 • Jodhpur</span>
                <h4 className="stories-card-title">
                  Mona<br />& Ahmad
                </h4>
                <div className="stories-card-play"><span>&#9658;</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: PRESS MENTIONS STRIP */}
      <section className="section theme-white" style={{ paddingTop: '80px', paddingBottom: '80px', borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>
          <span className="text-uppercase letter-spacing-wide font-sans" style={{ fontSize: '0.7rem', color: 'var(--color-softgrey)', fontWeight: 600, letterSpacing: '0.2em' }}>Press & Covers</span>
          
          <div className="magazine-stand-wrapper">
            {/* Cover 1 */}
            <div className="magazine-cover-card">
              <div className="cover-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400')" }}></div>
              <div className="cover-overlay">
                <div className="cover-logo logo-vogue">VOGUE</div>
                <div>
                  <div className="cover-headline">Modern Romance</div>
                  <div className="cover-issue">Fall Edition</div>
                </div>
              </div>
            </div>

            {/* Cover 2 */}
            <div className="magazine-cover-card">
              <div className="cover-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=400')" }}></div>
              <div className="cover-overlay">
                <div className="cover-logo logo-bazaar">BAZAAR</div>
                <div>
                  <div className="cover-headline">The Style Issue</div>
                  <div className="cover-issue">Dec 2025</div>
                </div>
              </div>
            </div>

            {/* Cover 3 */}
            <div className="magazine-cover-card">
              <div className="cover-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400')" }}></div>
              <div className="cover-overlay">
                <div className="cover-logo logo-brides">Brides</div>
                <div>
                  <div className="cover-headline">Real Weddings</div>
                  <div className="cover-issue">Summer Issue</div>
                </div>
              </div>
            </div>

            {/* Cover 4 */}
            <div className="magazine-cover-card">
              <div className="cover-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=400')" }}></div>
              <div className="cover-overlay">
                <div className="cover-logo logo-elle">ELLE</div>
                <div>
                  <div className="cover-headline">New Luxury</div>
                  <div className="cover-issue">Annual 2026</div>
                </div>
              </div>
            </div>

            {/* Cover 5 */}
            <div className="magazine-cover-card">
              <div className="cover-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=400')" }}></div>
              <div className="cover-overlay">
                <div className="cover-logo logo-gq">GQ</div>
                <div>
                  <div className="cover-headline">Tailored Love</div>
                  <div className="cover-issue">Special Issue</div>
                </div>
              </div>
            </div>

            {/* Cover 6 */}
            <div className="magazine-cover-card">
              <div className="cover-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=400')" }}></div>
              <div className="cover-overlay">
                <div className="cover-logo logo-weddings">Wedding</div>
                <div>
                  <div className="cover-headline">The Collective</div>
                  <div className="cover-issue">US Edition</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: SUB-BRAND / EDITORIAL PROMO SECTION */}
      <section 
        className="section theme-black full-bleed fade-in-section" 
        style={{ 
          paddingTop: '180px', 
          paddingBottom: '180px', 
          backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1520854221256-17451cc35d53?q=80&w=1920')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center' 
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
          <h3 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Aura Fine-Art</h3>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', opacity: 0.9, fontWeight: 300, maxWidth: '600px' }}>
            Aura is our bespoke editorial sub-brand. We merge medium-format visual poetry with designer-curated setups, producing collector-grade legacy albums.
          </p>

          <div style={{ marginTop: '20px' }}>
            <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-white)', border: 'none', display: 'inline-block' }}>
              Explore Aura Fine-Art
            </a>
          </div>
        </div>
      </section>

      {/* Cinematic Video Lightbox Modal */}
      <VideoLightbox 
        isOpen={lightbox.isOpen} 
        videoUrl={lightbox.videoUrl} 
        onClose={closeVideo} 
      />
    </>
  );
}

export default Home;
