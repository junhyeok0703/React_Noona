import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import SearchBox from "./components/SearchBox";
/*
1.옆에 name하고 핸드폰 번호치고 create누르면 옆에 연락처목록에 추가가 된다.
2.리스트에 아이템이 몇개있는지 보인다.
3.사용자가 이름검색으로 찾을수있다.
*/
function App() {
  return (
    <div>
      <h1 className="title"> 연락처 </h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
