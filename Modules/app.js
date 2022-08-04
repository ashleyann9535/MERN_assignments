//Option 1 - destructuring
const { greet, add } = require("./my_module");
greet();
add(5, 7);

//Option 2 - save as a variable
const myCustomModule = require("./my_module");
myCustomModule.greet();
myCustomModule.add(5, 7);

//./my_module -> don't need .js bc knows its a js file and ./ is to locate the node_modules folder