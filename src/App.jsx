import React, { useEffect } from "react";
import Main from "./components/Main";
import Header from "./components/Header";

export default function App(props) {
  const [show, setShow] = React.useState(true);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}
