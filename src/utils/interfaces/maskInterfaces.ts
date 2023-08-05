import {IAddForm} from './formInterfaces';

export type IMasks = keyof IAddForm<string>;
export type IMaskObj = {
  [key in IMasks]: string;
};
