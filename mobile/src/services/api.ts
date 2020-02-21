import axios, { AxiosInstance } from 'axios';
import { Alert } from 'react-native';

class Api {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3003',
    });
  }

  saveToken(token: string): void {
    this.api.defaults.headers.Authorization = `Bearer ${token}`;
  }

  get({ params, pathUrl }): object {
    return this.api
      .get(pathUrl, { params })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        Alert.alert(error.response.data.error);
      });
  }

  post({ data, pathUrl }): object | void {
    return this.api
      .post(pathUrl, data)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        Alert.alert(error.response.data.error);
      });
  }

  put({ data, pathUrl }): object | void {
    return this.api
      .put(pathUrl, data)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        Alert.alert(error.response.data.error);
      });
  }

  delete({ pathUrl }): object | void {
    return this.api
      .delete(pathUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        Alert.alert(error.response.data.error);
      });
  }
}

export default new Api();
