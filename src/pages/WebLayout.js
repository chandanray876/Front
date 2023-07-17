import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import { Storage_URL } from "../config";
import { getStaticProps } from "../_api/staticPageServices";
import BadRequest from "./500";

export default function WebLayout() {
  const [staticProps, setStaticProps] = useState([]);
  const [error, setError] = useState(null);
  const [banner, setBanner] = useState("");
  const [headerLogo, setHeaderLogo] = useState("");
  const [footerLogo, setFooterLogo] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState();
  const [appName, setAppName] = useState("");

  useEffect(() => {
    let settings = localStorage.getItem("static_props");
    const parsedSettings = JSON.parse(settings);
    if (parsedSettings && parsedSettings.length > 0) {
      setStaticProps(parsedSettings);
    } else {
      getStaticProps({ setStaticProps, setError });
    }
  }, []);

  useEffect(() => {
    if (staticProps.length > 0) {
      staticProps.forEach((setting) => {
        switch (setting.slug) {
          case "MAIN_FAVICON":
            setHeaderLogo(Storage_URL + setting.config_value);
            const favicon = document.getElementById("favicon");
            favicon.href = Storage_URL + setting.config_value;
            break;
          case "MAIN_LOGO":
            setFooterLogo(Storage_URL + setting.config_value);
            break;
          case "APP_NAME":
            const title = document.getElementById("title");
            title.innerHTML = setting.config_value.toUpperCase();
            setAppName(setting.config_value);
            break;
          case "BANNER":
            setBanner(Storage_URL + setting.config_value);
            break;
          case "ADDRESS":
            setAddress(setting.config_value);
            break;
          case "PHONE":
            setPhone(setting.config_value);
            break;
          case "CONTACT_EMAIL":
            setEmail(setting.config_value);
            break;
          default:
            break;
        }
      });
    }
  }, [staticProps]);

  return error ? (
    <BadRequest />
  ) : (
    <>
      <Header logo={headerLogo} />
      <Outlet context={{ banner: banner }} />
      <Footer
        setting={{
          logo: footerLogo,
          address: address,
          email: email,
          phone: phone,
          appName: appName,
        }}
      />
    </>
  );
}
