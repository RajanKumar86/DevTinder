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


  
  