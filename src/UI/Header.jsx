import s from "./Header.module.css";
import i from "../assets/img/header.jpg";
import { Button } from "antd";


const Header = (props) => {
  return (
    <header className={s.header}>
      <img alt={"header"} src={i} />
      <Button onClick={(e) => props.openModal()} type="primary">
        Create Task
      </Button>
    </header>
  );
};

export default Header;
