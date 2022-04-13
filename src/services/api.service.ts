import { sleep } from '../utils/time.util';
import { MOCK_API_EMAIL, MOCK_API_PASSWORD, MOCK_API_TOKEN, MOCK_API_WAIT_MILLIS } from '../consts';

class ApiService {
  static login(email: string, password: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      sleep(MOCK_API_WAIT_MILLIS).then(() => {
        if (email === MOCK_API_EMAIL && password === MOCK_API_PASSWORD) {
          resolve(MOCK_API_TOKEN);
        } else {
          reject('Login API failed.');
        }
      })
    })
  }
}

export default ApiService;
