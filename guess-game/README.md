### Importing the IO Library
```rust
use std::io;
```
The `io` input/output library comes from the `std` standard library. Rust has set of items of items defined in the standard library that it implicitly brings into the scope of every program, known as the **prelude**. The `io` library is not included in the *prelude*, so we bring it into scope with a `use` statement.

### Declaring a String
```rust
let mut guess = String::new();
```

Keyword `mut` makes guess mutable, otherwise it would be immutable. The double colon `::` indicates that `new` is as an *associated function* of the *String* type. An **associated function** is a function that's implemented on a type. **String** is a string type provided in the *prelude* that is a growable, UTF-8 encoded bit of text.


### Getting User Input
```rust
io::stdin()
    .read_line(&mut guess)
    .expect("Failed to read line")
```
If we hadn’t imported the io library with use `std::io;` at the beginning of the program, we could still use the function by writing this function call as `std::io::stdin`. The `stdin `function returns an instance of `std::io::Stdin`, which is a type that represents a handle to the standard input for your terminal.

Next, the line `.read_line(&mut guess)` calls the `read_line` method on the standard input handle to get input from the user. `read_line` appends user input to a string and returns an *enumeration* called Result. An **enumeration**, often called an enum, is a type that can be in one of multiple possible states, in which a state is called a variant. `&mut` guess was used instead of `&guess` because references are immutable by default.

The variants of `Result` are `Err`, which contains details of what went wrong and `Ok`, which contains the successfully generated value. `expect` belongs to type `Result` and it handles the `Err` variant by crashing and displaying the message that you passed to `expect` and it handles the `Ok` variant by returning the value that `Ok` is holding so you can use it. In this case, that number is the number of bytes in the user's input. If you do not call the `expect` method, you get a warning saying that a `Result`, the value returned from `read_line` was not used, which indicates that the program hasn't handled a possible error.