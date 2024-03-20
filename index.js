let express = require("express");
let app = express();

app.use(express.static("sit725-2023-t2-prac1-/public_html"));
app.use(express.urlencoded({ extended: true }));

app.post("/add", (req, res) => {
  let num1 = parseInt(req.body.num1);
  let num2 = parseInt(req.body.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send("Invalid numbers. Please enter valid integers.");
  } else {
    const sum = num1 + num2;
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <title>Result</title>
          <meta charset="utf-8" />
        </head>
        <body>
          <h1>The sum is: ${sum}</h1>
        </body>
      </html>
    `);
  }
});

app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
