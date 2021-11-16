import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { FloatingLabel } from 'react-bootstrap';
import '../App.css';
import { useContext, useState } from 'react';
import { setStatusContext } from '../App';
import jimanList from "../jimanList.json";
import JimanList from './JimanList';
import Header from './Header';
import UserData from "../data.json";

const MainApp = () => {
  const {
    currentUserNum,
    setCurrentUserNum
  } = useContext(setStatusContext);

  const nowUser = UserData.users[currentUserNum];
  const [jimanText, setJimanText] = useState("");
  const [list, setList] = useState(jimanList.jimanList);

  const transmitJiman = () => {
    const newValues = {
      "user": nowUser.name,
      "id": nowUser.id,
      "icon": nowUser.icon,
      "good": 0,
      "boo": 0,
      "jiman": jimanText
    }
    setList([...list, newValues]);
    setJimanText("");
  }

  return (
    <>
      <Header />
      <main className="mainapp">
        <div className="wrapper">
          <Form className="top-inputjimanarea">
            <FloatingLabel controlId="floatingTextarea" label="jimanを入力しちゃおう！">
              <Form.Control as="textarea" maxLength="240" placeholder="jiman" value={jimanText} onChange={(e) => setJimanText(e.target.value)} style={{ height: '200px', resize: 'none' }} />
            </FloatingLabel>
            <span>{240 - jimanText.length}</span>
            <Button className="top-submit-btn" variant="outline-danger" onClick={transmitJiman}>自慢する</Button>
          </Form>
          <ul className="jiman-list">
            {list.map((li, index) => (
              <JimanList user={li.user} id={li.id} icon={li.icon} good={li.good} boo={li.boo} jiman={li.jiman} key={index} index={index} list={list} setList={setList} />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default MainApp;