import { CardContent } from './components/card-content';
import { CardContextProvider } from './components/card-context-provider';
import { CardDescription } from './components/card-description';
import { CardFooter } from './components/card-footer';
import { CardHeader } from './components/card-header';
import { CardRoot } from './components/card-root';
import { CardTitle } from './components/card-title';

export const Card = Object.assign(CardRoot, {
  Root: CardRoot,
  Provider: CardContextProvider,
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
});

export type { CardContextProviderProps } from './components/card-context-provider';
export type { CardContentProps } from './components/card-content';
export type { CardDescriptionProps } from './components/card-description';
export type { CardFooterProps } from './components/card-footer';
export type { CardHeaderProps } from './components/card-header';
export type { CardRootProps } from './components/card-root';
export type { CardTitleProps } from './components/card-title';

export { useCardContext } from './context';

export type { CardVariants, SlotsCardVariants, RequiredCardVariants } from './variants';
export { cardVariants } from './variants';
