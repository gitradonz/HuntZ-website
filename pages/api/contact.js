const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  const body = JSON.parse(req.body);
  const message = `
  Email: ${body.email}\r\n
  Message: ${body.message}
`;
  const data = {
    to: "pablo10xz@hotmail.com",
    from: "pabloriosrdn@gmail.com",
    subject: `New message from ${body.email}`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

  // console.log(data);
  mail
    .send(data)
    .then(() => {
      console.log("Email sent", data);
    })
    .catch((error) => {
      console.error(error);
    });

  res.status(200).json({ status: "OK" });
};
