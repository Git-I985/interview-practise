import type { Equal, Expect } from "@type-challenges/utils";

type FooKeys = "a" | "b" | "c";

type Foo = { [K in FooKeys]?: string };

type Bar = string;

type FooBar = any;

const cases: FooBar[] = [
  //@ts-expect-error
  {
    foo: {
      a: "asd"
    }
  },
  {
    foo: {
      a: "asd",
      c: "asdas"
    }
  },
  {
    foo: {
      a: "asd"
    },
    bar: "asd"
  },
  {
    foo: {
      a: "asd",
      b: "asdas",
      c: "asdasd",
      //@ts-expect-error
      d: "asdasd"
    }
  },
  {
    foo: {
      a: "asd",
      b: "asdas",
      c: "asdasd"
    },
    //@ts-expect-error
    baz: "asd"
  }
];
