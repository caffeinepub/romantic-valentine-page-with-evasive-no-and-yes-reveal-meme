import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { useEvasiveNoButton } from './useEvasiveNoButton';

export default function ValentinePage() {
  const [hasAnswered, setHasAnswered] = useState(false);
  const { containerRef, noButtonRef, noButtonStyle, handleNoButtonInteraction } = useEvasiveNoButton();

  const handleYesClick = () => {
    setHasAnswered(true);
  };

  if (hasAnswered) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-romantic-light via-romantic-medium to-romantic-accent p-6">
        <div className="max-w-3xl w-full text-center space-y-8 animate-in fade-in duration-700">
          <div className="space-y-4">
            <Heart className="w-20 h-20 mx-auto text-romantic-dark animate-pulse" fill="currentColor" />
            <h1 className="text-4xl md:text-6xl font-bold text-romantic-dark leading-tight">
              I KNEW YOU WOULD SAY YES
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-romantic-dark leading-tight">
              AND CHOOSE ME ANYDAY OVER ANYONE
            </h2>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 bg-white/20 backdrop-blur-sm">
            <img 
              src="/assets/generated/valentine-meme.dim_1200x800.png" 
              alt="Valentine celebration meme"
              className="w-full h-auto"
            />
          </div>

          <div className="flex gap-3 justify-center items-center text-romantic-dark">
            <Heart className="w-6 h-6" fill="currentColor" />
            <Heart className="w-8 h-8" fill="currentColor" />
            <Heart className="w-6 h-6" fill="currentColor" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-romantic-light via-romantic-medium to-romantic-accent p-6 relative overflow-hidden"
    >
      {/* Decorative floating hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Heart className="absolute top-[10%] left-[15%] w-12 h-12 text-white/20 animate-float" fill="currentColor" />
        <Heart className="absolute top-[20%] right-[20%] w-8 h-8 text-white/30 animate-float-delayed" fill="currentColor" />
        <Heart className="absolute bottom-[15%] left-[25%] w-10 h-10 text-white/25 animate-float" fill="currentColor" />
        <Heart className="absolute bottom-[25%] right-[15%] w-14 h-14 text-white/20 animate-float-delayed" fill="currentColor" />
      </div>

      <div className="max-w-2xl w-full text-center space-y-12 relative z-10">
        {/* Header */}
        <div className="space-y-6 animate-in fade-in slide-in-from-top duration-700">
          <Heart className="w-24 h-24 mx-auto text-romantic-dark animate-pulse" fill="currentColor" />
          <h1 className="text-5xl md:text-7xl font-bold text-romantic-dark leading-tight drop-shadow-sm">
            Will You Be My Valentine?
          </h1>
          <p className="text-xl md:text-2xl text-romantic-dark/80 font-medium">
            There's only one right answer... 💕
          </p>
        </div>

        {/* Buttons Container */}
        <div className="relative min-h-[200px] flex items-center justify-center">
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            {/* Yes Button */}
            <Button
              onClick={handleYesClick}
              size="lg"
              className="text-2xl px-12 py-8 h-auto bg-romantic-dark hover:bg-romantic-dark/90 text-white shadow-2xl hover:shadow-romantic-dark/50 transition-all duration-300 hover:scale-110 rounded-full font-bold border-4 border-white/50"
            >
              Yes! 💖
            </Button>

            {/* No Button - Evasive */}
            <Button
              ref={noButtonRef}
              onPointerEnter={handleNoButtonInteraction}
              onPointerDown={handleNoButtonInteraction}
              onMouseOver={handleNoButtonInteraction}
              onTouchStart={handleNoButtonInteraction}
              size="lg"
              variant="outline"
              style={noButtonStyle}
              className="text-2xl px-12 py-8 h-auto bg-white/80 hover:bg-white text-romantic-dark shadow-xl transition-all duration-150 rounded-full font-bold border-4 border-romantic-dark/30 absolute"
            >
              No 😢
            </Button>
          </div>
        </div>

        {/* Hint text */}
        <p className="text-lg text-romantic-dark/70 italic animate-in fade-in delay-1000 duration-700">
          (Hint: The "No" button is a bit shy... 😉)
        </p>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 left-0 right-0 text-center text-romantic-dark/60 text-sm">
        © 2026. Built with <Heart className="inline w-4 h-4 mx-1" fill="currentColor" /> using{' '}
        <a 
          href="https://caffeine.ai" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-romantic-dark transition-colors underline"
        >
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}
