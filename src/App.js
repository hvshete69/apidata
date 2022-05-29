import React from "react";
import logo from "./logo.svg";
import axios from "axios";

import "./App.css";

function App() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios.get("https://cafe-peter-mern.herokuapp.com/read").then((res) => {
      setData(res.data);
    });
  }, []);
  console.log("data", data);
  return (
    <>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection:'column'
      }}
    >
      {data?.map((user, index) => {
        return (
          <div slyle={{ display: "flex", flexDirection:'column' }}>
            <table
              style={{
                borderCollapse: "collapse",
                width: "90%",
                border: "1px solid #ccc",
              }}
            >
              <tr>
                <td id="left" style={{ width: "30%" }}>
                  Serial No.
                </td>
                <td id="left" style={{ width: "30%" }}>
                  Name
                </td>
                <td id="center" style={{ width: "40%" }}>
                  Email
                </td>
                <td id="right" style={{ width: "30%" }}>
                  Phone
                </td>
              </tr>
              <tr>
                <td>{user?.index}</td>
                <td>{user?.userName}</td>
                <td>{user?.email}</td>
                <td>{user?.phone}</td>
              </tr>
            </table>
            
          </div>
        );
      })}
    </div>
    </>

  );
}

export default App;
