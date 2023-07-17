import axios from "axios";
import { API_URL } from "../config";

const url = API_URL;

export async function getCMSPages(
  slugName,
  { setItems, setLoading, setError }
) {
  try {
    const response = await axios.get(url + "/" + slugName);
    if (response.status === 200) {
      setItems(response?.data);
      setLoading(false);
    }
  } catch (err) {
    setError(err);
    setLoading(false);
  }
}

export async function getStaticProps({ setStaticProps, setError }) {
  try {
    const response = await axios.get(url + "/sitesetting");
    if (response.status === 200) {
      setStaticProps(response?.data?.data);
      localStorage.setItem(
        "static_props",
        JSON.stringify(response?.data?.data)
      );
    }
  } catch (err) {
    setError(err);
  }
}
