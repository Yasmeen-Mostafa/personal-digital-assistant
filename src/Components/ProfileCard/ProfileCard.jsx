import "./ProfileCard.scss";
const ProfileCard = ({ imageSrc, title, header, info }) => {
  //recieve as an argument the props object but destruct the keys:ES6
  return (
    <div className="profile__card">
      <img src={imageSrc} />
      <div className="data__container">
        <h3>{title}</h3>
        <h4>{header}</h4>
        <p>{info}</p>
      </div>
    </div>
  );
};
export default ProfileCard;
