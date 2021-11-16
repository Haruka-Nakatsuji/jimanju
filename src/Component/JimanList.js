import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Icon from "../images/sample.jpg";
import jimanList from "../jimanList.json";

const JimanList = (props) => {

  const [good, setGood] = useState(Number(props.good));
  const [boo, setBoo] = useState(props.boo);

  const deleteJiman = (index) => {
    const newList = [...props.list];
    newList.splice(index, 1);
    props.setList(newList);
  }

  return (
    <li>
      <div className="list-user-icon"><img src={Icon} /></div>
      <div className="list-content">
        <div className="list-top">
          <div className="list-user-name">{props.user}</div>
          <div className="list-user-id">{props.id}</div>
        </div>
        <div className="list-jiman-text">
          {props.jiman}
        </div>
        <div className="list-other">
          <Button variant="danger" onClick={() => setGood(good + 1)}>ええやん！<span> {good}</span></Button>
          <Button variant="primary" onClick={() => setBoo(boo + 1)}>はいはい<span> {boo}</span></Button>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              ...
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {true && <Dropdown.Item onClick={() => deleteJiman(props.index)}>削除</Dropdown.Item>}
              <Dropdown.Item >共有</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </li>
  )
}

export default JimanList;