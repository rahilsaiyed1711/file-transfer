import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();


const mailer = async (from:string, to:string, sub:string, text:string, html:any):Promise<any>=>{
  const transporter = nodemailer.createTransport({
    secure: true,
    host: process.env.SMTP_HOST,
    port: 465,
    tls: {
      rejectUnauthorized: true,
      maxVersion: 'TLSv1.2',
    },
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    }
  });
  let receiver =  transporter.sendMail({
    from: `inShare <${from}>`,
    to,
    subject:sub,
    text,
    html ,
  })
  console.log(receiver);
  
}



export {mailer}