import { AlertContent } from './alert-content';
import { AlertDescription } from './alert-description';
import { AlertIcon } from './alert-icon';
import { AlertRoot } from './alert-root';
import { AlertTitle } from './alert-title';

export const Alert = Object.assign(AlertRoot, {
  Root: AlertRoot,
  Icon: AlertIcon,
  Content: AlertContent,
  Title: AlertTitle,
  Description: AlertDescription,
});
