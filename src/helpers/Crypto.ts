import { EncryptionTransformer } from "typeorm-encrypted";
import dotenv from 'dotenv'

dotenv.config()

const Crypto = new EncryptionTransformer({
  key: `${process.env.DB_KEY}`,
  algorithm: 'aes-256-cbc',
  ivLength: 16,
  iv: process.env.DB_IV
})


export default Crypto;