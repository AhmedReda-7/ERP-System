import axios from "axios"

export default function APICall (method, url, data) {
    return axios({
      method,
      url,
      data
    });
  }