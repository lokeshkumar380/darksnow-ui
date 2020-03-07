import * as constants from "./constants/url_constants";
import axios from "axios";
export default class DesignerService {
  async test() {
    return fetch(
      "http://ec2-3-87-184-180.compute-1.amazonaws.com:3000/designer",
      {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => {
        if (!response.ok) {
          console.info(response);
        }
        return response.json();
      })
      .catch(error => {
        console.error(error);
      });
  }
  async designer_login(designer) {
    console.log(
      "DesignerService.designer_login()" + constants.DESIGNER_LOGIN_URL
    );
    console.info(JSON.stringify(designer));
    return axios
      .post(constants.DESIGNER_LOGIN_URL, JSON.stringify(designer))
      .then(function(response) {
        console.log(response);
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
