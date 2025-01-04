import mongoose from "mongoose";

export default async function ConnectDB() {
  const connection = await mongoose.connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  const response = await connection;
}
