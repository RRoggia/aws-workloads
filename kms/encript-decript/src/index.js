const { KMS } = require("@aws-sdk/client-kms");

const KEY_ID = process.env.KEY_ID || ""

const kmsClient = new KMS({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  }
})

async function encryptAndDecrypt() {
  const secret = "This is a secret!"
  const cipherBuffer = Buffer.from(secret, 'utf-8')

  const encryptResponse = await kmsClient.encrypt({
    EncryptionAlgorithm: "SYMMETRIC_DEFAULT",
    KeyId: KEY_ID,
    Plaintext: cipherBuffer
  })

  const { CiphertextBlob } = encryptResponse

  const decryptResponse = await kmsClient.decrypt({
    CiphertextBlob,
    KeyId: KEY_ID
  })

  const { Plaintext: decryptedBuffer } = decryptResponse

  const decipheredSecret = new TextDecoder().decode(decryptedBuffer);

  console.log(decipheredSecret)
}

encryptAndDecrypt()
  .then(() => console.log("finish"))
  .catch(err => console.log(err))