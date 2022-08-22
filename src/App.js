import "./style/App.css";
//components
import Header from "./components/Header/Header";
import Activities from "./components/Activities/Activities";
import Consumption from "./components/Consumption/Consumption";
//Assets
import imgYoga from "./assets/yoga.png";
import imgSwim from "./assets/swim.png";
import imgBike from "./assets/cycle.png";
import imgGym from "./assets/gym.png";
import imgFire from "./assets/fire.png";
import glucides from "./assets/apple.png";
import iconProtein from "./assets/chicken.png";
import fatty from "./assets/cheeseburger.png";
//Data
import MockData from "./data/data";
import { dataUserActivity, dataUserInforMain } from "./data/DataSorter";
function App() {
  //console.log(MockData);
  const userMainInformation = dataUserInforMain(MockData);
  // console.log(userMainInformation);
  const userActivity = dataUserActivity(MockData);
  //console.log(userActivity.sessions[3]);

  return (
    <div className="App">
      <Header />
      <section>
        <aside>
          <div className="activities-1">
            <Activities img={imgYoga} alt="Yoga" />
            <Activities img={imgSwim} alt="Swimming" />
            <Activities img={imgBike} alt="Cycling" />
            <Activities img={imgGym} alt="Gym" />
          </div>
          <p className="copyrights">Copyrights, sportSee 2020</p>
        </aside>
        <div className="dashboardSection">
          <header className="dashboardHeader">
            <h1>Bonjour {userMainInformation.userInfos.firstName}</h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏🏽</p>
          </header>
          <div className="dashContent">
            <div className="dailyAct"></div>
            <div className="avergAct"></div>
            <div className="actType"></div>
            <div className="score"></div>
            <div className="userDataContanier">
              <Consumption
                className="imgFire"
                img={imgFire}
                data={userMainInformation.keyData.calorieCount}
                dataType="Calories"
              />
              <Consumption
                className="iconProtein"
                img={iconProtein}
                data={userMainInformation.keyData.proteinCount}
                dataType="Protein"
              />
              <Consumption
                className="glucides"
                img={glucides}
                data={userMainInformation.keyData.carbohydrateCount}
                dataType="glucides"
              />
              <Consumption
                className="fatty"
                img={fatty}
                data={userMainInformation.keyData.lipidCount}
                dataType="fatty"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
