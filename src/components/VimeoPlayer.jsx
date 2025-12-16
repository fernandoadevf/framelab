import React from 'react';

/**
 * Componente responsivo para iframes do Vimeo
 * Garante que o vídeo se ajuste corretamente em desktop e mobile
 * mantendo a proporção 16:9 e sem cortar conteúdo
 * 
 * @param {string} videoId - ID do vídeo do Vimeo
 * @param {string} className - Classes CSS adicionais
 * @param {boolean} autoplay - Se o vídeo deve iniciar automaticamente
 * @param {boolean} loop - Se o vídeo deve repetir
 * @param {boolean} muted - Se o vídeo deve estar mudo
 * @param {string} variant - 'fill' para preencher container (desktop) ou 'aspect' para manter proporção (mobile)
 */
const VimeoPlayer = ({ 
  videoId, 
  className = '', 
  autoplay = true, 
  loop = true, 
  muted = true,
  variant = 'aspect', // 'fill' ou 'aspect'
  ...props 
}) => {
  // URL base do Vimeo
  const baseParams = `muted=${muted ? 1 : 0}&autoplay=${autoplay ? 1 : 0}&loop=${loop ? 1 : 0}&playsinline=1&title=0&byline=0&portrait=0`;
  
  // Para desktop (fill), esconder controles completamente
  const videoUrl = variant === 'fill' 
    ? `https://player.vimeo.com/video/${videoId}?${baseParams}&controls=0&background=1`
    : `https://player.vimeo.com/video/${videoId}?${baseParams}`;

  // Variante 'fill' para desktop - preenche o container com zoom se necessário
  // Garante que o vídeo apareça e preencha todo o espaço, mesmo que precise dar zoom
  if (variant === 'fill') {
    return (
      <div 
        className={`relative w-full h-full bg-black ${className}`} 
        {...props}
        style={{ 
          width: '100%', 
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <iframe
          src={videoUrl}
          width="100%"
          height="100%"
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            minWidth: '200%',
            minHeight: '100%',
            transform: 'translateX(-50%)',
            left: '50%',
            border: 'none',
            display: 'block',
          }}
          allow="autoplay; fullscreen; picture-in-picture"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          frameBorder="0"
        />
      </div>
    );
  }

  // Variante 'aspect' para mobile - mantém proporção 16:9 responsiva
  return (
    <div className={`relative w-full overflow-hidden ${className}`} {...props}>
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 aspect ratio */}
        <iframe
          src={videoUrl}
          className="absolute top-0 left-0 w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          frameBorder="0"
        />
      </div>
    </div>
  );
};

export default VimeoPlayer;

