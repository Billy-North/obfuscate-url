import React, { useState } from "react";
import InputField from "./input-field";
import SelectGroup from "./select-group";
import './views.css';

export default function SecureUrl() {
  const [url, setUrl] = useState("");
  const [dateExpiryFormat, setDateExpiryFormat] = useState("None");
  const [dateExpiry, setDateExpiry] = useState(Number || "");
  const [clickExpiry, setClickExpiry] = useState(Number || "");
  const [passphrase, setPassphrase] = useState(String || "");
  const [error, setError] = useState(""); //TODO Add error feedback

  const handleSecureUrlSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    //TODO Post request to API
  }

  return (
    <div className="container">
      <p>Enter a URL:</p>
      <InputField
        placeholder="Enter URL ..."
        inputType="text"
        value={url}
        setValueCallBack={setUrl}
      />
      {url.length > 0 &&
        <>
          <div style={{ paddingTop: "1.3em" }}>
            <InputField
              title="Select Expiry time of the URL: "
              placeholder="Enter a number value "
              inputType="number"
              value={dateExpiry}
              setValueCallBack={setDateExpiry}
            />
            <SelectGroup
              title=""
              options={["Hours", "Days", "Years"]}
              defaultOption="None"
              value={dateExpiryFormat}
              setValueCallBack={setDateExpiryFormat}
            />
          </div>
          <div style={{ paddingTop: "1.3em" }}>
            <InputField
              title="Expiry by number of clicks: "
              placeholder="Enter the number of clicks before the link will expire"
              inputType="number"
              value={clickExpiry}
              setValueCallBack={setClickExpiry}
            />
          </div>
          <div style={{ paddingTop: "1.3em" }}>
            <InputField
              title="Enter a password for the URL: "
              placeholder="Enter passphrase"
              inputType="password"
              value={passphrase}
              setValueCallBack={setPassphrase}
            />
          </div>
          <div style={{ paddingTop: "1.3em" }}>
            <input type="submit"
              value="Submit"
              onClick={handleSecureUrlSubmit}
            />
          </div>
        </>
      }
    </div>
  );
}
