import { createFormHook, getFormHookHelpers } from '@tanstack/react-form';

// import { CheckboxAdapter } from '#src/common/lib/form/checkbox';
// import { ComboBoxAdapter } from '#src/common/lib/form/combo-box';
import { DateTimePickerAdapter } from '#src/common/lib/form/date-time-picker';
import { NumberFieldAdapter } from '#src/common/lib/form/number-field';
// import { RadioGroupAdapter } from '#src/common/lib/form/radio-group';
// import { SearchFieldAdapter } from '#src/common/lib/form/search-field';
// import { SelectAdapter } from '#src/common/lib/form/select';
// import { SliderAdapter } from '#src/common/lib/form/slider';
// import { SwitchAdapter } from '#src/common/lib/form/switch';
// import { TagGroupAdapter } from '#src/common/lib/form/tag-group';
import { TextFieldAdapter } from '#src/common/lib/form/text-field';
import { TimeFieldAdapter } from '#src/common/lib/form/time-field';

const { fieldComponent } = getFormHookHelpers();

export const { useAppForm, useFormContext, appFormOptions, defineAppFieldGroup } = createFormHook({
  fieldComponents: {
    TextField: fieldComponent.strict(TextFieldAdapter, 'field'),
    NumberField: fieldComponent.strict(NumberFieldAdapter, 'field'),
    DateTimePicker: fieldComponent.strict(DateTimePickerAdapter, 'field'),
    TimeField: fieldComponent.strict(TimeFieldAdapter, 'field'),
    // Checkbox: fieldComponent.strict(CheckboxAdapter, 'field'),
    // Switch: fieldComponent.strict(SwitchAdapter, 'field'),
    // RadioGroup: fieldComponent.strict(RadioGroupAdapter, 'field'),
    // SearchField: fieldComponent.strict(SearchFieldAdapter, 'field'),
    // Slider: fieldComponent.strict(SliderAdapter, 'field'),
    // TagGroup: fieldComponent.strict(TagGroupAdapter, 'field'),
    // Select: fieldComponent.strict(SelectAdapter, 'field'),
    // ComboBox: fieldComponent.strict(ComboBoxAdapter, 'field'),
  },
  formComponents: {},
});
