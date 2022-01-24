import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import Item from "./Item";
import "./Saved.css";

const Saved = () => {
  const [saved, setSaved] = React.useState([]);
  const { user } = useAuth();
  const email = user?.email;
  useEffect(() => {
    fetch(`https://radiant-journey-70403.herokuapp.com/saved/query/${email}`)
      .then((res) => res.json())
      .then((data) => setSaved(data));
  }, [email]);

  return (
    <Container>
      {saved.map((item) => (
        <Item
          setSaved={setSaved}
          saved={saved}
          item={item}
          key={item._id}
        ></Item>
      ))}
    </Container>
  );
};

export default Saved;
