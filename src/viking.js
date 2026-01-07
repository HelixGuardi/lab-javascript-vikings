// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength)
    this.name = name;
  }

  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 0){
      return `${this.name} has received ${damage} points of damage`
    } else if (this.health <= 0){
      return `${this.name} has died in act of combat`
    }
  }

  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    } else if (this.health <= 0){
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking(vikingObj){
    this.vikingArmy.push(vikingObj);
  }

  addSaxon(saxonObj){
    this.saxonArmy.push(saxonObj);
  }

  vikingAttack(){
    const lastSaxon = this.saxonArmy[this.saxonArmy.length - 1]
    const firstViking = this.vikingArmy[0]

    const vikingAtkSaxon = lastSaxon.receiveDamage(firstViking.attack());

    if(lastSaxon.health <= 0){
      this.saxonArmy.pop();
    }
    
    return vikingAtkSaxon;
  }

  saxonAttack(){
    const lastViking = this.vikingArmy[this.vikingArmy.length - 1];
    const firstSaxon = this.saxonArmy[0];

    const saxonAtkViking = lastViking.receiveDamage(firstSaxon.attack());

    if(lastViking.health <= 0){
      this.vikingArmy.pop();
    }

    return saxonAtkViking;
  }

  showStatus(){}
}
