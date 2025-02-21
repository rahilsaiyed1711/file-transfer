import { Request, Response } from 'express';
import { IMail } from '../interfaces/user.interface';
import { mailer } from '../services/email.services';
import { htmlTemplate } from '../services/emailTemplate';
import { File } from '../models/file.model';

const sendMail = async (req: Request, res: Response): Promise<any> => {
  console.log(req.body);
  const { uuid, emailTo, emailFrom }: IMail = req.body;

  // Validation of request must be done first
  if (!uuid || !emailFrom || !emailTo) {
    return res.status(422).json({ error: 'all fields are required' });
  }

  const file: any = await File.findOne({ uuid: uuid });
  if (file.sender) {
    return res.status(422).json({ error: 'email sent already' });
  }
  
  file.sender = emailFrom;
  file.receiver = emailTo;

  const response = await file.save();
  await mailer(
    emailFrom,
    emailTo,
    `you have received a file`,
    `${emailFrom} shared a file with you`,
    htmlTemplate({
      emailFrom: emailFrom,
      downloadLink: `${process.env.APP_BASE_URL}/files/${file.uuid}?source=email`,
      size: `${(file.size / 1000).toFixed(0)} KB`,
      expires: '24 hours',
    })
  );

  return res.send({ success: "sent mail" });
};

export { sendMail };
