function fibonacci(input) {
  let i = 0;
  let n = 1;
  let oldN = 0;
  let olderN = 1;

  while (i < input) {
    n = olderN + oldN;
    console.log(n);
    olderN = oldN;
    oldN = n;
    i++;
  }
}
// fibonacci(10);
