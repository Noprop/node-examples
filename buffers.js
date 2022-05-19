const buf = Buffer.from("hey!"); // this looks like [0x68, 0x65, 0x79, 0x21]
const buf2 = Buffer.alloc(1024);

// add the string 'Hey!' to the second buffer
buf2[0] = 72;  //        128 16 8421
buf2[1] = 101; // 0x65 -> 0110  0101 -> 101
buf2[2] = 121; // 0x79 -> 0111  1001 -> 121
buf2[3] = 33;  // 0x21 -> 0010  0001 -> 33

console.log("buf: ", buf);
console.log("buf string: ", buf.toString());
console.log("buf2: ", buf2);
console.log("buf2 string: ", buf2.toString());
