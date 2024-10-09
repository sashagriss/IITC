const greet = (cb, name) => {
  cb(name);
};
const message = (str) => {
  console.log(`Hello ${str}`);
};
greet(message, "Sasha");
