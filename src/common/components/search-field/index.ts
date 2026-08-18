import { SearchField as SearchFieldRoot } from './components/search-field';
import { ClearButton } from './components/search-field-clear-button';
import { Description } from './components/search-field-description';
import { FieldError } from './components/search-field-field-error';
import { Group } from './components/search-field-group';
import { Input } from './components/search-field-input';
import { Label } from './components/search-field-label';

export const SearchField = Object.assign(SearchFieldRoot, {
  Root: SearchFieldRoot,
  Group,
  Input,
  ClearButton,
  Label,
  Description,
  FieldError,
});

export type { SearchFieldProps } from './components/search-field';

export type { SearchFieldVariants, SlotsSearchFieldVariants, RequiredSearchFieldVariants } from './variants';
export { searchFieldVariants } from './variants';
