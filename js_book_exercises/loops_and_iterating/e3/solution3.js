/*
the cause of the infinite loop is the assignment operation
(counter = 1), each passing loop it reassigns counter to 1 
and evaluates to true, also the counter never became 
greater than 2 to initiate the break statement.
*/