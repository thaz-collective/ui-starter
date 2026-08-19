import { constructAggregationFn } from '@tanstack/react-table';

const isZonedDateTime = (value: unknown): value is Temporal.ZonedDateTime => {
  return value instanceof Temporal.ZonedDateTime;
};

export const aggregation_zoned_date_time_min = constructAggregationFn({
  aggregate: ({ rows, getValue }) => {
    let result: Temporal.ZonedDateTime | null = null;
    for (const row of rows) {
      const value = getValue(row);
      if (!isZonedDateTime(value)) {
        continue;
      }

      if (result === null || Temporal.ZonedDateTime.compare(value, result) < 0) {
        result = value;
      }
    }
    return result;
  },
  merge: ({ subRowResults }) => {
    let result: Temporal.ZonedDateTime | null = null;
    for (const rowValue of subRowResults) {
      if (!isZonedDateTime(rowValue)) {
        continue;
      }

      if (result === null || Temporal.ZonedDateTime.compare(rowValue, result) < 0) {
        result = rowValue;
      }
    }
    return result;
  },
});

export const aggregation_zoned_date_time_max = constructAggregationFn({
  aggregate: ({ rows, getValue }) => {
    let result: Temporal.ZonedDateTime | null = null;
    for (const row of rows) {
      const value = getValue(row);
      if (!isZonedDateTime(value)) {
        continue;
      }

      if (result === null || Temporal.ZonedDateTime.compare(value, result) > 0) {
        result = value;
      }
    }
    return result;
  },
  merge: ({ subRowResults }) => {
    let result: Temporal.ZonedDateTime | null = null;
    for (const rowValue of subRowResults) {
      if (!isZonedDateTime(rowValue)) {
        continue;
      }

      if (result === null || Temporal.ZonedDateTime.compare(rowValue, result) > 0) {
        result = rowValue;
      }
    }
    return result;
  },
});

export const aggregation_zoned_date_time_extent = constructAggregationFn({
  aggregate: ({ rows, getValue }) => {
    let min: Temporal.ZonedDateTime | null = null;
    let max: Temporal.ZonedDateTime | null = null;
    for (const row of rows) {
      const value = getValue(row);
      if (!isZonedDateTime(value)) {
        continue;
      }

      if (min === null || Temporal.ZonedDateTime.compare(value, min) < 0) {
        min = value;
      }
      if (max === null || Temporal.ZonedDateTime.compare(value, max) > 0) {
        max = value;
      }
    }
    return [min, max] as const;
  },
  merge: ({ subRowResults }) => {
    let min: Temporal.ZonedDateTime | null = null;
    let max: Temporal.ZonedDateTime | null = null;
    for (const [subMin, subMax] of subRowResults) {
      if (subMin !== null && (min === null || Temporal.ZonedDateTime.compare(subMin, min) < 0)) {
        min = subMin;
      }
      if (subMax !== null && (max === null || Temporal.ZonedDateTime.compare(subMax, max) > 0)) {
        max = subMax;
      }
    }
    return [min, max] as const;
  },
});

const isInstant = (value: unknown): value is Temporal.Instant => {
  return value instanceof Temporal.Instant;
};

export const aggregation_instant_min = constructAggregationFn({
  aggregate: ({ rows, getValue }) => {
    let result: Temporal.Instant | null = null;
    for (const row of rows) {
      const value = getValue(row);
      if (!isInstant(value)) {
        continue;
      }

      if (result === null || Temporal.Instant.compare(value, result) < 0) {
        result = value;
      }
    }
    return result;
  },
  merge: ({ subRowResults }) => {
    let result: Temporal.Instant | null = null;
    for (const rowValue of subRowResults) {
      if (!isInstant(rowValue)) {
        continue;
      }

      if (result === null || Temporal.Instant.compare(rowValue, result) < 0) {
        result = rowValue;
      }
    }
    return result;
  },
});

export const aggregation_instant_max = constructAggregationFn({
  aggregate: ({ rows, getValue }) => {
    let result: Temporal.Instant | null = null;
    for (const row of rows) {
      const value = getValue(row);
      if (!isInstant(value)) {
        continue;
      }

      if (result === null || Temporal.Instant.compare(value, result) > 0) {
        result = value;
      }
    }
    return result;
  },
  merge: ({ subRowResults }) => {
    let result: Temporal.Instant | null = null;
    for (const rowValue of subRowResults) {
      if (!isInstant(rowValue)) {
        continue;
      }

      if (result === null || Temporal.Instant.compare(rowValue, result) > 0) {
        result = rowValue;
      }
    }
    return result;
  },
});

export const aggregation_instant_extent = constructAggregationFn({
  aggregate: ({ rows, getValue }) => {
    let min: Temporal.Instant | null = null;
    let max: Temporal.Instant | null = null;
    for (const row of rows) {
      const value = getValue(row);
      if (!isInstant(value)) {
        continue;
      }

      if (min === null || Temporal.Instant.compare(value, min) < 0) {
        min = value;
      }
      if (max === null || Temporal.Instant.compare(value, max) > 0) {
        max = value;
      }
    }
    return [min, max] as const;
  },
  merge: ({ subRowResults }) => {
    let min: Temporal.Instant | null = null;
    let max: Temporal.Instant | null = null;
    for (const [subMin, subMax] of subRowResults) {
      if (subMin !== null && (min === null || Temporal.Instant.compare(subMin, min) < 0)) {
        min = subMin;
      }
      if (subMax !== null && (max === null || Temporal.Instant.compare(subMax, max) > 0)) {
        max = subMax;
      }
    }
    return [min, max] as const;
  },
});

const isPlainDateTime = (value: unknown): value is Temporal.PlainDateTime => {
  return value instanceof Temporal.PlainDateTime;
};

export const aggregation_plain_date_time_min = constructAggregationFn({
  aggregate: ({ rows, getValue }) => {
    let result: Temporal.PlainDateTime | null = null;
    for (const row of rows) {
      const value = getValue(row);
      if (!isPlainDateTime(value)) {
        continue;
      }

      if (result === null || Temporal.PlainDateTime.compare(value, result) < 0) {
        result = value;
      }
    }
    return result;
  },
  merge: ({ subRowResults }) => {
    let result: Temporal.PlainDateTime | null = null;
    for (const rowValue of subRowResults) {
      if (!isPlainDateTime(rowValue)) {
        continue;
      }

      if (result === null || Temporal.PlainDateTime.compare(rowValue, result) < 0) {
        result = rowValue;
      }
    }
    return result;
  },
});

export const aggregation_plain_date_time_max = constructAggregationFn({
  aggregate: ({ rows, getValue }) => {
    let result: Temporal.PlainDateTime | null = null;
    for (const row of rows) {
      const value = getValue(row);
      if (!isPlainDateTime(value)) {
        continue;
      }

      if (result === null || Temporal.PlainDateTime.compare(value, result) > 0) {
        result = value;
      }
    }
    return result;
  },
  merge: ({ subRowResults }) => {
    let result: Temporal.PlainDateTime | null = null;
    for (const rowValue of subRowResults) {
      if (!isPlainDateTime(rowValue)) {
        continue;
      }

      if (result === null || Temporal.PlainDateTime.compare(rowValue, result) > 0) {
        result = rowValue;
      }
    }
    return result;
  },
});

export const aggregation_plain_date_time_extent = constructAggregationFn({
  aggregate: ({ rows, getValue }) => {
    let min: Temporal.PlainDateTime | null = null;
    let max: Temporal.PlainDateTime | null = null;
    for (const row of rows) {
      const value = getValue(row);
      if (!isPlainDateTime(value)) {
        continue;
      }

      if (min === null || Temporal.PlainDateTime.compare(value, min) < 0) {
        min = value;
      }
      if (max === null || Temporal.PlainDateTime.compare(value, max) > 0) {
        max = value;
      }
    }
    return [min, max] as const;
  },
  merge: ({ subRowResults }) => {
    let min: Temporal.PlainDateTime | null = null;
    let max: Temporal.PlainDateTime | null = null;
    for (const [subMin, subMax] of subRowResults) {
      if (subMin !== null && (min === null || Temporal.PlainDateTime.compare(subMin, min) < 0)) {
        min = subMin;
      }
      if (subMax !== null && (max === null || Temporal.PlainDateTime.compare(subMax, max) > 0)) {
        max = subMax;
      }
    }
    return [min, max] as const;
  },
});

const isPlainDate = (value: unknown): value is Temporal.PlainDate => {
  return value instanceof Temporal.PlainDate;
};

export const aggregation_plain_date_min = constructAggregationFn({
  aggregate: ({ rows, getValue }) => {
    let result: Temporal.PlainDate | null = null;
    for (const row of rows) {
      const value = getValue(row);
      if (!isPlainDate(value)) {
        continue;
      }

      if (result === null || Temporal.PlainDate.compare(value, result) < 0) {
        result = value;
      }
    }
    return result;
  },
  merge: ({ subRowResults }) => {
    let result: Temporal.PlainDate | null = null;
    for (const rowValue of subRowResults) {
      if (!isPlainDate(rowValue)) {
        continue;
      }

      if (result === null || Temporal.PlainDate.compare(rowValue, result) < 0) {
        result = rowValue;
      }
    }
    return result;
  },
});

export const aggregation_plain_date_max = constructAggregationFn({
  aggregate: ({ rows, getValue }) => {
    let result: Temporal.PlainDate | null = null;
    for (const row of rows) {
      const value = getValue(row);
      if (!isPlainDate(value)) {
        continue;
      }

      if (result === null || Temporal.PlainDate.compare(value, result) > 0) {
        result = value;
      }
    }
    return result;
  },
  merge: ({ subRowResults }) => {
    let result: Temporal.PlainDate | null = null;
    for (const rowValue of subRowResults) {
      if (!isPlainDate(rowValue)) {
        continue;
      }

      if (result === null || Temporal.PlainDate.compare(rowValue, result) > 0) {
        result = rowValue;
      }
    }
    return result;
  },
});

export const aggregation_plain_date_extent = constructAggregationFn({
  aggregate: ({ rows, getValue }) => {
    let min: Temporal.PlainDate | null = null;
    let max: Temporal.PlainDate | null = null;
    for (const row of rows) {
      const value = getValue(row);
      if (!isPlainDate(value)) {
        continue;
      }

      if (min === null || Temporal.PlainDate.compare(value, min) < 0) {
        min = value;
      }
      if (max === null || Temporal.PlainDate.compare(value, max) > 0) {
        max = value;
      }
    }
    return [min, max] as const;
  },
  merge: ({ subRowResults }) => {
    let min: Temporal.PlainDate | null = null;
    let max: Temporal.PlainDate | null = null;
    for (const [subMin, subMax] of subRowResults) {
      if (subMin !== null && (min === null || Temporal.PlainDate.compare(subMin, min) < 0)) {
        min = subMin;
      }
      if (subMax !== null && (max === null || Temporal.PlainDate.compare(subMax, max) > 0)) {
        max = subMax;
      }
    }
    return [min, max] as const;
  },
});

const isPlainTime = (value: unknown): value is Temporal.PlainTime => {
  return value instanceof Temporal.PlainTime;
};

export const aggregation_plain_time_min = constructAggregationFn({
  aggregate: ({ rows, getValue }) => {
    let result: Temporal.PlainTime | null = null;
    for (const row of rows) {
      const value = getValue(row);
      if (!isPlainTime(value)) {
        continue;
      }

      if (result === null || Temporal.PlainTime.compare(value, result) < 0) {
        result = value;
      }
    }
    return result;
  },
  merge: ({ subRowResults }) => {
    let result: Temporal.PlainTime | null = null;
    for (const rowValue of subRowResults) {
      if (!isPlainTime(rowValue)) {
        continue;
      }

      if (result === null || Temporal.PlainTime.compare(rowValue, result) < 0) {
        result = rowValue;
      }
    }
    return result;
  },
});

export const aggregation_plain_time_max = constructAggregationFn({
  aggregate: ({ rows, getValue }) => {
    let result: Temporal.PlainTime | null = null;
    for (const row of rows) {
      const value = getValue(row);
      if (!isPlainTime(value)) {
        continue;
      }

      if (result === null || Temporal.PlainTime.compare(value, result) > 0) {
        result = value;
      }
    }
    return result;
  },
  merge: ({ subRowResults }) => {
    let result: Temporal.PlainTime | null = null;
    for (const rowValue of subRowResults) {
      if (!isPlainTime(rowValue)) {
        continue;
      }

      if (result === null || Temporal.PlainTime.compare(rowValue, result) > 0) {
        result = rowValue;
      }
    }
    return result;
  },
});

export const aggregation_plain_time_extent = constructAggregationFn({
  aggregate: ({ rows, getValue }) => {
    let min: Temporal.PlainTime | null = null;
    let max: Temporal.PlainTime | null = null;
    for (const row of rows) {
      const value = getValue(row);
      if (!isPlainTime(value)) {
        continue;
      }

      if (min === null || Temporal.PlainTime.compare(value, min) < 0) {
        min = value;
      }
      if (max === null || Temporal.PlainTime.compare(value, max) > 0) {
        max = value;
      }
    }
    return [min, max] as const;
  },
  merge: ({ subRowResults }) => {
    let min: Temporal.PlainTime | null = null;
    let max: Temporal.PlainTime | null = null;
    for (const [subMin, subMax] of subRowResults) {
      if (subMin !== null && (min === null || Temporal.PlainTime.compare(subMin, min) < 0)) {
        min = subMin;
      }
      if (subMax !== null && (max === null || Temporal.PlainTime.compare(subMax, max) > 0)) {
        max = subMax;
      }
    }
    return [min, max] as const;
  },
});
