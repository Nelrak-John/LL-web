import React, { useState, useRef, useEffect } from 'react';

const Artworks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);

  const artworks = [
    {
      id: 1,
      artist: 'KARLEN',
      title: 'BANG',
      image: '/images/artworks/KRLN-BANG.jpg',
      releaseDate: '2025.11.06',
      credits: 'Art Direction by KARLEN',
      type: 'Single'
    },
    {
      id: 2,
      artist: 'KARLEN',
      title: 'KRLNCIAGA',
      image: '/images/artworks/KRLN-KRLNCIAGA.jpg',
      releaseDate: '2025.06.16',
      credits: 'Art Direction by KARLEN',
      type: 'Single'
    },
    {
      id: 3,
      artist: 'KARLEN',
      title: 'Lost',
      image: '/images/artworks/KRLN-Lost.jpg',
      releaseDate: '2025.12.18',
      credits: 'Art Direction by KARLEN',
      type: 'Single'
    },
    {
      id: 4,
      artist: 'KARLEN',
      title: 'Virgil Abloh',
      image: '/images/artworks/KRLN-Virgil Abloh.jpg',
      releaseDate: '2024.08.19',
      credits: 'Art Direction by KARLEN',
      type: 'single'
    },
    {
      id: 5,
      artist: 'Poloet',
      title: 'Lilac',
      image: '/images/artworks/P-Lilac.jpg',
      releaseDate: '2025.11.21',
      credits:'Art Direction by KARLEN & Poloet',
      type: 'single'
    },
    {
      id: 6,
      artist: 'Poloet',
      title: 'Paran',
      image: '/images/artworks/P-Paran.jpg',
      releaseDate: '2025.04.16',
      credits: 'Art Direction by KARLEN & Poloet',
      type: 'Double Single'
    },
    {
      id: 7,
      artist: 'Poloet',
      title: '재',
      image: '/images/artworks/P-재.jpg',
      releaseDate: '2024.07.19',
      credits:'Art Direction by KARLEN',
      type: 'single'
    },
    {
      id: 8,
      artist: 'Poloet',
      title: '초련',
      image: '/images/artworks/P-초련.jpg',
      releaseDate: '2026.05.20',
      credits:'Art Direction by KARLEN & Poloet',
      type:'single'
    },
    {
      id: 9,
      artist: 'KARLEN',
      title: 'DRILLNNT',
      image: '/images/artworks/KRLN-DRILLNNT.jpg',
      releaseDate: '2023.05.22',
      credits: 'Art Direction by KARLEN',
      type: 'EP'
    },
    {
      id: 10,
      artist: 'Poloet',
      title: '순애',
      image: '/images/artworks/P-순애.jpg',
      releaseDate: '2023.08.14',
      credits: 'Art Direction by KARLEN & Poloet',
      type: 'Single'
    },
    {
      id: 11,
      artist: 'KARLEN',
      title: 'WAY',
      image: '/images/artworks/KRLN-WAY.jpg',
      releaseDate: '2024.02.27',
      credits: 'Art Direction by KARLEN',
      type: 'Single'
    },
    {
      id: 12,
      artist: 'Poloet',
      title: 'Only you',
      image: '/images/artworks/P-Only you.jpg',
      releaseDate: '2024.04.02',
      credits: 'Art Direction by KARLEN & Poloet',
      type: 'Single'
    },
  ].sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));

  // 정렬 확인용 콘솔 로그
  useEffect(() => {
    console.log('Artworks sorted by release date (newest first):');
    artworks.forEach((artwork, index) => {
      console.log(`${index + 1}. ${artwork.title} - ${artwork.releaseDate}`);
    });
  }, []);

  // 모바일 환경 감지
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth <= 768;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getSlideWidth = () => {
    if (carouselRef.current && carouselRef.current.children[0]) {
      return carouselRef.current.children[0].offsetWidth;
    }
    return 600; // fallback
  };

  const goToSlide = (index) => {
    if (isMoving) return;
    setIsMoving(true);
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

        // 스크롤 완료 후 isMoving 해제
        setTimeout(() => {
          setIsMoving(false);
        }, 600);
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
    // 모바일에서는 walk 속도를 줄여서 비율 왜곡 방지
    const walk = (x - startX) * (isMobile ? 1 : 2);
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
      // 모바일이 아닐 때만 마우스 이벤트 리스너 추가
      if (!isMobile) {
        carousel.addEventListener('mousedown', handleMouseDown);
        carousel.addEventListener('mousemove', handleMouseMove);
        carousel.addEventListener('mouseup', handleMouseUp);
        carousel.addEventListener('mouseleave', handleMouseUp);
      }
      // 모바일에서만 터치 이벤트 리스너 추가
      if (isMobile) {
        carousel.addEventListener('touchstart', handleTouchStart);
        carousel.addEventListener('touchmove', handleTouchMove);
        carousel.addEventListener('touchend', handleTouchEnd);
      }
    }
    return () => {
      if (carousel) {
        if (!isMobile) {
          carousel.removeEventListener('mousedown', handleMouseDown);
          carousel.removeEventListener('mousemove', handleMouseMove);
          carousel.removeEventListener('mouseup', handleMouseUp);
          carousel.removeEventListener('mouseleave', handleMouseUp);
        }
        if (isMobile) {
          carousel.removeEventListener('touchstart', handleTouchStart);
          carousel.removeEventListener('touchmove', handleTouchMove);
          carousel.removeEventListener('touchend', handleTouchEnd);
        }
      }
    };
  }, [isMobile]);

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
      <h1 className="artworks-title font-slogan">Projects</h1>
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
            onMouseEnter={() => {
              // 모바일 환경이면 마그네틱 호버 기능 완전 비활성화
              if (!isMobile && index !== currentIndex && !isMoving) {
                goToSlide(index);
              }
            }}
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
                {artwork.type && (
                  <p className="carousel-type font-body">
                    <span className="detail-label">Type:</span> {artwork.type}
                  </p>
                )}
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
