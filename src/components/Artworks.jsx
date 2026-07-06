import React, { useState, useRef, useEffect } from 'react';

const Artworks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

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
      title: '초련',
      image: '/images/artworks/P-초련(520).jpg',
      releaseDate: '2024.08',
      credits: 'Art Direction: Poloet'
    },
  ];

  const getSlideWidth = () => {
    if (carouselRef.current && carouselRef.current.children[0]) {
      return carouselRef.current.children[0].offsetWidth;
    }
    return 600; // fallback
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const slides = carousel.querySelectorAll('.carousel-slide-wrapper');
      const targetSlide = slides[index];
      
      if (targetSlide) {
        const slideCenter = targetSlide.offsetLeft + targetSlide.offsetWidth / 2;
        const carouselCenter = carousel.offsetWidth / 2;
        const scrollPosition = slideCenter - carouselCenter;
        
        carousel.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    snapToNearestSlide();
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    snapToNearestSlide();
  };

  const snapToNearestSlide = () => {
    if (carouselRef.current) {
      const slideWidth = getSlideWidth();
      const scrollPosition = carouselRef.current.scrollLeft;
      const newIndex = Math.round(scrollPosition / slideWidth);
      goToSlide(Math.max(0, Math.min(newIndex, artworks.length - 1)));
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('mousedown', handleMouseDown);
      carousel.addEventListener('mousemove', handleMouseMove);
      carousel.addEventListener('mouseup', handleMouseUp);
      carousel.addEventListener('mouseleave', handleMouseUp);
      carousel.addEventListener('touchstart', handleTouchStart);
      carousel.addEventListener('touchmove', handleTouchMove);
      carousel.addEventListener('touchend', handleTouchEnd);
    }
    return () => {
      if (carousel) {
        carousel.removeEventListener('mousedown', handleMouseDown);
        carousel.removeEventListener('mousemove', handleMouseMove);
        carousel.removeEventListener('mouseup', handleMouseUp);
        carousel.removeEventListener('mouseleave', handleMouseUp);
        carousel.removeEventListener('touchstart', handleTouchStart);
        carousel.removeEventListener('touchmove', handleTouchMove);
        carousel.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, []);

  // Scroll-based detection for centered slide
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const carouselCenter = carousel.scrollLeft + carousel.offsetWidth / 2;
      const slides = carousel.querySelectorAll('.carousel-slide-wrapper');
      
      let closestIndex = 0;
      let closestDistance = Infinity;

      slides.forEach((slide, index) => {
        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
        const distance = Math.abs(carouselCenter - slideCenter);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setCurrentIndex(closestIndex);
    };

    carousel.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    return () => {
      carousel.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="artworks">
      <h1 className="artworks-title font-slogan">Archive</h1>
      <div 
        className="carousel-scroll-container"
        ref={carouselRef}
      >
        {artworks.map((artwork, index) => (
          <div 
            key={artwork.id} 
            data-index={index}
            className={`carousel-slide-wrapper ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          >
            <div className="carousel-slide">
              <img
                src={artwork.image}
                alt={artwork.title}
                className="carousel-image"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
            <div className="carousel-info">
              <h2 className="carousel-title font-body">{artwork.title}</h2>
              <p className="carousel-artist font-body">{artwork.artist}</p>
              <div className="carousel-details">
                <p className="carousel-release-date font-body">
                  <span className="detail-label">Release:</span> {artwork.releaseDate}
                </p>
                <p className="carousel-credits font-body">
                  <span className="detail-label">Credits:</span> {artwork.credits}
                </p>
              </div>
            </div>
          </div>
        ))}
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
