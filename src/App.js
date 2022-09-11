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
import Error from "./pages/404Error";
//Barchart
import SessionsChart from "./components/LineChart/LineChart";
import WrapperRadarChart from "./components/RadarChart/WrapperRadarChart";
import ActivityChartBar from "./components/BarChart/BarChart";
import ScoreChart from "./components/PieChart/PieChart";
//Data
import { useEffect, useState } from "react";
import MockData from "./data/data";
import {
  dataUserActivity,
  getFullInformation,
  dataAverageSessions,
  dataPerformance,
} from "./data/DataSorter";
function App() {
  console.log(MockData);

  // //HOW THAT YOU PASS THE DATA HERE

  const [userMainInformation, setuserMainInfo] = useState(null);
  console.log(userMainInformation);

  const [userActivity, setuserActivity] = useState(null);
  console.log(userActivity);

  const [averageSessions, setaverageSessions] = useState(null);
  console.log(averageSessions);

  const [radarActivity, setradarActivity] = useState(null);
  console.log(radarActivity);

  useEffect(() => {
    (async () => {
      setuserMainInfo(await getFullInformation());
      setuserActivity(await dataUserActivity());
      setaverageSessions(await dataAverageSessions());
      setradarActivity(await dataPerformance());
    })();
  }, []);

  if (!userMainInformation) return <Error />;
  return (
    <div className="App">
      <Header />

      <aside>
        <div className="activities-1">
          <Activities img={imgYoga} alt="Yoga" />
          <Activities img={imgSwim} alt="Swimming" />
          <Activities img={imgBike} alt="Cycling" />
          <Activities img={imgGym} alt="Gym" />
        </div>
        <p className="copyrights">Copyrights, sportSee 2020</p>
      </aside>
      <section className="dashboardSection">
        <header className="dashboardHeader">
          <h1>
            Bonjour <span>{userMainInformation.userInfos.firstName} </span>
          </h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏🏽</p>
        </header>
        {/* Chart area need to resize and insert the correct tags */}
        <div className="dashContent">
          <ActivityChartBar
            data={userActivity.sessions}
            title="Activité quotidienne"
            xDataKey="day"
            dataKg="kilogram"
            legendDataKg="Poids (kg)"
            dataCal="calories"
            legendData2="Calories brülées (kCal)"
          />
          <SessionsChart
            data={averageSessions.sessions}
            title="Durée moyenne des sessions"
            xDataKey="day"
            dataLength="sessionLength"
          />
          {/* SHOW THAT YOU ADD .KIND TO GET THE KIND THROUGH PROPS */}
          <WrapperRadarChart data={radarActivity} />
          <ScoreChart data={userMainInformation.todayScore} title="Score" />

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
              dataType="Proteines"
            />
            <Consumption
              className="glucides"
              img={glucides}
              data={userMainInformation.keyData.carbohydrateCount}
              dataType="Glucides"
            />
            <Consumption
              className="fatty"
              img={fatty}
              data={userMainInformation.keyData.lipidCount}
              dataType="Lipides"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
