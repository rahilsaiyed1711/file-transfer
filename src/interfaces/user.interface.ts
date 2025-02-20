export interface IFile {
  fileName: string;
  path: string;
  size: number;
  uuid: string;
  sender?: string;
  receiver?: string;
}
