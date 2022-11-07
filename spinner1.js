// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1000);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 1500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r|\n   '); 
// }, 2000);

const blink = (content, delay) => {
  setTimeout(() => {
    process.stdout.write(`\r${content}   `);
  }, delay);
};

blink('|', 100);
blink('/', 300);
blink('-', 500);
blink('\\', 700);
blink('|\n', 900);
