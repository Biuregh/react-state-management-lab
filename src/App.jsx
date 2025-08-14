import { useState } from "react";
import "./app.css"

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        id: 1,
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTLQxXbKx31UlKKt2ryO_zYIs4dUUblEOC8JJpf7zgO_TgtES0hW7euGAILs1C1hfEDhE&usqp=CAU",
      },
      {
        id: 2,
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: "https://i.pinimg.com/736x/62/49/7b/62497b5b11625f48b994b7a4fb997f6a.jpg",
      },
      {
        id: 3,
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: "https://www.gamersdecide.com/sites/default/files/styles/responsive_image_512xauto/public/authors/u165578/graveknight.jpg",
      },
      {
        id: 4,
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: "https://i.pinimg.com/736x/36/d0/7e/36d07e4b851209ba6755bca91d114983.jpg",
      },
      {
        id: 5,
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: "https://i.pinimg.com/736x/e2/b8/08/e2b808c414a0345b5cfaa7b6444e925c.jpg",
      },
      {
        id: 6,
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: "https://i.pinimg.com/736x/b8/0c/38/b80c380af80210d5a3ee24179d0801f5.jpg",
      },
      {
        id: 7,
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: "https://i.pinimg.com/564x/b2/4a/30/b24a30d121f541b7bb6d5ce0edd844ab.jpg",
      },
      {
        id: 8,
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: "https://i.pinimg.com/564x/5e/4b/64/5e4b641bc01ae5c4f707d093fac4eb66.jpg",
      },
      {
        id: 9,
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: "https://i.pinimg.com/736x/79/b0/63/79b063718d0be694209b528c0418965c.jpg",
      },
      {
        id: 10,
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVPPUoRLtWCzHMwGQ0VJv-JmidxI-LOTZQOoMT9c9U00vGiUBPy0nRLm9hxmAsAecd8OU&usqp=CAU",
      },
    ]);

  const totalStrength = team.reduce((sum, { strength }) => sum + strength, 0);
  const totalAgility = team.reduce((sum, { agility }) => sum + agility, 0);


  const handleAddFighter = (newFighter) => {
    if (money < newFighter.price) {
      console.log("Not enough money");
      return;
    }
    setTeam([...team, newFighter]);
    setZombieFighters(zombieFighters.filter(fighter => fighter.id !== newFighter.id));
    setMoney(money - newFighter.price);
  }

    const handleRemoveFighter = (myFighter) => {
    setTeam(team.filter(t=> t.id !== myFighter.id));
    setZombieFighters([...zombieFighters,myFighter]);
    setMoney(money + myFighter.price);
  }

  return (
    <>
      <div>
        <h1>Status</h1>
        <p>Money: ${money}</p>
        <p>Total Strength: {totalStrength}</p>
        <p>Total Agility: {totalAgility}</p>
      </div>
      <div>
        <h1>Zombie Fighters List</h1>
        <ul className="card-container">
          {zombieFighters.map(fighter => (
            <li key={fighter.id} className="card">
              <img src={fighter.img} alt={fighter.name} />
              <div>
                <h3>{fighter.name}</h3>
                <p>Price: ${fighter.price}</p>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>
              </div>
              <button onClick={() => handleAddFighter(fighter)}>Add</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1>My Team</h1>
        {team.length ?
          <ul className="card-container">
            {team.map(t => (
              <li key={t.id} className="card">
                <img src={t.img} alt={t.name} />
                <div>
                  <h3>{t.name}</h3>
                  <p>Price: ${t.price}</p>
                  <p>Strength: {t.strength}</p>
                  <p>Agility: {t.agility}</p>
                </div>
                <button onClick={() => handleRemoveFighter(t)}>Remove</button>
              </li>
            ))}
          </ul>
          : <p> Pick some team members!</p>}
      </div>

    </>

  );
}

export default App
