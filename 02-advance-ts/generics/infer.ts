type ElementType<T> = T extends (infer U)[] ? U : never;

type StringElement = ElementType<string[]>;

type NumberElement = ElementType<number[]>;

type BooleanElement = ElementType<boolean>;
