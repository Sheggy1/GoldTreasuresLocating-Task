Keeping track of Captain Pron’s many gold treasures is starting to get tricky. You've been
tasked with writing a program to match gold treasure IDs to cell locations.
The field, where Captain Pron stores his gold treasures, has an unusual layout, because it
makes it harder to find the location of gold treasures for undesired persons. The field is
stacked in a triangular shape, and the gold treasures are given numerical IDs starting from
the corner, as follows:
| 10
| 6 9
| 3 5 8
| 1 2 4 7
− − − −
Each cell can be represented as points (x, y), with x being the distance from the left edge of
the field, and y being the distance from the bottom edge of the field.
For example, the gold treasure at (1, 1) has ID 1, the gold treasure at (2, 3) has ID 9, and the
gold treasure at (3, 2) has ID 8. This pattern of numbering continues indefinitely (Captain
Pron has been storing a LOT of treasure).
Write a function solution(x, y) which returns the gold treasures ID of the gold at location (x,
y). Each value of x and y will be at least 1 and no greater than 100,000. Since the gold
treasures ID can be very large, return your solution as a string representation of the number.
Languages
=========
To provide a Javascript solution, create solution.js
To provide a Rust solution, create solution.rs
To provide a Go solution, create solution.go
Test cases
========
Input: solution(2, 3)
Output: 9
Input: solution(10, 5)
Output: 96
