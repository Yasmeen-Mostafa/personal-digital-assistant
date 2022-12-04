import "./App.scss";
import ProfileCard from "./Components/ProfileCard/ProfileCard";
import alexa from "./assets/Images/alexa.png";
import cortana from "./assets/Images/cortana.png";
import siri from "./assets/Images/siri.png";

function App() {
  return (
    <div className="app">
      <h1>Personal Digital Assistance</h1>
      <div className="card__container">
        <ProfileCard
          // attributes sent as an object  to the child component 'profile card'
          imageSrc={alexa}
          title="Alexa"
          header="@Alexa99"
          info="I'll help you buy stuff of Amazon"
        />
        <ProfileCard
          imageSrc={cortana}
          title="Cortana"
          header="@cortana12"
          info="Personal assistant by microsoft"
        />
        <ProfileCard
          imageSrc={siri}
          title="Siri"
          header="@siri44"
          info="I don't get a lot of updates anymore"
        />
      </div>
    </div>
  );
}

export default App;
