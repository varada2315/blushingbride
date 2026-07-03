import React from 'react';

function OurStory() {
  return (
    <>
      {/* HERO COVER */}
      <section className="section theme-white" style={{ paddingTop: '150px', paddingBottom: '60px', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '4rem', color: 'var(--color-black)', marginBottom: '10px' }}>Our Story</h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: '#8c7f75' }}>
            Behind the lenses of Blushing Bride
          </p>
        </div>
      </section>

      {/* FOUNDER & VISION SECTION */}
      <section className="section theme-white fade-in-section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '80px' }}>
            {/* Left: Text */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <h3 style={{ fontSize: '3rem', lineHeight: 1.1, fontStyle: 'italic' }}>
                "We don't capture events. We preserve the wind, the laughter, and the quiet spaces between."
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: '1.8', opacity: 0.8, fontWeight: 300, color: 'var(--color-text-dark)' }}>
                Blushing Bride Studios was founded in 2015 by Aiden Cole with a simple, disruptive vision: to strip away the stiff, traditional poses of wedding photography and replace them with raw, cinematic truth.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: '1.8', opacity: 0.8, fontWeight: 300, color: 'var(--color-text-dark)' }}>
                What started as a small collective of artists in Bangalore has since grown into an award-winning team of photographers, cinematographers, and directors based out of Mumbai and Bangalore. Together, we have traveled to over 20 countries, capturing the unions of rule-breakers, adventurers, and lovers.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: '1.8', opacity: 0.8, fontWeight: 300, color: 'var(--color-text-dark)' }}>
                We treat every wedding as a feature film – complete with its own color grading, score, and storytelling arc. We believe that your story is unlike any other, and your visual legacy should reflect that.
              </p>
            </div>
            
            {/* Right: Founder Portrait */}
            <div className="img-zoom-wrapper" style={{ aspectRatio: '4/5', boxShadow: '0 20px 40px rgba(0,0,0,0.06)', backgroundColor: '#f7f7f7' }}>
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800" alt="Aiden Cole Founder of Blushing Bride Studios" />
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES / PHILOSOPHY */}
      <section className="section theme-cream fade-in-section" style={{ marginTop: '80px', padding: '100px 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '3rem', marginBottom: '10px' }}>Our Philosophy</h3>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#8c7f75' }}>The pillars of our artistry</p>
          </div>

          <div className="grid-3">
            {/* Pillar 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'center', padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.5">
                  <path d="M12 21a9 9 0 100-18 9 9 0 000 18z"/><path d="M12 7v10M7 12h10"/>
                </svg>
              </div>
              <h4 style={{ fontSize: '1.6rem' }}>The Wild Ones</h4>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', opacity: 0.75, fontWeight: 300, lineHeight: 1.7 }}>
                We cater to the modern, new-age couple. The ones who aren't afraid to run barefoot in the rain, exchange vows on a cliffside, and dance until dawn.
              </p>
            </div>

            {/* Pillar 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'center', padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10zM2 12h20"/>
                </svg>
              </div>
              <h4 style={{ fontSize: '1.6rem' }}>The Storytellers</h4>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', opacity: 0.75, fontWeight: 300, lineHeight: 1.7 }}>
                We look for the subtext. The silent glance from a parent, the nervous laughter, the tight hugs. These candid frames hold the true narrative of the day.
              </p>
            </div>

            {/* Pillar 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'center', padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.5">
                  <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>
                </svg>
              </div>
              <h4 style={{ fontSize: '1.6rem' }}>Fine Art Editorial</h4>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', opacity: 0.75, fontWeight: 300, lineHeight: 1.7 }}>
                We merge photojournalism with high-fashion lighting and poses. The result is a premium gallery that looks elegant, clean, and worthy of publication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BEHIND THE SCENES SHOWCASE */}
      <section className="section theme-white fade-in-section" style={{ paddingTop: '100px' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '3rem' }}>Behind The Scenes</h3>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.6 }}>
              Our team at work across the globe
            </p>
          </div>

          <div className="grid-3">
            <div className="img-zoom-wrapper" style={{ aspectRatio: '4/5', boxShadow: '0 10px 20px rgba(0,0,0,0.04)' }}>
              <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=600" alt="Photographer holding camera at wedding" />
            </div>

            <div className="img-zoom-wrapper" style={{ aspectRatio: '4/5', boxShadow: '0 10px 20px rgba(0,0,0,0.04)' }}>
              <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600" alt="Cinematographer lens and tripod setup" />
            </div>

            <div className="img-zoom-wrapper" style={{ aspectRatio: '4/5', boxShadow: '0 10px 20px rgba(0,0,0,0.04)' }}>
              <img src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=600" alt="Video editor checking wedding film timeline" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurStory;
