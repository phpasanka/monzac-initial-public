const settings = require("../server/settings");
const crypto = require("crypto");
class Ciper {
  Encrypt(text, callback) {
    const key = crypto.scryptSync(
      settings.password,
      settings.salt,
      settings.keyLen
    );
    const iv = Buffer.alloc(16, 0);
    const cipher = crypto.createCipheriv(settings.encryptAlgo, key, iv);

    let encrypted = cipher.update(
      text,
      settings.input_encodig,
      settings.output_encodig
    );
    encrypted += cipher.final(settings.output_encodig);
    return callback(null, encrypted.toString(settings.output_encodig));
  }

  Decrypt(text, callback) {
    const key = crypto.scryptSync(
      settings.password,
      settings.salt,
      settings.keyLen
    );
    const iv = Buffer.alloc(16, 0);
    const decipher = crypto.createDecipheriv(settings.encryptAlgo, key, iv);

    let decrypted = decipher.update(
      text,
      settings.output_encodig,
      settings.input_encodig
    );
    decrypted += decipher.final(settings.input_encodig);
    return callback(null, decrypted.toString(settings.input_encodig));
  }
}

module.exports = new Ciper();
