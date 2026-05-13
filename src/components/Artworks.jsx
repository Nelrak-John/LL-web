import React from 'react';

const Artworks = () => {
  const artworks = [
    { id: 1, title: 'Ethereal Dreams', image: '/images/artwork-1.jpg' },
    { id: 2, title: 'Digital Decay', image: '/images/artwork-2.jpg' },
    { id: 3, title: 'Neon Shadows', image: '/images/artwork-3.jpg' },
    { id: 4, title: 'Silent Echoes', image: '/images/artwork-4.jpg' },
    { id: 5, title: 'Fragments', image: '/images/artwork-5.jpg' },
    { id: 6, title: 'Void Walker', image: '/images/artwork-6.jpg' },
  ];

  return (
    <section className="artworks">
      <h1 className="artworks-title font-slogan">Artworks</h1>
      <div className="artworks-grid">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="artwork-item">
            <img
              src={artwork.image}
              alt={artwork.title}
              className="artwork-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Artworks;
