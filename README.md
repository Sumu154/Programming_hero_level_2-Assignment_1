## 1. Differences between interface and type in TypeScript
- interface is best for defining the shape of objects and classes. type is more flexible and can be used for primitives, unions, intersections, and tuples.

- interface supports declaration merging but type does not support declaration merging.

- Both can extend other interfaces or types.

- interface may offer slightly better performance in large codebases during compilation.

So better for us to use interface for object structures and type for advanced or mixed type definitions.

## 2. What is the use of the keyof keyword in TypeScript? Provide an example.

The keyof keyword is used to get a union of all property keys of a given object type as string literals.

It’s useful for creating flexible, type-safe utilities that operate on object keys.


```
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person; 
// Equivalent to: "name" | "age"

const getValue = (obj: Person, key: PersonKeys) => {
  return obj[key];
};

const person: Person = { name: "Alice", age: 25 };
console.log(getValue(person, "name")); // Output: Alice
```

Here, keyof Person ensures only "name" or "age" can be used as the key argument, preventing runtime errors.


## 3. How does TypeScript help in improving code quality and project maintainability?

TypeScript improves code quality and maintainability by adding a strong type system on top of JavaScript. This helps developers catch mistakes early and write more predictable, scalable code. Here are some key example TypeScript contributes

- Catches errors early with static type checking.

- Improves code readability through explicit types.

- Ensures safer refactoring with strong type guarantees.

- Enhances developer experience via better IDE support.

- Helps manage large codebases more effectively.
