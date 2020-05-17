"use strict";

const settings = {
  password: "mhtOhN^)#8qhs_$s38n|^2NplFa&|}+1",
  iv: Buffer.allocUnsafe(16),
  salt: 10,
  encryptAlgo: "aes256",
  input_encodig: "utf8",
  output_encodig: "hex",
  keyLen: 32,
  salt: "salt",
  dbProduction: "MonzacStore",
  mongoUrl:
    "mongodb+srv://admin:2uqRqFfzZW6iiODh@monzacstore-1khfz.azure.mongodb.net/test?retryWrites=true&w=majority",
};

module.exports = Object.freeze(settings);
