A *scalar* type represents a single value. Rust has four primary scalar types: integers, floating-point numbers, Booleans, and characters. *Compound types* can group multiple values into one type. Rust has two primitive compound types: tuples and arrays.

An *integer* is a number without a fractional component. *Integer overflow* happens when you try to change an integer to a value outside the range.

*Signed* and *unsigned* refer to whether the number needs to have a sign with it or not. The range of numbers representable by type `i8` is $-(2^{7})$ to $2^{7} - 1$. More generally, the range of numbers representable by type `ix` is $-(2^{x-1})$ to $2^{x-1} - 1$.

Tuples can contain different data types and are fixed length. *Destructuring* is breaking a single tuple into multiple parts, e.g., `let (x, y, z) = tup;`. Tuples without any values are called "unit tuples" or "unit type." The unit type is represented by `()`. It is a special type that is used to represent an empty value or a value that carries no information.

Arrays can only contain one data type and are fixed length. `let a = [3; 5];` creates an array with `5` elements all set to the value of `3` and the syntax is equivalent to `let a = [3, 3, 3, 3, 3]`.
