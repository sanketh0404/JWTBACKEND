import jwt from "jsonwebtoken";

const secretKey = "12345"; // ⚠️ In production, store in .env

// Function to encrypt data into JWT
function encryptData() {

  const data = { name: "sanketh",  age: 22 };

  const token = jwt.sign(data, secretKey, { expiresIn: "10m" });

  console.log("Encrypted Token:", token);

}

encryptData() 

// Function to decrypt JWT back to original data
function decryptData()
{
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2Fua2V0aCIsImFnZSI6MjIsImlhdCI6MTc1NTU5NzYwMiwiZXhwIjoxNzU1NTk4MjAyfQ.1UExavxfmk2BBEMR96fO8MEwPN_Q-ADmQpnEtSqxxPQ"
const decoded = jwt.verify(token, secretKey);
  console.log("Decrypted Data:", decoded);

}

decryptData();
