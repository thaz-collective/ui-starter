import { CardRoot } from './card';
import { CardContent } from './card-content';
import { CardDescription } from './card-description';
import { CardFooter } from './card-footer';
import { CardHeader } from './card-header';
import { CardTitle } from './card-title';

export const Card = Object.assign(CardRoot, {
  Root: CardRoot,
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
});
