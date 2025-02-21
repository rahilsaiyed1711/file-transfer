export interface IFile {
  fileName: string;
  path: string;
  size: number;
  uuid: string;
  sender: string;
  receiver?: string;
}
export interface IMail {
  uuid: string;
  emailTo: string;
  emailFrom: string;
}

export interface emailFields {
  to: string;
  msg: string;
  sub: string;
}

export interface ITemplate {
  emailFrom: string;
  downloadLink: string;
  size: string;
  expires: string;
}
