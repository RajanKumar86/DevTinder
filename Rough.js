app.use((req, res) => {
    res.send("hello from the server 05 !!!");
  });
  
  app.use("/admin", (re1, res) => {
    res.send("admin page");
  });
  
  app.get("/user", (req, res) => {
    res.send("user data sent");
  });



  app.listen(PORT, () => {
    console.log("server is started at the port", PORT);
  });


  app.get("/feed", async (req, res) => {
    try {
      const users = await User.find({});
      res.send(users);
    } catch (err) {
      res.status(404).send("something went wrong!!!");
    }
  });
  
  app.get("/user", async (req, res) => {
    const userEmail = req.body.emailId;
    try {
      const users = await User.find({ emailId: userEmail });
      if (users.length === 0) {
        res.status(404).send("user not found");
      } else {
        res.send(users);
      }
    } catch (err) {
      res.status(400).send("something went wrong" + err.message);
    }
  });
  
  app.delete("/user", async (req, res) => {
    const userId = req.body.userId;
    try {
      const user = await User.findByIdAndDelete({ _id: userId });
      res.send("user deleted sucessfully!!");
    } catch (err) {
      res.status(404).send("something went wrong!!!");
    }
  });
  
  app.patch("/user/:userId", async (req, res) => {
    const userId = req.params?.userId;
    const data = req.body;
  
    try {
      const ALLOWED_UPDATES = [
        "lastName",
        "userId",
        "gender",
        "skills",
        "age",
        "emailId",
      ];
      const isUpdateAllowed = Object.keys(data).every((k) =>
        ALLOWED_UPDATES.includes(k)
      );
      if (!isUpdateAllowed) {
        throw new Error("updates not allowed");
      }
      if (data?.skills.length > 2) {
        throw new Error("skills cannot be grater than 2 ");
      }
  
      const user = await User.findByIdAndUpdate({ _id: userId }, data);
      res.send("user Updated suceesfully !!!");
    } catch (err) {
      res.status(400).send("Update Failed : " + err.message);
    }
  });






