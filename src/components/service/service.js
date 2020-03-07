import axios from "axios";

export class HttpService {
  login() {
    axios
      .post(
        "http://ec2-3-87-184-180.compute-1.amazonaws.com:3000/user_login",
        object
      )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
