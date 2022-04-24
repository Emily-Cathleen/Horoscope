import "./SavedCard.css";

const SavedCard = ({ userHoroscope }) => {
  return(

    <div className="saved-card-container">
      <img className="mushroom-image" src={userHoroscope.img_url} alt="mushroom picture"/>
      <div className="horoscope-details-container">
        <div className="sign">
          {userHoroscope.sign}
        </div>
        <div className="mushroom-name">
          {userHoroscope.name}
        </div>
      </div>
    </div>

  )

}

export default SavedCard
