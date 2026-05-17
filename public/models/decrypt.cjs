const crypto = require("crypto");
const fs = require("fs");

const decryptFile = (inputFile, outputFile, password) => {
  const key = crypto.createHash("sha256").update(password).digest();
  
  // Read the entire file
  const input = fs.readFileSync(inputFile);
  
  // Extract the first 16 bytes for the IV
  const iv = input.subarray(0, 16);
  
  // The rest is the encrypted data
  const encrypted = input.subarray(16);

  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
  
  fs.writeFileSync(outputFile, decrypted);
};

decryptFile("character.enc", "character_decrypted.glb", "Character3D#@");
