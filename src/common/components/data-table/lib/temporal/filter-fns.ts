import { constructFilterFn } from '@tanstack/react-table';

const parseZonedDateTime = (value: unknown) => {
  if (value instanceof Temporal.ZonedDateTime) {
    return value;
  }

  return null;
};

const compare_zoned_date_time = (
  dataValue: Temporal.ZonedDateTime | null,
  filterValue: Temporal.ZonedDateTime | null,
) => {
  if (dataValue === null || filterValue === null) {
    return null;
  }

  return Temporal.ZonedDateTime.compare(dataValue, filterValue);
};

const zoned_date_time_base_options = {
  autoRemove: (val: unknown) => val === undefined || val === null || val === '',
  resolveDataValue: parseZonedDateTime,
  resolveFilterValue: parseZonedDateTime,
} as const;

export const filter_zoned_date_time_equals = constructFilterFn({
  ...zoned_date_time_base_options,
  filter: (dataValue: Temporal.ZonedDateTime | null, filterValue: Temporal.ZonedDateTime | null) => {
    return compare_zoned_date_time(dataValue, filterValue) === 0;
  },
});

export const filter_zoned_date_time_not_equal = constructFilterFn({
  ...zoned_date_time_base_options,
  filter: (dataValue: Temporal.ZonedDateTime | null, filterValue: Temporal.ZonedDateTime | null) => {
    return compare_zoned_date_time(dataValue, filterValue) !== 0;
  },
});

export const filter_zoned_date_time_greater_than = constructFilterFn({
  ...zoned_date_time_base_options,
  filter: (dataValue: Temporal.ZonedDateTime | null, filterValue: Temporal.ZonedDateTime | null) => {
    const cmp = compare_zoned_date_time(dataValue, filterValue);

    return cmp !== null && cmp > 0;
  },
});

export const filter_zoned_date_time_greater_than_or_equal = constructFilterFn({
  ...zoned_date_time_base_options,
  filter: (dataValue: Temporal.ZonedDateTime | null, filterValue: Temporal.ZonedDateTime | null) => {
    const cmp = compare_zoned_date_time(dataValue, filterValue);

    return cmp !== null && cmp >= 0;
  },
});

export const filter_zoned_date_time_less_than = constructFilterFn({
  ...zoned_date_time_base_options,
  filter: (dataValue: Temporal.ZonedDateTime | null, filterValue: Temporal.ZonedDateTime | null) => {
    const cmp = compare_zoned_date_time(dataValue, filterValue);

    return cmp !== null && cmp < 0;
  },
});

export const filter_zoned_date_time_less_than_or_equal = constructFilterFn({
  ...zoned_date_time_base_options,
  filter: (dataValue: Temporal.ZonedDateTime | null, filterValue: Temporal.ZonedDateTime | null) => {
    const cmp = compare_zoned_date_time(dataValue, filterValue);

    return cmp !== null && cmp <= 0;
  },
});

export const filter_zoned_date_time_range = constructFilterFn({
  autoRemove: (val: unknown) => {
    return (
      val === undefined ||
      val === null ||
      (Array.isArray(val) &&
        (val[0] === null || val[0] === undefined || val[0] === '') &&
        (val[1] === null || val[1] === undefined || val[1] === ''))
    );
  },
  resolveDataValue: parseZonedDateTime,
  resolveFilterValue: (filterValue: [unknown, unknown]) => {
    const [unsafeMin, unsafeMax] = filterValue;

    const min = parseZonedDateTime(unsafeMin);
    const max = parseZonedDateTime(unsafeMax);

    if (min !== null && max !== null && Temporal.ZonedDateTime.compare(min, max) > 0) {
      return [max, min] as const;
    }

    return [min, max];
  },
  filter: (
    dataValue: Temporal.ZonedDateTime | null,
    [min, max]: [Temporal.ZonedDateTime | null, Temporal.ZonedDateTime | null],
  ) => {
    if (dataValue === null) {
      return false;
    }

    if (min !== null && Temporal.ZonedDateTime.compare(dataValue, min) < 0) {
      return false;
    }

    if (max !== null && Temporal.ZonedDateTime.compare(dataValue, max) > 0) {
      return false;
    }

    return true;
  },
});

const parseInstant = (value: unknown) => {
  if (value instanceof Temporal.Instant) {
    return value;
  }

  return null;
};

const compare_instant = (dataValue: Temporal.Instant | null, filterValue: Temporal.Instant | null) => {
  if (dataValue === null || filterValue === null) {
    return null;
  }

  return Temporal.Instant.compare(dataValue, filterValue);
};

const instant_base_options = {
  autoRemove: (val: unknown) => val === undefined || val === null || val === '',
  resolveDataValue: parseInstant,
  resolveFilterValue: parseInstant,
} as const;

export const filter_instant_equals = constructFilterFn({
  ...instant_base_options,
  filter: (dataValue: Temporal.Instant | null, filterValue: Temporal.Instant | null) => {
    return compare_instant(dataValue, filterValue) === 0;
  },
});

export const filter_instant_not_equal = constructFilterFn({
  ...instant_base_options,
  filter: (dataValue: Temporal.Instant | null, filterValue: Temporal.Instant | null) => {
    return compare_instant(dataValue, filterValue) !== 0;
  },
});

export const filter_instant_greater_than = constructFilterFn({
  ...instant_base_options,
  filter: (dataValue: Temporal.Instant | null, filterValue: Temporal.Instant | null) => {
    const cmp = compare_instant(dataValue, filterValue);

    return cmp !== null && cmp > 0;
  },
});

export const filter_instant_greater_than_or_equal = constructFilterFn({
  ...instant_base_options,
  filter: (dataValue: Temporal.Instant | null, filterValue: Temporal.Instant | null) => {
    const cmp = compare_instant(dataValue, filterValue);

    return cmp !== null && cmp >= 0;
  },
});

export const filter_instant_less_than = constructFilterFn({
  ...instant_base_options,
  filter: (dataValue: Temporal.Instant | null, filterValue: Temporal.Instant | null) => {
    const cmp = compare_instant(dataValue, filterValue);

    return cmp !== null && cmp < 0;
  },
});

export const filter_instant_less_than_or_equal = constructFilterFn({
  ...instant_base_options,
  filter: (dataValue: Temporal.Instant | null, filterValue: Temporal.Instant | null) => {
    const cmp = compare_instant(dataValue, filterValue);

    return cmp !== null && cmp <= 0;
  },
});

export const filter_instant_range = constructFilterFn({
  autoRemove: (val: unknown) => {
    return (
      val === undefined ||
      val === null ||
      (Array.isArray(val) &&
        (val[0] === null || val[0] === undefined || val[0] === '') &&
        (val[1] === null || val[1] === undefined || val[1] === ''))
    );
  },
  resolveDataValue: parseInstant,
  resolveFilterValue: (filterValue: [unknown, unknown]) => {
    const [unsafeMin, unsafeMax] = filterValue;

    const min = parseInstant(unsafeMin);
    const max = parseInstant(unsafeMax);

    if (min !== null && max !== null && Temporal.Instant.compare(min, max) > 0) {
      return [max, min] as const;
    }

    return [min, max];
  },
  filter: (dataValue: Temporal.Instant | null, [min, max]: [Temporal.Instant | null, Temporal.Instant | null]) => {
    if (dataValue === null) {
      return false;
    }

    if (min !== null && Temporal.Instant.compare(dataValue, min) < 0) {
      return false;
    }

    if (max !== null && Temporal.Instant.compare(dataValue, max) > 0) {
      return false;
    }

    return true;
  },
});

const parsePlainDateTime = (value: unknown) => {
  if (value instanceof Temporal.PlainDateTime) {
    return value;
  }

  return null;
};

const compare_plain_date_time = (
  dataValue: Temporal.PlainDateTime | null,
  filterValue: Temporal.PlainDateTime | null,
) => {
  if (dataValue === null || filterValue === null) {
    return null;
  }

  return Temporal.PlainDateTime.compare(dataValue, filterValue);
};

const plain_date_time_base_options = {
  autoRemove: (val: unknown) => val === undefined || val === null || val === '',
  resolveDataValue: parsePlainDateTime,
  resolveFilterValue: parsePlainDateTime,
} as const;

export const filter_plain_date_time_equals = constructFilterFn({
  ...plain_date_time_base_options,
  filter: (dataValue: Temporal.PlainDateTime | null, filterValue: Temporal.PlainDateTime | null) => {
    return compare_plain_date_time(dataValue, filterValue) === 0;
  },
});

export const filter_plain_date_time_not_equal = constructFilterFn({
  ...plain_date_time_base_options,
  filter: (dataValue: Temporal.PlainDateTime | null, filterValue: Temporal.PlainDateTime | null) => {
    return compare_plain_date_time(dataValue, filterValue) !== 0;
  },
});

export const filter_plain_date_time_greater_than = constructFilterFn({
  ...plain_date_time_base_options,
  filter: (dataValue: Temporal.PlainDateTime | null, filterValue: Temporal.PlainDateTime | null) => {
    const cmp = compare_plain_date_time(dataValue, filterValue);

    return cmp !== null && cmp > 0;
  },
});

export const filter_plain_date_time_greater_than_or_equal = constructFilterFn({
  ...plain_date_time_base_options,
  filter: (dataValue: Temporal.PlainDateTime | null, filterValue: Temporal.PlainDateTime | null) => {
    const cmp = compare_plain_date_time(dataValue, filterValue);

    return cmp !== null && cmp >= 0;
  },
});

export const filter_plain_date_time_less_than = constructFilterFn({
  ...plain_date_time_base_options,
  filter: (dataValue: Temporal.PlainDateTime | null, filterValue: Temporal.PlainDateTime | null) => {
    const cmp = compare_plain_date_time(dataValue, filterValue);

    return cmp !== null && cmp < 0;
  },
});

export const filter_plain_date_time_less_than_or_equal = constructFilterFn({
  ...plain_date_time_base_options,
  filter: (dataValue: Temporal.PlainDateTime | null, filterValue: Temporal.PlainDateTime | null) => {
    const cmp = compare_plain_date_time(dataValue, filterValue);

    return cmp !== null && cmp <= 0;
  },
});

export const filter_plain_date_time_range = constructFilterFn({
  autoRemove: (val: unknown) => {
    return (
      val === undefined ||
      val === null ||
      (Array.isArray(val) &&
        (val[0] === null || val[0] === undefined || val[0] === '') &&
        (val[1] === null || val[1] === undefined || val[1] === ''))
    );
  },
  resolveDataValue: parsePlainDateTime,
  resolveFilterValue: (filterValue: [unknown, unknown]) => {
    const [unsafeMin, unsafeMax] = filterValue;

    const min = parsePlainDateTime(unsafeMin);
    const max = parsePlainDateTime(unsafeMax);

    if (min !== null && max !== null && Temporal.PlainDateTime.compare(min, max) > 0) {
      return [max, min] as const;
    }

    return [min, max];
  },
  filter: (
    dataValue: Temporal.PlainDateTime | null,
    [min, max]: [Temporal.PlainDateTime | null, Temporal.PlainDateTime | null],
  ) => {
    if (dataValue === null) {
      return false;
    }

    if (min !== null && Temporal.PlainDateTime.compare(dataValue, min) < 0) {
      return false;
    }

    if (max !== null && Temporal.PlainDateTime.compare(dataValue, max) > 0) {
      return false;
    }

    return true;
  },
});

const parsePlainDate = (value: unknown) => {
  if (value instanceof Temporal.PlainDate) {
    return value;
  }

  return null;
};

const compare_plain_date = (dataValue: Temporal.PlainDate | null, filterValue: Temporal.PlainDate | null) => {
  if (dataValue === null || filterValue === null) {
    return null;
  }

  return Temporal.PlainDate.compare(dataValue, filterValue);
};

const plain_date_base_options = {
  autoRemove: (val: unknown) => val === undefined || val === null || val === '',
  resolveDataValue: parsePlainDate,
  resolveFilterValue: parsePlainDate,
} as const;

export const filter_plain_date_equals = constructFilterFn({
  ...plain_date_base_options,
  filter: (dataValue: Temporal.PlainDate | null, filterValue: Temporal.PlainDate | null) => {
    return compare_plain_date(dataValue, filterValue) === 0;
  },
});

export const filter_plain_date_not_equal = constructFilterFn({
  ...plain_date_base_options,
  filter: (dataValue: Temporal.PlainDate | null, filterValue: Temporal.PlainDate | null) => {
    return compare_plain_date(dataValue, filterValue) !== 0;
  },
});

export const filter_plain_date_greater_than = constructFilterFn({
  ...plain_date_base_options,
  filter: (dataValue: Temporal.PlainDate | null, filterValue: Temporal.PlainDate | null) => {
    const cmp = compare_plain_date(dataValue, filterValue);

    return cmp !== null && cmp > 0;
  },
});

export const filter_plain_date_greater_than_or_equal = constructFilterFn({
  ...plain_date_base_options,
  filter: (dataValue: Temporal.PlainDate | null, filterValue: Temporal.PlainDate | null) => {
    const cmp = compare_plain_date(dataValue, filterValue);

    return cmp !== null && cmp >= 0;
  },
});

export const filter_plain_date_less_than = constructFilterFn({
  ...plain_date_base_options,
  filter: (dataValue: Temporal.PlainDate | null, filterValue: Temporal.PlainDate | null) => {
    const cmp = compare_plain_date(dataValue, filterValue);

    return cmp !== null && cmp < 0;
  },
});

export const filter_plain_date_less_than_or_equal = constructFilterFn({
  ...plain_date_base_options,
  filter: (dataValue: Temporal.PlainDate | null, filterValue: Temporal.PlainDate | null) => {
    const cmp = compare_plain_date(dataValue, filterValue);

    return cmp !== null && cmp <= 0;
  },
});

export const filter_plain_date_range = constructFilterFn({
  autoRemove: (val: unknown) => {
    return (
      val === undefined ||
      val === null ||
      (Array.isArray(val) &&
        (val[0] === null || val[0] === undefined || val[0] === '') &&
        (val[1] === null || val[1] === undefined || val[1] === ''))
    );
  },
  resolveDataValue: parsePlainDate,
  resolveFilterValue: (filterValue: [unknown, unknown]) => {
    const [unsafeMin, unsafeMax] = filterValue;

    const min = parsePlainDate(unsafeMin);
    const max = parsePlainDate(unsafeMax);

    if (min !== null && max !== null && Temporal.PlainDate.compare(min, max) > 0) {
      return [max, min] as const;
    }

    return [min, max];
  },
  filter: (
    dataValue: Temporal.PlainDate | null,
    [min, max]: [Temporal.PlainDate | null, Temporal.PlainDate | null],
  ) => {
    if (dataValue === null) {
      return false;
    }

    if (min !== null && Temporal.PlainDate.compare(dataValue, min) < 0) {
      return false;
    }

    if (max !== null && Temporal.PlainDate.compare(dataValue, max) > 0) {
      return false;
    }

    return true;
  },
});

const parsePlainTime = (value: unknown) => {
  if (value instanceof Temporal.PlainTime) {
    return value;
  }

  return null;
};

const compare_plain_time = (dataValue: Temporal.PlainTime | null, filterValue: Temporal.PlainTime | null) => {
  if (dataValue === null || filterValue === null) {
    return null;
  }

  return Temporal.PlainTime.compare(dataValue, filterValue);
};

const plain_time_base_options = {
  autoRemove: (val: unknown) => val === undefined || val === null || val === '',
  resolveDataValue: parsePlainTime,
  resolveFilterValue: parsePlainTime,
} as const;

export const filter_plain_time_equals = constructFilterFn({
  ...plain_time_base_options,
  filter: (dataValue: Temporal.PlainTime | null, filterValue: Temporal.PlainTime | null) => {
    return compare_plain_time(dataValue, filterValue) === 0;
  },
});

export const filter_plain_time_not_equal = constructFilterFn({
  ...plain_time_base_options,
  filter: (dataValue: Temporal.PlainTime | null, filterValue: Temporal.PlainTime | null) => {
    return compare_plain_time(dataValue, filterValue) !== 0;
  },
});

export const filter_plain_time_greater_than = constructFilterFn({
  ...plain_time_base_options,
  filter: (dataValue: Temporal.PlainTime | null, filterValue: Temporal.PlainTime | null) => {
    const cmp = compare_plain_time(dataValue, filterValue);

    return cmp !== null && cmp > 0;
  },
});

export const filter_plain_time_greater_than_or_equal = constructFilterFn({
  ...plain_time_base_options,
  filter: (dataValue: Temporal.PlainTime | null, filterValue: Temporal.PlainTime | null) => {
    const cmp = compare_plain_time(dataValue, filterValue);

    return cmp !== null && cmp >= 0;
  },
});

export const filter_plain_time_less_than = constructFilterFn({
  ...plain_time_base_options,
  filter: (dataValue: Temporal.PlainTime | null, filterValue: Temporal.PlainTime | null) => {
    const cmp = compare_plain_time(dataValue, filterValue);

    return cmp !== null && cmp < 0;
  },
});

export const filter_plain_time_less_than_or_equal = constructFilterFn({
  ...plain_time_base_options,
  filter: (dataValue: Temporal.PlainTime | null, filterValue: Temporal.PlainTime | null) => {
    const cmp = compare_plain_time(dataValue, filterValue);

    return cmp !== null && cmp <= 0;
  },
});

export const filter_plain_time_range = constructFilterFn({
  autoRemove: (val: unknown) => {
    return (
      val === undefined ||
      val === null ||
      (Array.isArray(val) &&
        (val[0] === null || val[0] === undefined || val[0] === '') &&
        (val[1] === null || val[1] === undefined || val[1] === ''))
    );
  },
  resolveDataValue: parsePlainTime,
  resolveFilterValue: (filterValue: [unknown, unknown]) => {
    const [unsafeMin, unsafeMax] = filterValue;

    const min = parsePlainTime(unsafeMin);
    const max = parsePlainTime(unsafeMax);

    if (min !== null && max !== null && Temporal.PlainTime.compare(min, max) > 0) {
      return [max, min] as const;
    }

    return [min, max];
  },
  filter: (
    dataValue: Temporal.PlainTime | null,
    [min, max]: [Temporal.PlainTime | null, Temporal.PlainTime | null],
  ) => {
    if (dataValue === null) {
      return false;
    }

    if (min !== null && Temporal.PlainTime.compare(dataValue, min) < 0) {
      return false;
    }

    if (max !== null && Temporal.PlainTime.compare(dataValue, max) > 0) {
      return false;
    }

    return true;
  },
});
