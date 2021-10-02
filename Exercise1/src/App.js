import React from "react";
import "./App.css";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import NewsSection from "./components/NewsSection";
import Notification from "./components/Notification";





function App() {
  return (
    <>
  <Header/>
  <Header2/>
  <section>
    <Notification topic ="MONTHLY APPENDIX"
    description="Coalition party MP dropped out of parliament and cultivates land"/>

    <Notification topic="DIAMOND OF THE DAY"
     description="Ismo Alanko managed to stop drinking when the doctor told the worm numbers"/>

     <Notification topic="ADVERTISEMENT"
     description="Reedem two weeks of free reading time"/>
    
    <div className="newsrapper">
      <div className="leftbox">
        <NewsSection heading="Shops will be able to set their opening hours freely on 1 January " 
        details="Shops, hair Salons and Barber shops will be allowed to set their opening hours freely starting on 1 January 2016, 
        as a proposal to repeal the regulations concerning shop opening hours will be approved in a Presidential 
        session on Wednesday. Such establishments will henceforth be allowed to decide freely when to open their 
        doors to customers.The majority of large grocery shops will nevertheless keep their doors closed on
        New Year's Day, as they have not had the time to re-organize the shifts of their employees. 
        The Parliament of Finland approved the proposal to lift all restrictions on the opening hours of shops,
        hair Salons and Barber shops in mid-December. "
        time="HS in English 12/25/2015 5:01 AM"  />
        <NewsSection heading ="Foreign-language speakers to account for almost 25% of Helsinki's population"
        details="Helsinki is expecting a Massive influx of immigrants. A forecast drawn up by the
        municipalities of the capital region indicates that the foreign-language population of Helsinki will grow
          by 80,000–85,000 by 2030. Nearly one-fourth, or 23 per cent, of the population is projected to speak
          other than Finnish , Swedish or Sami as their mother tongue."
          time="HS in English 12/25/2015 4:18 AM" />
          <NewsSection heading="OAJ: Finland needs more teachers due to rise in Asylum applications "
          details=" Finland will have to Recruit hundreds of new teachers due to the increase in the number of Asylum seekers, the Trade Union of Education (OAJ) estimates.
           “The number of unaccompanied minors who have arrived in Finland this year is 2,000. A child is entitled to basic education immediately. 
           Hundreds of new teachers are needed, ”states Heljä Misukka, an education director at OAJ."
           time="HS in English 12/29/2015 5:46 AM" />
      </div>
      <div className="rightbox">
        <div>
          <h1>Most Read</h1>
          <NewsSection heading="Postal park"
          details=" In this respect, the postal park is not unique in the Helsinki metropolitan area. For example, in the new district of Kruunuvuorenranta, 
          there was a long lack of trade. Services have also been needed in Suurpello, Espoo, which has started to be built with the largest plans .
          The problem is the same elsewhere: residents come to new residential areas first, the arrival of services lags behind."/>
          <NewsSection heading="Suspected criminal"
          details="Should the police have understood that the sprayer should not be used even if the order came?
          The professor sees this as a core issue in the case of Elokapina"
           image="img1.jpg" time="HS in English 12/29/2015 5:46 AM" />
           <NewsSection heading="HS Environment"
           details="In the middle of the swamp, there is a cottage from which scientists are relentlessly
           observing the state of the planet-One of them is Annalea Lohila, and she is a vital things to say: 
           We are now witnessing something that has never happened"/>
           <NewsSection heading=" Where is he now"
           details="The coalition party´s uprising MP dropped out of parliament and is now cultivating
           the land- it is worth but keep your eyes on the horizon"/>
          <hr/>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  </section>

   

    </>
  
  );
}

export default App;

