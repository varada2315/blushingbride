import React, { useState } from 'react';
import VideoLightbox from '../VideoLightbox';

function Portfolio() {
  const [activeTab, setActiveTab] = useState('photography');
  const [lightbox, setLightbox] = useState({ isOpen: false, videoUrl: '' });

  const openVideo = (url) => {
    setLightbox({ isOpen: true, videoUrl: url });
  };

  const closeVideo = () => {
    setLightbox({ isOpen: false, videoUrl: '' });
  };

  return (
    <>
      {/* HERO COVER */}
      <section className="section theme-black" style={{ paddingTop: 'clamp(100px, 15vw, 150px)', paddingBottom: '60px', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', color: 'var(--color-white)', marginBottom: '10px' }}>Our Portfolio</h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--color-cream)' }}>
            Visual legacies of human unions
          </p>
        </div>
      </section>

      {/* TABS & GALLERIES */}
      <section className="section theme-black" style={{ paddingTop: 0 }}>
        <div className="container">
          
          {/* Filter Tabs */}
          <div className="portfolio-tabs-container">
            <button 
              className={`portfolio-tab ${activeTab === 'photography' ? 'active' : ''}`} 
              onClick={() => setActiveTab('photography')}
            >
              Photography
            </button>
            <button 
              className={`portfolio-tab ${activeTab === 'films' ? 'active' : ''}`} 
              onClick={() => setActiveTab('films')}
            >
              Films
            </button>
          </div>

          {/* PHOTOGRAPHY GALLERY TAB */}
          <div className={`portfolio-gallery-section ${activeTab === 'photography' ? 'active' : ''}`}>
            <div className="grid-3">
              {/* Card 1 */}
              <div className="portfolio-card">
                <div className="img-zoom-wrapper portfolio-card-img">
                  <img src="https://images.unsplash.com/photo-1537907690979-ee8e01276184?q=80&w=600" alt="Sangeeta & Jake" />
                </div>
                <div className="portfolio-card-info">
                  <h4 className="portfolio-card-title">Sangeeta & Jake</h4>
                  <p className="portfolio-card-desc">Wiltshire, United Kingdom . Fusion of English Countryside charm & rich Indian rituals.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="portfolio-card">
                <div className="img-zoom-wrapper portfolio-card-img">
                  <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600" alt="Reva & Zach" />
                </div>
                <div className="portfolio-card-info">
                  <h4 className="portfolio-card-title">Reva & Zach</h4>
                  <p className="portfolio-card-desc">Rome, Italy . Historic stone churches and golden hour couple shoot across the Colosseum.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="portfolio-card">
                <div className="img-zoom-wrapper portfolio-card-img">
                  <img src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=600" alt="Ayush & Shruti" />
                </div>
                <div className="portfolio-card-info">
                  <h4 className="portfolio-card-title">Ayush & Shruti</h4>
                  <p className="portfolio-card-desc">Singapore . Intimate heritage temple vows and glamorous rooftop high-fashion party.</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="portfolio-card">
                <div className="img-zoom-wrapper portfolio-card-img">
                  <img src="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=600" alt="Alia & Ranbir" />
                </div>
                <div className="portfolio-card-info">
                  <h4 className="portfolio-card-title">Alia & Ranbir</h4>
                  <p className="portfolio-card-desc">Mumbai, India . Intimate apartment balcony wedding surrounded by marigolds and sunlight.</p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="portfolio-card">
                <div className="img-zoom-wrapper portfolio-card-img">
                  <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600" alt="Kiara & Sidharth" />
                </div>
                <div className="portfolio-card-info">
                  <h4 className="portfolio-card-title">Kiara & Sidharth</h4>
                  <p className="portfolio-card-desc">Jaisalmer, India . Royal palace luxury wedding, pink-themed floral dome decor.</p>
                </div>
              </div>

              {/* Card 6 */}
              <div className="portfolio-card">
                <div className="img-zoom-wrapper portfolio-card-img">
                  <img src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=600" alt="Joanna & Matt" />
                </div>
                <div className="portfolio-card-info">
                  <h4 className="portfolio-card-title">Joanna & Matt</h4>
                  <p className="portfolio-card-desc">Phuket, Thailand . Serene seaside altar vows, tropical sunset and pastel theme.</p>
                </div>
              </div>

              {/* Card 7 */}
              <div className="portfolio-card">
                <div className="img-zoom-wrapper portfolio-card-img">
                  <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=600" alt="Raina & Darshan" />
                </div>
                <div className="portfolio-card-info">
                  <h4 className="portfolio-card-title">Raina & Darshan</h4>
                  <p className="portfolio-card-desc">Athens, Greece . Cliffside Aegean vows, chic white dress codes and open-sky dinner.</p>
                </div>
              </div>

              {/* Card 8 */}
              <div className="portfolio-card">
                <div className="img-zoom-wrapper portfolio-card-img">
                  <img src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=600" alt="Arpita & Kunal" />
                </div>
                <div className="portfolio-card-info">
                  <h4 className="portfolio-card-title">Arpita & Kunal</h4>
                  <p className="portfolio-card-desc">Mumbai, India . High-profile designer union, monochrome ivory aesthetics.</p>
                </div>
              </div>

              {/* Card 9 */}
              <div className="portfolio-card">
                <div className="img-zoom-wrapper portfolio-card-img">
                  <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=600" alt="Ananya & Jahan" />
                </div>
                <div className="portfolio-card-info">
                  <h4 className="portfolio-card-title">Ananya & Jahan</h4>
                  <p className="portfolio-card-desc">Delhi, India . Heritage family mansion backyard wedding, intimate and traditional.</p>
                </div>
              </div>

              {/* Card 10 */}
              <div className="portfolio-card">
                <div className="img-zoom-wrapper portfolio-card-img">
                  <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600" alt="Meghna & Karan" />
                </div>
                <div className="portfolio-card-info">
                  <h4 className="portfolio-card-title">Meghna & Karan</h4>
                  <p className="portfolio-card-desc">Mumbai, India . Intimate vintage bungalow wedding with old Bombay aesthetic.</p>
                </div>
              </div>

              {/* Card 11 */}
              <div className="portfolio-card">
                <div className="img-zoom-wrapper portfolio-card-img">
                  <img src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=600" alt="Mona & Ahmad" />
                </div>
                <div className="portfolio-card-info">
                  <h4 className="portfolio-card-title">Mona & Ahmad</h4>
                  <p className="portfolio-card-desc">Dubai, UAE . Breathtaking desert dune sunset ceremony and starry sky dinner.</p>
                </div>
              </div>

              {/* Card 12 */}
              <div className="portfolio-card">
                <div className="img-zoom-wrapper portfolio-card-img">
                  <img src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600" alt="Alya & Yahia" />
                </div>
                <div className="portfolio-card-info">
                  <h4 className="portfolio-card-title">Alya & Yahia</h4>
                  <p className="portfolio-card-desc">Dubai, UAE . Luxury beach resort ceremony under tropical foliage arches.</p>
                </div>
              </div>
            </div>
          </div>

          {/* FILMS GALLERY TAB */}
          <div className={`portfolio-gallery-section ${activeTab === 'films' ? 'active' : ''}`}>
            <div className="grid-2" style={{ gap: '50px' }}>
              {/* Film 1 */}
              <div className="portfolio-card video-card" onClick={() => openVideo('https://www.youtube.com/embed/dQw4w9WgXcQ')}>
                <div className="video-card-thumbnail" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="video-card-overlay">
                  <div className="video-play-btn">
                    <span>&#9658;</span>
                  </div>
                </div>
                <div className="portfolio-card-info" style={{ marginTop: '15px' }}>
                  <h4 className="portfolio-card-title">Akbar & Hiba . The Vows</h4>
                  <p className="portfolio-card-desc">Award-Winning Film. A cinematic treatise on breaking taboos and finding love a second time around.</p>
                </div>
              </div>

              {/* Film 2 */}
              <div className="portfolio-card video-card" onClick={() => openVideo('https://www.youtube.com/embed/dQw4w9WgXcQ')}>
                <div className="video-card-thumbnail" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="video-card-overlay">
                  <div className="video-play-btn">
                    <span>&#9658;</span>
                  </div>
                </div>
                <div className="portfolio-card-info" style={{ marginTop: '15px' }}>
                  <h4 className="portfolio-card-title">Zina & Zain . Kashmir</h4>
                  <p className="portfolio-card-desc">Srinagar, India . A dreamy, slow-paced visual poem shot in the mist-covered valleys of Kashmir.</p>
                </div>
              </div>

              {/* Film 3 */}
              <div className="portfolio-card video-card" onClick={() => openVideo('https://www.youtube.com/embed/dQw4w9WgXcQ')}>
                <div className="video-card-thumbnail" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=600')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="video-card-overlay">
                  <div className="video-play-btn">
                    <span>&#9658;</span>
                  </div>
                </div>
                <div className="portfolio-card-info" style={{ marginTop: '15px' }}>
                  <h4 className="portfolio-card-title">Rhea & Divish . The Afterparty</h4>
                  <p className="portfolio-card-desc">Udaipur, India . High-octane party montage featuring raw energy, neon lights, and absolute fun.</p>
                </div>
              </div>

              {/* Film 4 */}
              <div className="portfolio-card video-card" onClick={() => openVideo('https://www.youtube.com/embed/dQw4w9WgXcQ')}>
                <div className="video-card-thumbnail" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="video-card-overlay">
                  <div className="video-play-btn">
                    <span>&#9658;</span>
                  </div>
                </div>
                <div className="portfolio-card-info" style={{ marginTop: '15px' }}>
                  <h4 className="portfolio-card-title">Anushka & Shilp . Jaipur</h4>
                  <p className="portfolio-card-desc">Jaipur, India . A grand, cinematic visual piece capturing the symmetry of Pink City palaces and royal heritage.</p>
                </div>
              </div>

              {/* Film 5 */}
              <div className="portfolio-card video-card" onClick={() => openVideo('https://www.youtube.com/embed/dQw4w9WgXcQ')}>
                <div className="video-card-thumbnail" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=600')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="video-card-overlay">
                  <div className="video-play-btn">
                    <span>&#9658;</span>
                  </div>
                </div>
                <div className="portfolio-card-info" style={{ marginTop: '15px' }}>
                  <h4 className="portfolio-card-title">Sachi & Aayush . Skyline Vows</h4>
                  <p className="portfolio-card-desc">Marina Bay, Singapore . Visual narrative celebrating wedding vows set against a dramatic urban skyline.</p>
                </div>
              </div>

              {/* Film 6 */}
              <div className="portfolio-card video-card" onClick={() => openVideo('https://www.youtube.com/embed/dQw4w9WgXcQ')}>
                <div className="video-card-thumbnail" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="video-card-overlay">
                  <div className="video-play-btn">
                    <span>&#9658;</span>
                  </div>
                </div>
                <div className="portfolio-card-info" style={{ marginTop: '15px' }}>
                  <h4 className="portfolio-card-title">Behind The Scenes . Jodhpur</h4>
                  <p className="portfolio-card-desc">Jodhpur, India . A visual documentary showcasing the Blushing Bride crew framing moments, lighting, and directing couples.</p>
                </div>
              </div>
            </div>
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

export default Portfolio;
