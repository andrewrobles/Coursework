#### Hello, World!
- Rust uses snake case filename convention
- To run a file:
```bash
$ rustc main.rs
$ ./main
Hello, world!
```
- The `main` function is special: it is always the first code that runs in every executable Rust program.
- `rustfmt` can be used as an autoformatter (more on `rustfmt` in [Appendex D](https://rust-book.cs.brown.edu/appendix-04-useful-development-tools.html))
- To call a macro called `launch_rocket`, use `!` after the macro name, e.g., `launch_rocket!()`
- Rust style is to indent with four spaces, not a tab


