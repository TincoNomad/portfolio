export interface BaseContainerProps {
  className?: string;
  id?: string;
}

export interface SectionContainerProps extends BaseContainerProps {
  id: string;
  variant?: 'primary' | 'secondary';
}

export interface ComicBubbleProps extends BaseContainerProps {
  type?: 'thought' | 'speech' | 'shout';
  direction?: 'left' | 'right';
}