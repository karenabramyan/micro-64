import Paper from './paper';
import Root from './root';

export default interface Info {
  id: string;
  title: string;
  description: string;
  // padding?: string;
  // textAlign?:string;
  // color?: string;
  root?: Root;
  paper?: Paper;
}
