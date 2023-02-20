import { twoSum } from "./twoSum";

type TestCaseFor<T extends (...args: any) => any> = [
  Parameters<T>,
  ReturnType<T>
];

const cases: Array<TestCaseFor<typeof twoSum>> = [
  [
    [[2, 7, 11, 15], 9],
    [0, 1]
  ],
  [
    [[3, 2, 4, 8, 16, 32, 64], 6],
    [1, 2]
  ],
  [
    [[3, 3], 6],
    [0, 1]
  ]
];

it.each(cases)("twoSum with input %p should return %p", (args, expected) => {
  expect(twoSum(...args)).toEqual(expected);
});
