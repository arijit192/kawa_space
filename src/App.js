import { useState, useEffect } from "react";
import "./App.css";
import DetailCard from "./components/DetailCard";
import UserList from "./components/UserList";

function App() {
  const [mainCardData, setMainCardData] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  useEffect(() => {
    fetch(
      "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20"
    )
      .then((res) => res.json())
      .then((data) => setUserDetails(data.results));
  }, []);
  const changeMainCardInfo = (value) => {
    setMainCardData(userDetails[value]);
    setSelectedIndex(value);
  };
  return (
    <div className="App">
      {mainCardData !== null ? <DetailCard data={mainCardData} /> : null}
      {userDetails !== null ? (
        <UserList
          data={userDetails}
          changeMainCardInfo={changeMainCardInfo}
          selectedIndex={selectedIndex}
        />
      ) : null}
    </div>
  );
}

export default App;
