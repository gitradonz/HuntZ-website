const mail = require("@sendgrid/mail");

export default async (req, res) => {
  mail.setApiKey(process.env.SENDGRID_API_KEY);
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
  try {
    await mail.send(data);
    res.status(200).json({ status: "OK" });
  } catch (error) {
    res.status(500).json({ error: "Error sending email" });
  }
};
