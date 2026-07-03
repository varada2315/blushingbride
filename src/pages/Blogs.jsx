import React from 'react';

function Blogs() {
  const posts = [
    {
      id: 1,
      date: 'October 12, 2025',
      title: 'Introduce Yourself',
      excerpt: "Welcome to our new journal. I wanted to start by introducing myself and sharing what drives this collective of photographers and videographers. At House on the Clouds, we believe that wedding photography shouldn't feel like a factory line...",
      img: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800'
    },
    {
      id: 2,
      date: 'September 28, 2025',
      title: 'Zina & Zain',
      excerpt: 'From floating shikaras on Dal Lake to traditional Kashmiri rituals under chinar trees, Zina and Zain\'s wedding was a dream to witness and document. We focused on capturing the soft morning mist, the rich embroidery of their traditional garbs, and the quiet intimacy of their vows...',
      img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800'
    },
    {
      id: 3,
      date: 'August 14, 2025',
      title: 'Rhea & Divish',
      excerpt: 'If you think royal weddings have to be quiet and formal, think again. Rhea and Divish wanted absolute madness, and Udaipur did not disappoint. We documented three days of high-octane dancing, colorful holi parties, and a glamorous candle-lit reception that went on until dawn...',
      img: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800'
    },
    {
      id: 4,
      date: 'July 05, 2025',
      title: 'Alya & Yahia',
      excerpt: 'A breathtaking desert dune sunset ceremony in Dubai, followed by an intimate candle-lit dinner under the stars. The vast expanse of the red sands and the shifting wind created a stunning backdrop for their vows, allowing us to experiment with shadow and dramatic silhouettes...',
      img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800'
    },
    {
      id: 5,
      date: 'June 19, 2025',
      title: 'Behind the Scenes',
      excerpt: 'A look back at our 3-day wedding cinematography workshop in Jodhpur. Siddharth Sharma and our core directors guided young photographers on how we frame moments, manage lighting, direct couples, and grade films to achieve the distinct House on the Clouds aesthetic...',
      img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800'
    }
  ];

  return (
    <>
      {/* HERO COVER */}
      <section className="section theme-white" style={{ paddingTop: '150px', paddingBottom: '60px', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '4rem', color: 'var(--color-black)', marginBottom: '10px' }}>Our Journal</h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: '#8c7f75' }}>
            Behind the frames, stories, and journeys
          </p>
        </div>
      </section>

      {/* BLOG LIST */}
      <section className="section theme-white" style={{ paddingTop: '20px', paddingBottom: '120px' }}>
        <div className="container">
          <div className="blog-list">
            {posts.map((post) => (
              <div className="blog-post-row fade-in-section" key={post.id}>
                <div className="blog-img-column img-zoom-wrapper" style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.03)' }}>
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                <div className="blog-text-column">
                  <span className="blog-date">{post.date}</span>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <a href="#" className="blog-read-more" onClick={(e) => e.preventDefault()}>Read Story</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
