import { useState } from "react";
import Axios from "axios";
import axios from "axios";

export default function App() {
  return (
    <div>
      <Mycomponent />
    </div>
  );
}
function Mycomponent() {
  const [message, setmessage] = useState("");
  const [list, setlist] = useState([]);

  const messagehandle = (e) => {
    setmessage(e.target.value);
  };
  const sendnow = () => {
    if (message == "") {
      alert("Enter the Mesaage");
      return;
    }

    const data = {
      message: message,
    };
    axios.post("http://localhost:4000/store", data);

    const newlist = [...list, data];
    setlist(newlist);
    // console.log(newlist);
    setmessage("");
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col bg-dark text-light">
          <span>
            <b style={{ fontSize: "25px" }}>MyChatApp</b>
          </span>
          <span> By Harshad Pachpinde, Id:210940520031</span>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-10">
          <input
            type="text"
            value={message}
            onChange={messagehandle}
            className="form-control"
            id=""
          />
        </div>
        <div className="col-2">
          <input
            type="button"
            className="btn btn-dark"
            value="SEND"
            onClick={sendnow}
          />
        </div>
      </div>
      <div className="row mt-2">
        {list.map((item, index) => (
          <div key={index}>
            <div className={index % 2 == 0 ? "text=start" : "text-end"}>
              <h3 className="bg-light border fw-lighter p-2">{item.message}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
