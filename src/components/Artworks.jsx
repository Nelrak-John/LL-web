import React, { useState } from 'react';

const Artworks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const artworks = [
    {
      id: 1,
      artist: 'KARLEN',
      title: 'BANG',
      image: '/images/artworks/KRLN-BANG.jpg',
      releaseDate: '2024.01',
      credits: 'Art Direction: KARLEN'
    },
    {
      id: 2,
      artist: 'KARLEN',
      title: 'KRLNCIAGA',
      image: '/images/artworks/KRLN-KRLNCIAGA.jpg',
      releaseDate: '2024.02',
      credits: 'Art Direction: KARLEN'
    },
    {
      id: 3,
      artist: 'KARLEN',
      title: 'Lost',
      image: '/images/artworks/KRLN-Lost.jpg',
      releaseDate: '2024.03',
      credits: 'Art Direction: KARLEN'
    },
    {
      id: 4,
      artist: 'KARLEN',
      title: 'Virgil Abloh',
      image: '/images/artworks/KRLN-Virgil Abloh.jpg',
      releaseDate: '2024.04',
      credits: 'Art Direction: KARLEN'
    },
    {
      id: 5,
      artist: 'Poloet',
      title: 'Lilac',
      image: '/images/artworks/P-Lilac.jpg',
      releaseDate: '2024.05',
      credits: 'Art Direction: Poloet'
    },
    {
      id: 6,
      artist: 'Poloet',
      title: 'Paran',
      image: '/images/artworks/P-Paran.jpg',
      releaseDate: '2024.06',
      credits: 'Art Direction: Poloet'
    },
    {
      id: 7,
      artist: 'Poloet',
      title: '재',
      image: '/images/artworks/P-재.jpg',
      releaseDate: '2024.07',
      credits: 'Art Direction: Poloet'
    },
    {
      id: 8,
      artist: 'Poloet',
      title: '초련(520)',
      image: '/images/artworks/P-초련(520).jpg',
      releaseDate: '2024.08',
      credits: 'Art Direction: Poloet'
    },
  ];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? artworks.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === artworks.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="artworks">
      <h1 className="artworks-title font-slogan">Archive</h1>
      <div className="carousel-container">
        <button className="carousel-nav carousel-nav-prev" onClick={goToPrevious}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="carousel-content">
          <div className="carousel-slide">
            <img
              src={artworks[currentIndex].image}
              alt={artworks[currentIndex].title}
              className="carousel-image"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
          
          <div className="carousel-info">
            <h2 className="carousel-title font-body">{artworks[currentIndex].title}</h2>
            <p className="carousel-artist font-body">{artworks[currentIndex].artist}</p>
            <div className="carousel-details">
              <p className="carousel-release-date font-body">
                <span className="detail-label">Release:</span> {artworks[currentIndex].releaseDate}
              </p>
              <p className="carousel-credits font-body">
                <span className="detail-label">Credits:</span> {artworks[currentIndex].credits}
              </p>
            </div>
          </div>
        </div>
        
        <button className="carousel-nav carousel-nav-next" onClick={goToNext}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      <div className="carousel-pagination">
        {artworks.map((_, index) => (
          <button
            key={index}
            className={`pagination-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Artworks;
