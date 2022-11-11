export hasCollided(firstObject, secondObject) { // Very simple collision check to see if the boxes have collided
    var aRect = a.getBoundingClientRect();
    var bRect = b.getBoundingClientRect();

    return !(
        ((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))
    );
}

export collisionCheck(firstObject, secondObject) { // Checks collisions with all targets
    let tmpNoCollision = 0;

}