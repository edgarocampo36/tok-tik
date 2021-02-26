/* Page del Home de la app
Utiliza el componente FollowersCollumn y se estructura en 3 secciones:
el FollowerColumn de seguidores, el Feed del usuario y la SuggestedBox de sugerencias
*/

import React from "react";

import FollowersColumn from "../components/FollowersColumn";

const Home = () => {
  return (
    <div className="container">
      <FollowersColumn />
      <div className="feed">
        <h1>Home</h1>
      </div>
      <div className="suggested-box"></div>
    </div>
  );
};

export default Home;
