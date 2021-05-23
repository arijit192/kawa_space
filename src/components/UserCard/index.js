import Style from "./UserCard.module.css";
export default function UserCard({
  data,
  changeMainCardInfo,
  index,
  selectedIndex,
}) {
  const { gender, name, email, nat } = data;
  return (
    <div
      className={
        selectedIndex === index ? Style.container_selected : Style.container
      }
      onClick={() => {
        changeMainCardInfo(index);
      }}
    >
      <div>
        <p
          className={
            selectedIndex === index ? Style.gender_selected : Style.gender
          }
        >{`${gender} - ${nat}`}</p>
      </div>
      <div>
        <p
          className={selectedIndex === index ? Style.name_selected : Style.name}
        >{`${name.title} ${name.first} ${name.last}`}</p>
      </div>
      <div>
        <p
          className={
            selectedIndex === index ? Style.email_selected : Style.email
          }
        >
          {email}
        </p>
      </div>
    </div>
  );
}
