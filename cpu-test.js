function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Starting CPU-intensive task...");
const result = fibonacci(40); // Adjust the value to increase or decrease CPU usage
console.log(`Result: ${result}`);