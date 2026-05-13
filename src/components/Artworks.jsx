import React from 'react';

const Artworks = () => {
  const artworks = [
    { id: 1, artist: 'KARLEN', title: 'BANG', image: '/images/artworks/KRLN-BANG.jpg' },
    { id: 2, artist: 'KARLEN', title: 'KRLNCIAGA', image: '/images/artworks/KRLN-KRLNCIAGA.jpg' },
    { id: 3, artist: 'KARLEN', title: 'Lost', image: '/images/artworks/KRLN-Lost.jpg' },
    { id: 4, artist: 'KARLEN', title: 'Virgil Abloh', image: '/images/artworks/KRLN-Virgil Abloh.jpg' },
    { id: 5, artist: 'Poloet', title: 'Lilac', image: '/images/artworks/P-Lilac.jpg' },
    { id: 6, artist: 'Poloet', title: 'Paran', image: '/images/artworks/P-Paran.jpg' },
    { id: 7, artist: 'Poloet', title: '재', image: '/images/artworks/P-재.jpg' },
    { id: 8, artist: 'Poloet', title: '초련(520)', image: '/images/artworks/P-초련(520).jpg' },
  ];

  return (
    <section className="artworks">
      <h1 className="artworks-title font-slogan">Archive</h1>
      <div className="artworks-grid">
        {artworks.map((artwork, index) => (
          <div 
            key={artwork.id} 
            className="artwork-item"
            style={{
              transform: `translate(${(index % 3) * 10}px, ${(index % 2) * 15}px)`,
            }}
            onTouchStart={(e) => {
              e.currentTarget.style.transform = `translate(${(index % 3) * 10}px, ${(index % 2) * 15}px) scale(1.02)`;
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.transform = `translate(${(index % 3) * 10}px, ${(index % 2) * 15}px) scale(1)`;
            }}
          >
            <img
              src={artwork.image}
              alt={artwork.title}
              className="artwork-image"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
              onTouchStart={(e) => e.preventDefault()}
              style={{ pointerEvents: 'none' }}
            />
            <div className="artwork-info">
              <p className="artwork-artist font-body">{artwork.artist}</p>
              <p className="artwork-title font-body">{artwork.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Artworks;
