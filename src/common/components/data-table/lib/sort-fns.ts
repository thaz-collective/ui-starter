import { constructSortFn } from '@tanstack/react-table';

export const sort_zoned_date_time = constructSortFn({
  resolveDataValue: (dataValue) => {
    if (dataValue instanceof Temporal.ZonedDateTime) {
      return dataValue;
    }

    return null;
  },
  sort: (dataValueA: Temporal.ZonedDateTime | null, dataValueB: Temporal.ZonedDateTime | null) => {
    if (dataValueA === null && dataValueB === null) {
      return 0;
    }
    if (dataValueA === null) {
      return 1;
    }
    if (dataValueB === null) {
      return -1;
    }

    return Temporal.ZonedDateTime.compare(dataValueA, dataValueB);
  },
});

export const sort_instant = constructSortFn({
  resolveDataValue: (dataValue) => {
    if (dataValue instanceof Temporal.Instant) {
      return dataValue;
    }

    return null;
  },
  sort: (dataValueA: Temporal.Instant | null, dataValueB: Temporal.Instant | null) => {
    if (dataValueA === null && dataValueB === null) {
      return 0;
    }
    if (dataValueA === null) {
      return 1;
    }
    if (dataValueB === null) {
      return -1;
    }

    return Temporal.Instant.compare(dataValueA, dataValueB);
  },
});

export const sort_plain_date_time = constructSortFn({
  resolveDataValue: (dataValue) => {
    if (dataValue instanceof Temporal.PlainDateTime) {
      return dataValue;
    }

    return null;
  },
  sort: (dataValueA: Temporal.PlainDateTime | null, dataValueB: Temporal.PlainDateTime | null) => {
    if (dataValueA === null && dataValueB === null) {
      return 0;
    }
    if (dataValueA === null) {
      return 1;
    }
    if (dataValueB === null) {
      return -1;
    }

    return Temporal.PlainDateTime.compare(dataValueA, dataValueB);
  },
});

export const sort_plain_date = constructSortFn({
  resolveDataValue: (dataValue) => {
    if (dataValue instanceof Temporal.PlainDate) {
      return dataValue;
    }

    return null;
  },
  sort: (dataValueA: Temporal.PlainDate | null, dataValueB: Temporal.PlainDate | null) => {
    if (dataValueA === null && dataValueB === null) {
      return 0;
    }
    if (dataValueA === null) {
      return 1;
    }
    if (dataValueB === null) {
      return -1;
    }

    return Temporal.PlainDate.compare(dataValueA, dataValueB);
  },
});

export const sort_plain_time = constructSortFn({
  resolveDataValue: (dataValue) => {
    if (dataValue instanceof Temporal.PlainTime) {
      return dataValue;
    }

    return null;
  },
  sort: (dataValueA: Temporal.PlainTime | null, dataValueB: Temporal.PlainTime | null) => {
    if (dataValueA === null && dataValueB === null) {
      return 0;
    }
    if (dataValueA === null) {
      return 1;
    }
    if (dataValueB === null) {
      return -1;
    }

    return Temporal.PlainTime.compare(dataValueA, dataValueB);
  },
});
