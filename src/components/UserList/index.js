import Style from "./UserList.module.css";
import UserCard from "../UserCard";

export default function UserList({ data, changeMainCardInfo, selectedIndex }) {
  return (
    <div className={Style.container}>
      {data.map((item, index) => (
        <>
          <UserCard
            data={item}
            changeMainCardInfo={changeMainCardInfo}
            index={index}
            selectedIndex={selectedIndex}
          />
        </>
      ))}
    </div>
  );
}
