import React, { useEffect, useState, useContext } from "react";
import { DataContextManager } from "../data/DataContext";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Activities from "../components/Activities/Activities";
import Consumption from "../components/Consumption/Consumption";
//Assets
import imgYoga from "../assets/yoga.png";
import imgSwim from "../assets/swim.png";
import imgBike from "../assets/cycle.png";
import imgGym from "../assets/gym.png";
import imgFire from "../assets/fire.png";
import glucides from "../assets/apple.png";
import iconProtein from "../assets/chicken.png";
import fatty from "../assets/cheeseburger.png";
import Loader from "../components/Buffering/Buffering";
import "../style/Home.css";
//Barchart
import SessionsChart from "../components/LineChart/LineChart";
import WrapperRadarChart from "../components/RadarChart/WrapperRadarChart";
import CreateBar from "../components/BarChart/BarChart";
import ScoreChart from "../components/PieChart/PieChart";
/**
 *
 * @returns {jsx} this page renders the dashboard
 */
function Home() {
  //
  const { id } = useParams();

  const dataSeekers = useContext(DataContextManager);
  const { getUserData, getUserActivity, getUserSessions, getUserPerformance } =
    dataSeekers;
  // States that hold all the data of the users
  const [userMainData, setUserData] = useState([]);
  const [userActivity, setUserActivity] = useState({ data: [] });
  const [userSessions, setUserSessions] = useState({ data: [] });
  const [userPerformance, setUserPerformance] = useState({ data: [] });

  useEffect(() => {
    getUserData(id).then((res) => {
      setUserData(res);
    });
    getUserActivity(id).then((res) => {
      setUserActivity(res);
    });
    getUserSessions(id).then((res) => {
      setUserSessions(res);
    });
    getUserPerformance(id).then((res) => {
      setUserPerformance(res);
    });
  }, [id, getUserData, getUserActivity, getUserSessions, getUserPerformance]);
  // Buffer added for to give a little touch for the async wait.
  if (userMainData.length === 0) {
    return <Loader />;
  }
  return (
    <div className="App">
      <Header />
      <div>
        {/* Side Activities Icons part */}
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
              Bonjour <span>{userMainData.userInfos.firstName}</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏🏽</p>
          </header>
          {/* Chart area */}
          <div className="dashContent">
            <CreateBar
              userActivity={userActivity}
              title="Activité quotidienne"
              xDataKey="day"
              dataKg="kilogram"
              legendDataKg="Poids (kg)"
              dataCal="calories"
              legendData2="Calories brülées (kCal)"
            />
            <SessionsChart
              userSessions={userSessions}
              title="Durée moyenne des sessions"
              xDataKey="day"
              dataLength="sessionLength"
            />

            <WrapperRadarChart userPerformance={userPerformance} />
            <ScoreChart userMainData={userMainData} title="Score" />

            <div className="userDataContanier">
              <Consumption
                className="imgFire"
                img={imgFire}
                data={userMainData.keyData.calorieCount}
                dataType="Calories"
              />
              <Consumption
                className="iconProtein"
                img={iconProtein}
                data={userMainData.keyData.proteinCount}
                dataType="Proteines"
              />
              <Consumption
                className="glucides"
                img={glucides}
                data={userMainData.keyData.carbohydrateCount}
                dataType="Glucides"
              />
              <Consumption
                className="fatty"
                img={fatty}
                data={userMainData.keyData.lipidCount}
                dataType="Lipides"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Home;
