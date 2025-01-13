import nodemailer from "nodemailer";

function SendEmail(name, email, password) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "abhayv2704@gmail.com",
      pass: "mymy xsxk qvpy eapq",
    },
  });

  var mailOptions = {
    from: "abhayv2704@gmail.com",
    to: email,
    subject: "Verification Email eAuction",
    html:
      "<h1>Hi " +
      name +
      " Welcome to eAuction</h1><p>You have successfully register on our site , Your login credentials are attached below..</p><h3>Name = " +
      name +
      "</h3><h3>Username = " +
      email +
      "</h3><h3>Password = " +
      password +
      "</h3><h2>Click on the link below to verify your account</h2><a href='http://localhost:3000/verify/" +
      email +
      "'" +
      ">Click here to verify</a>",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

export default SendEmail;
