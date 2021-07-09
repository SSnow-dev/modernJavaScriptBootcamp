//shorthand object properties
function getStats() {
  const strength = 15;
  const dexterity = 11;
  const inteligence = 8;
  const vitality = 13;

  return {
    strength,
    dexterity,
    inteligence,
    vitality
  }
}

const stats = getStats();

console.log(stats);

//computed properties
const cClass = 'warrior';
const cName = 'Thrash';
const cClass2 = 'Monk';
const cName2 = 'Punchy';

const party = {
  [cClass]: cName,
  [cClass2]: cName2,
}

const punchy = {
  name: cName2,
  class: cClass2,
  level: 5,
  stats: getStats(),
  levelUp: function() {
    this.level++;
    console.log(`${this.name} is now level ${this.level}`);
  }
}

console.log(party);
console.log(addPartyMember(party, 'Wizard', 'Blasty'));
console.log(punchy);
punchy.levelUp();
console.log(punchy);

function addPartyMember(obj, key, value) {
  return {
    ...obj,
    [key]: value 
  }  
}

const server = {
  login() {
    console.log("You have connected!")
  },
  logout() {
    console.log("You have logged out.")
  }
}

server.login();

const annoyer = {
  phrases: [
  "You must gather your party before venturing forth.",
  "You can't fast travel with enemies nearby.",
  "You are too encumbered to run.",
  "You can't do that now.",
  "You can not save now.",
  "The way forward is blocked.",
  "Another settlement needs your help.",
  "It's locked.",
  "The door is barred from the other side.",
  "Everyone disliked that.",
  "40 gold bounty added.",
  "It wont budge.",
  "Not enough mana.",
  "You can't afford that."
  ],
  interval: 3000,
  times: 0,
  pickPhrase() {
    const {phrases} = this;
    const index = Math.floor(Math.random() * phrases.length);
    return phrases[index];
  },

  start(){
    this.times ++;
    this.timerId = setInterval(() => {
      console.log(this.times + " " + this.pickPhrase())
      if (this.interval >= 1000) {
        this.interval -= 500;
      } else if (this.interval > 300) {
        this.interval -= 50;
      } else if (this.interval > 100) {
        this.interval -= 3;
      } else this.interval -= 1;
      
      this.stop();
      if (this.interval > 0) this.start();
    }, this.interval)
  },

  stop() {
    clearInterval(this.timerId);
    //console.log("No problems");
  }
}

console.log(annoyer.pickPhrase());
annoyer.start();