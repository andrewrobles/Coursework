use std::io;

fn main() {
    /*
    let number: u8 = "256".parse().expect("Not a number!");
    println!("number: {number}")
    */

    /*
    let number: u8 = "255".parse().expect("Not a number!");
    println!("number: {number}")
    */

    /*   
    let number: u8 = 2_55;
    println!("number: {number}")
    */

    /*
    let tup: (i32, f64, u8) = (500, 6.4, 1);
    */

    /*
    let tup = (500, 6.4, 1);

    let (x, y, z) = tup;

    println!("The value of y is: {y}");

    let one = tup.2;

    println!("The value of z is: {one}");
    */

    /*
    let mut x: (i32, i32) = (1, 2);

    x.0 = 0;
    x.1 += 5;

    let x0 = x.0;
    let x1 = x.1;

    println!("The value of x is ({x0}, {x1})");
    */

    /*
    let a = [1, 2, 3, 4, 5];
    let a: [i32; 5] = [1, 2, 3, 4, 5];
    */

    let a = [1, 2, 3, 4, 5];

    println!("Please enter an array index.");

    let mut index = String::new();

    io::stdin()
        .read_line(&mut index)
        .expect("Failed to read line");

    let index: usize = index
        .trim()
        .parse()
        .expect("Index entered was not a number");

    let element = a[index];

    println!("The value of the element at index {index} is: {element}");


}
