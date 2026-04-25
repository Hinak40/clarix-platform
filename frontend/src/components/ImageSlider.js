import React, { useEffect, useState } from 'react';

function ImageSlider({ images, height = '400px' }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div style={{ ...styles.container, height }}>
      {images.map((img, i) => (
        <div
          key={i}
          style={{
            ...styles.slide,
            backgroundImage: `url(${img.url})`,
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0
          }}
        >
          <div style={styles.overlay}>
            {img.title && <h2 style={styles.title}>{img.title}</h2>}
            {img.subtitle && <p style={styles.subtitle}>{img.subtitle}</p>}
          </div>
        </div>
      ))}

      {/* Dots */}
      <div style={styles.dots}>
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              ...styles.dot,
              width: i === current ? '28px' : '8px',
              backgroundColor: i === current ? '#6366f1' : 'rgba(255,255,255,0.3)'
            }}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => setCurrent(prev => (prev - 1 + images.length) % images.length)}
        style={{ ...styles.arrow, left: '20px' }}
      >‹</button>
      <button
        onClick={() => setCurrent(prev => (prev + 1) % images.length)}
        style={{ ...styles.arrow, right: '20px' }}
      >›</button>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    borderRadius: '16px'
  },
  slide: {
    position: 'absolute',
    top: 0, left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'opacity 0.8s ease'
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(8,12,20,0.55)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '20px'
  },
  title: {
    color: 'white',
    fontSize: '32px',
    fontWeight: '800',
    marginBottom: '10px',
    letterSpacing: '-0.5px'
  },
  subtitle: {
    color: '#94a3b8',
    fontSize: '16px'
  },
  dots: {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    zIndex: 10
  },
  dot: {
    height: '8px',
    borderRadius: '4px',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  arrow: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(99,102,241,0.8)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    fontSize: '22px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    cursor: 'pointer'
  }
};

export default ImageSlider;