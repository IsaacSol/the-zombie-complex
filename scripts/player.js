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
    attack(cue, direction, targets){
        attackAnimation(cue, direction)
        for (target in targets) {
            if (target.colide(this)) {
                
            }
        }
    }
}