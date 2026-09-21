console.log("1: sync");
(async () => {
console.log("2: async body");
await Promise.resolve();
console.log("3: after await");
})();
setTimeout(() => console.log("4: timeout 0"), 0);
Promise.resolve().then(() => console.log("5: then"));
console.log("6: sync end");