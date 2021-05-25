import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import "./styles.css";
//import pict from '/images/Ayvazovsky.jpg';

function Main() {
  return (
    <>
      <h2>Айвазовский Иван Константинович</h2>
      <img id="portrait" src="/images/Ayvazovsky.jpg"/>
    </>);
}
function Biography() {
  return (
    <>
      <p>Ива́н Константи́нович Айвазо́вский (арм. Հովհաննես Այվազյան, Ованнес Геворкович Айвазян; 17 
        июля 1817 года, Феодосия, Таврическая губерния, Российская империя — 19 апреля [2 мая] 1900 года, 
        там же) — русский художник-маринист и баталист армянского происхождения, коллекционер, меценат.</p>
      <p>Живописец Главного Морского штаба, действительный тайный советник, академик и почётный член Императорской 
        Академии художеств, почётный член Академий художеств в Амстердаме, Риме, Париже, Флоренции и Штутгарте.</p>
      <p>Наиболее выдающийся художник армянского происхождения XIX века. Брат армянского историка и архиепископа Армянской Апостольской Церкви Габриэла Айвазовского.
        Будучи художником с мировой известностью, Иван Константинович Айвазовский предпочитал жить и работать на своей 
        родине — в Крыму. Айвазовский наиболее известен своими морскими пейзажами, которые составляют больше половины его 
        работ. Художник считается одним из величайших маринистов всех времён.</p>
      </>);
}
function FamousPicture() {
  return(
    <div id="biography">
    <img src="/images/f471fe188c9b4d2e448f7fba08c1b685.jpg"/>
    <p>И. Айвазовский. «Вид Константинополя и Босфорского залива». 1856 г.</p>
    </div>
  );
}
function Pictures() {
  return(
    <div id="pictures">
        <div class="ayvPic">
          <img src="/images/1.jpg"/>
          <p>И. Айвазовский «Девятый вал». 1850 г.</p>
        </div>
        <div class="ayvPic">
          <img src="/images/2.jpg"/>
          <p>И. Айвазовский. «Чесменский бой». 1848 г.</p>
        </div>
        <div class="ayvPic">
          <img src="/images/3.jpg"/>
          <p>И. Айвазовский. «Среди волн». 1898 г.</p>
        </div>
        <div class="ayvPic">
          <img src="/images/4.jpg"/>
          <p>И. Айвазовский. «Американские суда у скалы Гибралтара». 1873 г.</p>
        </div>
    </div>
  );
}
function NotFound() {
  return <h2>Not found</h2>;
}
function NavMenu() {
  return (
    <>
      <Link to="/" className="links">
        Главная
      </Link>
      <Link to="/biography" className="links">
        Биография
      </Link>
      <Link to="/famouspicture" className="links">
        Известная картина
      </Link>
      <Link to="/pictures" className="links">
        Картины
      </Link>
    </>
  );
}

function App() {
  return (
    <div className="App">
       <Router>
        <div>
          <NavMenu />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/biography" component={Biography} />
            <Route path="/famouspicture" component={FamousPicture} />
            <Route path="/pictures" component={Pictures} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
