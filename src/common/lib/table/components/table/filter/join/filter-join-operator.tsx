// import { Select } from '#src/common/components/select';
// import { useDynamicFilter } from '#src/common/lib/table/components/table/filter/use-dynamic-filter';
// import { isDynamicColumnFilter } from '#src/common/lib/table/lib/dynamic-filter/filter-util';
//
// import type { JoinOperatorOption } from './options';
// import { joinOperatorVariants } from './variants';
//
// interface FilterJoinOperatorProps {
//   filterID: string;
//   label: string;
//   options: JoinOperatorOption[];
// }
//
// export function FilterJoinOperator(props: FilterJoinOperatorProps) {
//   const { filterID, label, options } = props;
//   const { columnFilters, updateJoinOperator } = useDynamicFilter();
//
//   const filter = columnFilters.find((candidate) => candidate.filterID === filterID);
//
//   if (!isDynamicColumnFilter(filter)) {
//     throw new Error('Filter ID is mismatched type');
//   }
//
//   const { operatorTrigger } = joinOperatorVariants();
//
//   return (
//     <Select
//       aria-label={`${label} filter operator`}
//       value={filter.joinOperator}
//       onChange={(key) => {
//         const option = options.find((value) => value.operator === key);
//
//         if (option === undefined) {
//           return;
//         }
//
//         updateJoinOperator(filter.id, option.operator);
//       }}
//     >
//       <Select.Trigger className={operatorTrigger()}>
//         <Select.Value />
//       </Select.Trigger>
//       <Select.Popover>
//         <Select.ListBox>
//           {options.map((value) => (
//             <Select.Item
//               key={value.operator}
//               id={value.operator}
//               textValue={value.label}
//             >
//               {value.label}
//             </Select.Item>
//           ))}
//         </Select.ListBox>
//       </Select.Popover>
//     </Select>
//   );
// }
