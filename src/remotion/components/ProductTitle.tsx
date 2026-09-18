import { useFadeIn, useSpringSlideIn, useSpringSlideUp } from '../animations';

export interface ProductTitleProps {
  title: string;
  tagline?: string;
  headline?: string;
  primaryColor?: string;
  /** Local frame at which the title animates in. */
  enterFrame?: number;
}

export const ProductTitle: React.FC<ProductTitleProps> = ({
  title,
  tagline,
  headline,
  primaryColor = '#6366F1',
  enterFrame = 3,
}) => {
  const titleOpacity = useFadeIn({ from: enterFrame, duration: 10 });
  const titleY = useSpringSlideUp({ from: enterFrame, distance: 24, damping: 18, stiffness: 140 });

  const taglineOpacity = useFadeIn({ from: enterFrame + 4, duration: 10 });
  const taglineY = useSpringSlideUp({
    from: enterFrame + 4,
    distance: 20,
    damping: 18,
    stiffness: 130,
  });

  const headlineOpacity = useFadeIn({ from: enterFrame + 8, duration: 10 });
  const headlineX = useSpringSlideIn({
    from: enterFrame + 8,
    distance: 24,
    direction: 'left',
    damping: 18,
    stiffness: 130,
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
        textAlign: 'center',
        padding: '0 48px',
      }}
    >
      {headline && (
        <p
          style={{
            opacity: headlineOpacity,
            transform: `translateX(${headlineX}px)`,
            margin: 0,
            fontSize: 28,
            fontWeight: 600,
            color: primaryColor,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          {headline}
        </p>
      )}

      <h1
        style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          margin: 0,
          fontSize: 72,
          fontWeight: 800,
          color: '#ffffff',
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
        }}
      >
        {title}
      </h1>

      {tagline && (
        <p
          style={{
            opacity: taglineOpacity,
            transform: `translateY(${taglineY}px)`,
            margin: 0,
            fontSize: 32,
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.75)',
            lineHeight: 1.35,
          }}
        >
          {tagline}
        </p>
      )}
    </div>
  );
};
