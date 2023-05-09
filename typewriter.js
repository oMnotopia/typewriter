const sentence = "hello there from lighthouse labs\n";

let counter = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, 1000 + counter);
  counter += 50;
}