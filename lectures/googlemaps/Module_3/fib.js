/*
 * Calculating the first few numbers of the Fibonacci sequence
 *
 * f(n) = f(n-1) + f(n-2)
 */

var count;
var f_2 = 0;
var f_1 = 1;
var f_n;

document.write("<h1>Fibonacci numbers</h1>");
document.write("<ol>"); // start an html list

// Write the start of the sequence
document.write("<li>" + f_2);
document.write("<li>" + f_1);

// Loop to calculate some more values
for (count=1;count<10;count++) {

  f_n = f_1 + f_2; // Calculate f(n)
  document.write("<li>" + f_n); // Write the latest value

  f_2 = f_1; // At the next iteration, f(n-2) will have the value of the current f(n-1)
  f_1 = f_n; // And f(n-1) will have the value of the current f(n)
}

document.write("</ol>");