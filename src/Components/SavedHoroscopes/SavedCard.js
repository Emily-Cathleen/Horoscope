import "./SavedCard.css";

const SavedCard = ({ userHoroscope }) => {
  return(
    <div className="saved-card-container">
      <img className="mushroom-image" src={userHoroscope.img_url} alt="mushroom picture"/>
      <div className="details-container">
        <div className="sign">
          {userHoroscope.sign}
        </div>
        <div className="message">
          {`You will be ${userHoroscope.messages}`}
        </div>
        <div className="mushroom-name">
          {userHoroscope.name}
        </div>
      </div>
    </div>

  )

};

export default SavedCard
