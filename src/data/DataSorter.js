import fullData from "./data";

function dataUserInforMain(data1) {
  return data1.USER_MAIN_DATA[0];
}

function dataUserActivity(data2) {
  return data2.USER_ACTIVITY[0];
}
function dataAverageSessions(data3) {
  return data3.USER_AVERAGE_SESSIONS[0];
}

function dataPerformance(data4) {
  return data4.USER_PERFORMANCE[0];
}

export {
  dataUserInforMain,
  dataUserActivity,
  dataAverageSessions,
  dataPerformance,
};
