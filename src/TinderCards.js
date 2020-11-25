import React, { useState } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';

function TinderCards() {

    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url:"https://hipertextual.com/files/2019/05/hipertextual-es-inmensa-cantidad-dinero-que-elon-musk-gano-2018-2019169699-scaled.jpg",
        },
        {
            name: "Jeff Bezos",
            url:"http://www.jorgerosast.com/wp-content/uploads/2019/06/bez04_2.jpg",
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen");
    }
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                        
                    >
                        <div style={{backgroundImage: `url(${person.url})`}} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}   
            </div>
        </div>
    )
}

export default TinderCards;
