import { createContext } from "react";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./data";

export const DataContextManager = createContext();
/**
 * @module DataProvider
 * @param {JSX} children
 * @returns 4 function that gets the correct data for the users (mockedData and API Data )
 */

export const DataProvider = ({ children }) => {
  // The path can be changed for the diffrents users between mock up and API
  const path = "http://localhost:3000";
  /**
   * getUserData
   * @function getUserData
   * @param {number} id
   * @returns userDataMocked||userDataApi
   */
  async function getUserData(id) {
    let userDataMocked = USER_MAIN_DATA.find(
      (item) => item.id === parseInt(id)
    );
    const res = await fetch(`${path}/user/${id}`);
    let userMainData = await res.json().catch((error) => {
      return userDataMocked;
    });

    let userDataApi = userMainData.data;
    return userDataApi ? userDataApi : userDataMocked;
  }

  /**
   * getUserActivity
   * @function getUserActivity
   * @param {number} id
   * @returns userActivityMocked||userActivityApi
   */

  async function getUserActivity(id) {
    let userActivityMocked = USER_ACTIVITY.find(
      (item) => item.userId === parseInt(id)
    );
    const res = await fetch(`${path}/user/${id}/activity`);
    let userActivity = await res.json().catch((error) => {
      return userActivityMocked;
    });

    let userActivityApi = userActivity.data;
    return userActivityApi ? userActivityApi : userActivityMocked;
  }

  /**
   * getUserSessions
   * @function getUserSessions
   * @param {number} id
   * @returns userSessionsMocked||userSessionsApi
   */

  async function getUserSessions(id) {
    let userSessionsMocked = USER_AVERAGE_SESSIONS.find(
      (item) => item.userId === parseInt(id)
    );
    const res = await fetch(`${path}/user/${id}/average-sessions`);
    let userSessions = await res.json().catch((error) => {
      return userSessionsMocked;
    });

    let userSessionsApi = userSessions.data;

    return userSessionsApi ? userSessionsApi : userSessionsMocked;
  }
  /**
   * getUserPerformance
   * @function getUserPerformance
   * @param {number} id
   * @returns userPerformanceMocked||userPerformanceApi
   */

  async function getUserPerformance(id) {
    let userPerformanceMocked = USER_PERFORMANCE.find(
      (item) => item.userId === parseInt(id)
    );
    const res = await fetch(`${path}/user/${id}/performance`);
    let userPerformance = await res.json().catch((error) => {
      return userPerformanceMocked;
    });
    let userPerformanceApi = userPerformance.data;

    return userPerformanceApi.data ? userPerformanceApi : userPerformanceMocked;
  }

  return (
    <DataContextManager.Provider
      value={{
        getUserSessions,
        getUserActivity,
        getUserPerformance,
        getUserData,
      }}
    >
      {children}
    </DataContextManager.Provider>
  );
};
