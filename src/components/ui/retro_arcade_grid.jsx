// components/RetroArcadeGrid.js
import React, { useEffect, useRef } from 'react';

const RetroArcadeGrid = ({ darkMode }) => {
  const canvasRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const draw = () => {
      const width = canvas.width;
      const height = canvas.height;
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Update time
      timeRef.current += 0.02;
      
      // Grid settings
      const gridSize = 40;
      const perspective = 0.8;
      const horizonY = height * 0.4;
      
      // Colors based on theme
      const primaryColor = darkMode ? '#00ffff' : '#ff00ff';
      const secondaryColor = darkMode ? '#0088ff' : '#8800ff';
      const accentColor = darkMode ? '#ff0088' : '#ff8800';
      
      // Draw perspective grid
      ctx.save();
      
      // Vertical lines (going into distance)
      for (let x = -width; x <= width * 2; x += gridSize) {
        const intensity = Math.sin(timeRef.current + x * 0.01) * 0.3 + 0.7;
        const alpha = Math.max(0.1, intensity);
        
        ctx.strokeStyle = `${primaryColor}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = intensity > 0.8 ? 2 : 1;
        
        ctx.beginPath();
        
        const topX = x + Math.sin(timeRef.current * 0.5 + x * 0.02) * 20;
        ctx.moveTo(topX, horizonY);
        
        const bottomX = x + (x - width/2) * perspective;
        ctx.lineTo(bottomX, height);
        
        ctx.stroke();
      }
      
      // Horizontal lines (distance rings)
      for (let i = 0; i < 15; i++) {
        const y = horizonY + (i * i * 8) + Math.sin(timeRef.current * 2 + i) * 5;
        if (y > height) break;
        
        const distance = (y - horizonY) / (height - horizonY);
        const intensity = Math.sin(timeRef.current * 1.5 + i * 0.5) * 0.4 + 0.6;
        const alpha = Math.max(0.05, intensity * (1 - distance * 0.8));
        
        const color = i % 3 === 0 ? accentColor : secondaryColor;
        ctx.strokeStyle = `${color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = intensity > 0.8 ? 2 : 1;
        
        ctx.beginPath();
        
        const segments = 50;
        for (let j = 0; j <= segments; j++) {
          const progress = j / segments;
          const x = width * progress;
          const waveY = y + Math.sin(timeRef.current + x * 0.01 + i) * (5 + distance * 10);
          
          if (j === 0) {
            ctx.moveTo(x, waveY);
          } else {
            ctx.lineTo(x, waveY);
          }
        }
        
        ctx.stroke();
      }
      
      // Add floating scan lines
      for (let i = 0; i < 3; i++) {
        const scanY = (timeRef.current * 50 + i * 200) % height;
        const alpha = Math.sin((scanY / height) * Math.PI) * 0.3;
        
        ctx.strokeStyle = `${primaryColor}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 3;
        
        ctx.beginPath();
        ctx.moveTo(0, scanY);
        ctx.lineTo(width, scanY);
        ctx.stroke();
        
        ctx.strokeStyle = `${primaryColor}88`;
        ctx.lineWidth = 6;
        ctx.stroke();
      }
      
      // Corner highlights
      const cornerGlow = Math.sin(timeRef.current) * 0.3 + 0.7;
      ctx.strokeStyle = `${accentColor}${Math.floor(cornerGlow * 255).toString(16).padStart(2, '0')}`;
      ctx.lineWidth = 3;
      
      // Top-left corner
      ctx.beginPath();
      ctx.moveTo(20, 20);
      ctx.lineTo(80, 20);
      ctx.moveTo(20, 20);
      ctx.lineTo(20, 80);
      ctx.stroke();
      
      // Top-right corner
      ctx.beginPath();
      ctx.moveTo(width - 20, 20);
      ctx.lineTo(width - 80, 20);
      ctx.moveTo(width - 20, 20);
      ctx.lineTo(width - 20, 80);
      ctx.stroke();
      
      ctx.restore();
      
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default RetroArcadeGrid;