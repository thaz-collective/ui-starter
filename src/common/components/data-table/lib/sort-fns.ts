import { constructSortFn } from '@tanstack/react-table';

type SortableTemporal =
  | Temporal.ZonedDateTime
  | Temporal.Instant
  | Temporal.PlainDateTime
  | Temporal.PlainDate
  | Temporal.PlainTime
  | Temporal.PlainYearMonth
  | Temporal.Duration;

export const sort_temporal = constructSortFn({
  resolveDataValue: (dataValue) => {
    if (
      dataValue instanceof Temporal.ZonedDateTime ||
      dataValue instanceof Temporal.Instant ||
      dataValue instanceof Temporal.PlainDateTime ||
      dataValue instanceof Temporal.PlainDate ||
      dataValue instanceof Temporal.PlainTime ||
      dataValue instanceof Temporal.PlainYearMonth ||
      dataValue instanceof Temporal.Duration
    ) {
      return dataValue;
    }

    return null;
  },
  sort: (dataValueA: SortableTemporal | null, dataValueB: SortableTemporal | null) => {
    if (dataValueA === null && dataValueB === null) {
      return 0;
    }
    if (dataValueA === null) {
      return 1;
    }
    if (dataValueB === null) {
      return -1;
    }

    if (dataValueA instanceof Temporal.ZonedDateTime && dataValueB instanceof Temporal.ZonedDateTime) {
      return Temporal.ZonedDateTime.compare(dataValueA, dataValueB);
    } else if (dataValueA instanceof Temporal.Instant && dataValueB instanceof Temporal.Instant) {
      return Temporal.Instant.compare(dataValueA, dataValueB);
    } else if (dataValueA instanceof Temporal.PlainDateTime && dataValueB instanceof Temporal.PlainDateTime) {
      return Temporal.PlainDateTime.compare(dataValueA, dataValueB);
    } else if (dataValueA instanceof Temporal.PlainDate && dataValueB instanceof Temporal.PlainDate) {
      return Temporal.PlainDate.compare(dataValueA, dataValueB);
    } else if (dataValueA instanceof Temporal.PlainTime && dataValueB instanceof Temporal.PlainTime) {
      return Temporal.PlainTime.compare(dataValueA, dataValueB);
    } else if (dataValueA instanceof Temporal.PlainYearMonth && dataValueB instanceof Temporal.PlainYearMonth) {
      return Temporal.PlainYearMonth.compare(dataValueA, dataValueB);
    } else if (dataValueA instanceof Temporal.Duration && dataValueB instanceof Temporal.Duration) {
      return Temporal.Duration.compare(dataValueA, dataValueB);
    }

    // Return 0 if the values don't match same type for now.
    return 0;
  },
});

// export const sort_zoned_date_time = constructSortFn({
//   resolveDataValue: (dataValue) => {
//     if (dataValue instanceof Temporal.ZonedDateTime) {
//       return dataValue;
//     }
//
//     return null;
//   },
//   sort: (dataValueA: Temporal.ZonedDateTime | null, dataValueB: Temporal.ZonedDateTime | null) => {
//     if (dataValueA === null && dataValueB === null) {
//       return 0;
//     }
//     if (dataValueA === null) {
//       return 1;
//     }
//     if (dataValueB === null) {
//       return -1;
//     }
//
//     return Temporal.ZonedDateTime.compare(dataValueA, dataValueB);
//   },
// });
//
// export const sort_instant = constructSortFn({
//   resolveDataValue: (dataValue) => {
//     if (dataValue instanceof Temporal.Instant) {
//       return dataValue;
//     }
//
//     return null;
//   },
//   sort: (dataValueA: Temporal.Instant | null, dataValueB: Temporal.Instant | null) => {
//     if (dataValueA === null && dataValueB === null) {
//       return 0;
//     }
//     if (dataValueA === null) {
//       return 1;
//     }
//     if (dataValueB === null) {
//       return -1;
//     }
//
//     return Temporal.Instant.compare(dataValueA, dataValueB);
//   },
// });
//
// export const sort_plain_date_time = constructSortFn({
//   resolveDataValue: (dataValue) => {
//     if (dataValue instanceof Temporal.PlainDateTime) {
//       return dataValue;
//     }
//
//     return null;
//   },
//   sort: (dataValueA: Temporal.PlainDateTime | null, dataValueB: Temporal.PlainDateTime | null) => {
//     if (dataValueA === null && dataValueB === null) {
//       return 0;
//     }
//     if (dataValueA === null) {
//       return 1;
//     }
//     if (dataValueB === null) {
//       return -1;
//     }
//
//     return Temporal.PlainDateTime.compare(dataValueA, dataValueB);
//   },
// });
//
// export const sort_plain_date = constructSortFn({
//   resolveDataValue: (dataValue) => {
//     if (dataValue instanceof Temporal.PlainDate) {
//       return dataValue;
//     }
//
//     return null;
//   },
//   sort: (dataValueA: Temporal.PlainDate | null, dataValueB: Temporal.PlainDate | null) => {
//     if (dataValueA === null && dataValueB === null) {
//       return 0;
//     }
//     if (dataValueA === null) {
//       return 1;
//     }
//     if (dataValueB === null) {
//       return -1;
//     }
//
//     return Temporal.PlainDate.compare(dataValueA, dataValueB);
//   },
// });
//
// export const sort_plain_time = constructSortFn({
//   resolveDataValue: (dataValue) => {
//     if (dataValue instanceof Temporal.PlainTime) {
//       return dataValue;
//     }
//
//     return null;
//   },
//   sort: (dataValueA: Temporal.PlainTime | null, dataValueB: Temporal.PlainTime | null) => {
//     if (dataValueA === null && dataValueB === null) {
//       return 0;
//     }
//     if (dataValueA === null) {
//       return 1;
//     }
//     if (dataValueB === null) {
//       return -1;
//     }
//
//     return Temporal.PlainTime.compare(dataValueA, dataValueB);
//   },
// });
