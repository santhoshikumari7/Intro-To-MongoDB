const mongoose = require("mongoose");

let connectToMDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://santhoshikumari:santhoshikumari@bath2408cluster.vp7w6.mongodb.net/?retryWrites=true&w=majority&appName=Bath2408Cluster"
    );

    console.log("Connected to MDB successfully.");
  } catch (err) {
    console.log("Unable to connect to MDB");
  }
};

connectToMDB();
