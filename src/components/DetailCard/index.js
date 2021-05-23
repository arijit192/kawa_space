import Style from "./DetailCard.module.css";

export default function DetailCard({ data }) {
  const { name, gender, location, picture } = data;
  return (
    <div className={Style.container}>
      <div className={Style.avatarContainer}>
        <img src={picture.medium} className={Style.avatar} alt="User Avatar" />
      </div>
      <div className={Style.infoContainer}>
        <h2
          className={Style.name}
        >{`${name.title}. ${name.first} ${name.last}`}</h2>
        <p className={Style.address}>
          <span className={Style.streetNumber}>{location.street.number}</span>,{" "}
          {location.city}, {location.state},{" "}
          <span className={Style.country}>{location.country}</span>,{" "}
          {location.postcode}
        </p>
        <p className={Style.zone}>
          {location.timezone.offset} - {location.timezone.description}
        </p>
        <p className={Style.gender}>{gender}</p>
      </div>
    </div>
  );
}
