import { useRef, useState, useCallback, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

export function useEvasiveNoButton() {
  const containerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize button position on mount
  useEffect(() => {
    if (!isInitialized && containerRef.current && noButtonRef.current) {
      setIsInitialized(true);
    }
  }, [isInitialized]);

  const getRandomPosition = useCallback((): Position => {
    if (!containerRef.current || !noButtonRef.current) {
      return { x: 0, y: 0 };
    }

    const container = containerRef.current.getBoundingClientRect();
    const button = noButtonRef.current.getBoundingClientRect();

    // Calculate safe bounds with padding
    const padding = 20;
    const maxX = container.width - button.width - padding * 2;
    const maxY = container.height - button.height - padding * 2;

    // Generate random position within safe bounds
    const x = Math.random() * maxX - maxX / 2;
    const y = Math.random() * maxY - maxY / 2;

    return { x, y };
  }, []);

  const handleNoButtonInteraction = useCallback((e: React.PointerEvent | React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const newPosition = getRandomPosition();
    setPosition(newPosition);
  }, [getRandomPosition]);

  const noButtonStyle: React.CSSProperties = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: 'transform 0.3s ease-out',
  };

  return {
    containerRef,
    noButtonRef,
    noButtonStyle,
    handleNoButtonInteraction,
  };
}
