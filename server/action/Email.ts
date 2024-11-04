"use server"

import nodemail from "nodemailer";


export const sendEmail = async (email:string, name:string,message:string) => {
  

  const transporter = nodemail.createTransport({
      host:"mail.teamrabbil.com",
        port:25,
        secure:false,
        auth:{user:"info@teamrabbil.com", pass:"~sR4[bhaC[Qs"},
        tls:{rejectUnauthorized:false}

  })
  let MailOption={
       from:"Portfolio <info@teamrabbil.com>",
       to: "abdullahalhadi71852@gmail.com",
       subject:"Portfolio - Email",
       text: `email: ${email} name: ${name} message: ${message}`,
    }
  return await transporter.sendMail(MailOption)

}