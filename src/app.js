import React from "react";
import Card from "./components/card";

export default function App() {
  return (
    <div>
      <h1 className="title"> Football Teams </h1>
      <div className="grid-container">
        <Card
          name="Real Madrid F.C."
          src="https://www.logofootball.net/wp-content/uploads/Real-Madrid-CF-HD-Logo.png"
          city="Madrid"
          stadium="Santiago Bernabéu"
          link="https://www.realmadrid.com/en"
        />
        <Card
          name="Real Betis Balompié"
          src="https://www.logofootball.net/wp-content/uploads/Real-Betis-HD-Logo.png"
          city="Sevilla"
          stadium="Benito Villamarín"
          link="https://www.realbetisbalompie.es/"
        />
        <Card
          name="Real Sociedad"
          src="https://www.logofootball.net/wp-content/uploads/Real-Sociedad-HD-Logo.png"
          city="Donostia-San Sebastián"
          stadium="Reale Arena"
          link="https://www.realsociedad.eus/en"
        />
        <Card
          name="F.C. Barcelona"
          src="https://www.logofootball.net/wp-content/uploads/FC-Barcelona-HD-Logo.png"
          city="Barcelona"
          stadium="Camp Nou"
          link="https://www.fcbarcelona.com/en/"
        />
        <Card
          name="Sevilla F.C."
          src="https://www.logofootball.net/wp-content/uploads/Sevilla-FC-HD-Logo.png"
          city="Sevilla"
          stadium="Ramón Sánchez Pizjuán"
          link="https://sevillafc.es/en"
        />
        <Card
          name="CA Osasuna"
          src="https://www.logofootball.net/wp-content/uploads/CA-Osasuna-HD-Logo.png"
          city="Pamplona"
          stadium="El Sadar"
          link="https://www.osasuna.es/"
        />
        <Card name="" src="" city="" stadium="" link="" />
        <Card name="" src="" city="" stadium="" link="" />
        <Card name="" src="" city="" stadium="" link="" />
        <Card name="" src="" city="" stadium="" link="" />
        <Card name="" src="" city="" stadium="" link="" />
        <Card name="" src="" city="" stadium="" link="" />
        <Card name="" src="" city="" stadium="" link="" />
        <Card name="" src="" city="" stadium="" link="" />
        <Card name="" src="" city="" stadium="" link="" />
      </div>
    </div>
  );
}
