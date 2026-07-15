import { createFormHook, createFormHookContexts } from '@tanstack/react-form';

// import { fieldContext, formContext } from '@thazstack/form-internationalized-date-util';

export const { formContext, useFieldContext, fieldContext, useFormContext } = createFormHookContexts();

export const { useAppForm, withForm, withFieldGroup, useTypedAppFormContext } = createFormHook({
  fieldComponents: {},
  formComponents: {},
  fieldContext,
  formContext,
});
