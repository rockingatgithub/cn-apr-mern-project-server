const nodemailer = require('nodemailer')
  
  const sendMailer = () => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: "cyberkingsid@gmail.com",
          pass: "",
        },
      });
      
      let mailOptions = {
        from: 'cyberkingsid@gmail.com',
        to: "monomoy230@gmail.com",
        subject: `The food has been ordered`,
        html: `Food is tasty`,
        // attachments: [
        //   {
        //     filename: `${name}.pdf`,
        //     path: path.join(__dirname, `../../src/assets/books/${name}.pdf`),
        //     contentType: 'application/pdf',
        //   },
        // ],
      };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          res.json(err);
        } else {
          console.log(res.json(info));
        }
      });

  }

  module.exports = sendMailer

