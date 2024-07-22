// The io library comes from the standard library, known as std.
// io is not included in the prelude, so we bring it into scope with a use statement.
use std::io;

// The fn syntax declares a new function.
// The main function is the entry point to the program.
fn main() {
    // The exclamation mark (!) makes println a macro, otherwise it would be a function.
    println!("Guess the number!");

    println!("Please input your guess.");

    // The double colon (::) makes new an associated function of the String type.
    // Keyword mut makes guess mutable, otherwise it would be immutable.
    // String is:
    // - a string type provided by the standard library
    // - a growable, UTF-8 encoded bit of text.
    let mut guess = String::new();

    // This is equivalent to `std::io::Stdin` if we did not use `std::io;` before.
    io::stdin()
        // read_line appends user input to a string and returns Result, an enumeration
        // &mut guess was used instead of &guess because references by default immutable 
        .read_line(&mut guess)
        .expect("Failed to read line");
    
    println!("You guessed: {guess}")
}
