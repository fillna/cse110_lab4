1. Code in line 12 will print out 3. The loop will terminate at `i = 3` since the input `prices` is an array of length 3. Also, variable `i` is declared by `var`, which makes it accessible in all blocks.

2. Code in line 13 will print out 150. `discountedPrice` is declared using keyword `var`, making it accessible in all blocks. Then, at the final iteration of the loop, `prices[i] = 300`, therefore `discountedPrice` gets redeclared and assigned to 150 according to the formula.

3. Code in line 14 will print out 150. `finalPrice` is declared using keyword `var`, making it accessible in all blocks. Then, at the final iteration of the loop, `finalPrice` gets assigned to the rounded version of `discountedPrice`, which is 150 according to the given input.

4. The function returns [50,100,150]. Each element is the rounded discounted price of its corresponding element in the input `prices`.

5. Line 12 will cause an error because `i` in only accessible within the loop as it was declared using the keyword `let`.

6. Line 13 will cause an error because `discountedPrice` in only accessible within the loop as it was declared using the keyword `let`.

7. Code in line 14 will print out 150. `finalPrice` is declared outside of the loop, making it accessible in all blocks. Although both `i` and `discountedPrice` are declared using `let` within the loop, no error will be caused since they are not accessed outside the loop.
   
8. The function returns [50,100,150]. `discounted` is declared outside of the loop, making it accessible in all blocks. Although both `i` and `discountedPrice` are declared using `let` within the loop, no error will be caused since they are not accessed outside the loop.

9.  Line 12 will cause an error because i in only accessible within the loop as it was declared using the keyword `let`.

10. Line 13 will print out 3. `length` is declared as a constant variable and is not being reassigned by the function, thus it would not cause and error and outputs the length of the input array `prices`.

11. The function returns [50,100,150]. For constant array variable, it cannot be reassigned, but it can be manipulated. That is, there is no issue when doing `push` to a `const` array. 
    
12. A. `student.name` \
    B. `student["Grad Year"]` \
    C. `student.greeting()` \
    D. `student["Favorite Teacher"].name` \
    E. `student.courseLoad[0]`

13. A. '35' since integers map to their exact string representation. \
    B.  1 since string maps to as it is. \
    C.  3 since null coerce to 0. \
    D.  '3null' since null map to string. \
    E.  4 since true maps to 1. \
    F.  0 since both false and null coerce to 0. \
    G.  '3undefined' since null map to string. \
    H.  NaN since undefined maps to NaN.

14. A.  true since string '2' becomes a number 2. \
    B.  false as it is a basic string comparison. \
    C.  true since string '2' becomes a number 2. \
    D.  false since `===` checks the equality without type conversion. \
    E.  false since true maps to 1. \
    F.  true since everything withou a "value" is true in `Boolean()` .

15. `===` checks equality without type conversion while `==` checks equality with type conversion.
    
17. The result is [2,4,6]. Each element in the input `array` gets passed into `doSomething()` as a parameter, which is doubling the element. Then, by pushing the new element into `newArr` and returns it, we the output above.
    
19. 1 4 3 2.