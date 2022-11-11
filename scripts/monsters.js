import {hasCollided} from '/scripts/util/collision.js'

export class Monsters {
    constructor(name, hp, speed, atkSpeed, dmg, range, atkTypes, icon, description, animFrames, sounds, soundRange, height, width, drops, xpos, ypos) {
        this.name = name;
        this.hp = hp;
        this.speed = speed;
        this.atkSpeed = atkSpeed;
        this.dmg = dmg;
        this.range = range;
        this.atkTypes = atkTypes;
        this.icon = icon;
        this.description = description;
        this.animFrames = animFrames;
        this.sounds = sounds;
        this.soundRange = soundRange
        this.height = height;
        this.width = width;
        this.drops = drops;
        this.xpos = xpos;
        this.ypos = ypos;
    };
     monster() {
       this.name;
       this.hp;
       this.speed;
       this.atkSpeed;
       this.dmg;
       this.range;
       this.atkTypes;
       this.icon;
       this.description;
       this.animFrames;
       this.sounds;
       this.soundRange;
       this.height;
       this.width;
    };

    render(container, classes) {
        let newElement = document.createElement("div");
        newElement.setAttribute("class", classes);
        newElement.style.width = `${this.width}px`;
        newElement.style.height = `${this.height}px`;
        container.appendChild(newElement);
        this.rendered = true;
        this.element = newElement;
        return newElement;
    }
    
    attack(cue, direction, type,targets) {
        attackAnimation(cue, direction, type)
        for(target in targets) {
            if(hasCollided(target, this)) {
                target.gotAttacked(this.dmg, direction)
            }
        }
    }

    unrender() {
        if (this.rendered == true) {
            // Removes this.element from the parent html
            this.element.parentNode.removeChild(this.element)
        } else {
            console.log(this.name, "already unrendered!")
        }
    }

    gotAttacked(damage, direction) {
        if(this.hp <= damage) {
            console.log(this.name, "has died ");
            this.unrender()
        } 
        else {
            this.hp = this.hp - damage;
        }
        if(direction.Includes("up")) {
            updatePosition({x: this.xpos, y: this.ypos + 15}) // come back after testing and change these numbers. Consider basing them off the players stamina, hp, buffs, and damage taken from hit.
        }
        if (direction.Includes("down")){
            updatePosition({x: this.xpos, y: this.ypos - 15})
        }
        if(direction.Includes("left")) {
            updatePosition({x: this.xpos - 15, y: this.ypos})
        }
        if(direction.Includes("right")){
            updatePosition({x: this.xpos + 15, y: this.ypos})
        }
    }
}