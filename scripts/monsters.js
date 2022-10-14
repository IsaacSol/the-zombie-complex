export class Monsters {
    constructor(name, hp, speed, atkSpeed, dmg, range, atkTypes, icon, description, animFrames, sounds, soundRange, height, width) {
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
    attack(cue, direction) {
        
    }
}