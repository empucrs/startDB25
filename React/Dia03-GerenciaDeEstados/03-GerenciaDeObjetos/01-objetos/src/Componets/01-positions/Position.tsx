import { useState } from 'react';

interface Position {
  x: number;
  y: number;
}

export default function Position() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        cursor: 'crosshair',
        overflow: 'hidden',
      }}
    >
      {/* O pontinho que segue o mouse */}
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#ff3366',
          borderRadius: '50%',
          transform: `translate(${position.x - 25}px, ${position.y - 25}px)`,
          left: 0,
          top: 0,
          width: 50,
          height: 50,
          pointerEvents: 'none', // importante: não bloqueia o evento do pai
          boxShadow: '0 0 30px rgba(255, 51, 102, 0.8), 0 0 60px rgba(255, 255, 255, 0.4)',
          transition: 'transform 0.1s ease-out',
          border: '4px solid white',
        }}
      />

      {/* Texto de boas-vindas */}
      <div
        style={{
          position: 'absolute',
          top: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          fontFamily: '"Segoe UI", Arial, sans-serif',
          textShadow: '3px 3px 10px rgba(0,0,0,0.6)',
          pointerEvents: 'none',
        }}
      >
        Mova o mouse e veja a mágica!
      </div>
    </div>
  );
}