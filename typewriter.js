const sentence = "hello there from lighthouse labs";
let delay = 0;
for (let i = 0; i < sentence.length; i ++) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(sentence[i]);
  }, delay += 50);
}
setTimeout(() => {
  console.log("");
}, delay)