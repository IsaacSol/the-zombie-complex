export class Weapon {
    constructor(name, description, damage, attackSpeed, attackRange, type) {
        this.name = name; // Name of the weapon
        this.description = description; // Description of the weapon - This will be shown in inventory and help
        this.damage = damage; // Damage the weapon inflicts
        this.attackSpeed = attackSpeed; // Time to attack and time to attack again
        this.attackRange = attackRange; // Range in which enemies will get hit
        this.type = type; // Is it melee or ranged
    }
}