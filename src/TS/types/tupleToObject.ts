import type { Equal, Expect } from "@type-challenges/utils";
/*
  Given an array, transform it into an object type 
  and the key/value must be in the provided array.

  Example:

  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

  type result = TupleToObject<typeof tuple> 
  expected { 
    'tesla': 'tesla',
    'model 3': 'model 3',
    'model X': 'model X',
    'model Y': 'model Y'
  }
*/

/* _____________ Your Code Here _____________ */
type TupleToObject<T extends readonly any[]> = any;

/* _______ Test Cases (dont tuch!) _________ */
const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
const tupleNumber = [1, 2, 3, 4] as const;
const tupleMix = [1, "2", 3, "4"] as const;

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<
    Equal<TupleToObject<typeof tupleMix>, { 1: 1; "2": "2"; 3: 3; "4": "4" }>
  >
];

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;
