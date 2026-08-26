import { SelectExample } from './select';
import { SelectInACardExample } from './select-in-a-card';
import { SelectWithAutocompleteExample } from './select-with-autocomplete';
import { SelectWithDisabledStateExample } from './select-with-disabled-state';
import { SelectWithErrorStateExample } from './select-with-error-state';
import { SelectWithMultipleSelectionExample } from './select-with-multiple-selection';
import { SelectWithRequiredStateExample } from './select-with-required-state';
import { SelectWithSectionsExample } from './select-with-sections';

export const selectExamples = {
  SelectExample,
  SelectWithSectionsExample,
  SelectWithMultipleSelectionExample,
  SelectWithAutocompleteExample,
  SelectWithRequiredStateExample,
  SelectWithErrorStateExample,
  SelectWithDisabledStateExample,
  SelectInACardExample,
} as const;
