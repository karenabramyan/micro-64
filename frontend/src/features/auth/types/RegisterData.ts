import Credentials from './Credentials';

export default interface RegisterData extends Credentials {
  login: string;
  phone: string;
  secPassword: string;
}
