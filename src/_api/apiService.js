import axios from "axios";
import { API_URL } from "../config";

export async function api(options, ctx = null) {
  try {
    const base_url = API_URL;
    const res = await axios({
      headers: { Authorization: `Bearer ${options.token}` },
      url: base_url + options.url,
      method: options.method,
      data: options.data,
    });
    return res;
  } catch (err) {
    return err;
  }
}
