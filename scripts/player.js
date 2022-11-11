import {hasCollided} from '/scripts/util/collision.js'

export class Player {
    constructor(username, hp, stamina, xpos, ypos, allies, buffs, weaponEquipped, consumableEquipped, inventory, width, height, animFrames, speed) {
        this.username = username; // Name of player
        this.hp = hp; // Hit points of the player
        this.stamina = stamina; // The current stamina of the player. When this hits zero you can't sprint
        this.maxStamina = maxStamina; // Max stamina of element
        this.xpos = xpos; // Position on map
        this.ypos = ypos; // Position on map
        this.allies = allies; // An array of allied mobs
        this.buffs = buffs; // Buffs effect other players stats
        this.weaponEquipped = weaponEquipped;
        this.consumableEquipped = consumableEquipped;
        this.inventory = inventory; // An object like {weapon: [weapons], consumables: [consumables]}
        this.width = width; 
        this.height = height;
        this.animFrames = animFrames;
        this.speed = speed;
    }
    attack(cue, direction, type, targets){
        attackAnimation(cue, direction, type)
        for (target in targets) {
            if (hasCollided(target, this)) {
                target.gotAttacked(this.weaponEquipped.damage, direction)
            }
        }
    }

    gotAttacked(damage, direction) {
        if (this.hp <= damage) {
            // This character died
            console.log(this.username, "has died")
        } else {
            this.hp = this.hp - damage;
            // TODO comeback after testing and change these numbers. Consider basing them off of the players stamina, hp, buffs, and the damage taken from the hit.
            if(direction.includes("up")) {
                this.updatePosition({x: this.xpos, y: this.ypos + 15})
            }
            if(direction.includes("down")) {
                this.updatePosition({x: this.xpos, y: this.ypos - 15})
            }
            if(direction.includes("left")) {
                this.updatePosition({x: this.xpos - 15, y: this.ypos})
            }
            if(direction.includes("right")) {
                this.updatePosition({x: this.xpos + 15, y: this.ypos})
            }
            
        }
    }

    updatePosition(updatedPosition) {

    }
}