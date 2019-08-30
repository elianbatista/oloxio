
class vec2d {
    constructor(x, y) {
           this.x = x;
           this.y = y;
    }
    add(b) {
           this.x += b.x;
           this.y += b.y;
    }
    sub(b) {
           this.x -= b.x;
           this.y -= b.y;
    }
    mult(n) {
           this.x *= n;
           this.y *= n;
    }
    div(n) {
           this.x /= n;
           this.y /= n;
    }
    angleBetween(b){
           const dot = this.x * b.x + this.y + b.y;
           return Math.atan(dot);
    }
    clone(){
           return new vec2d(this.x, this.y);
    }
    print(){
           console.log("X: " +this.x+ "\t|Y: "+this.y);
    }
    sqDist(b){
       return this.x * b.x + this.y * b.y;
    }
    dist(b){
           return Math.sqrt(this.x * b.x + this.y * b.y); 
    }
    mag(){
           return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    copy(b){
           this.x = b.x;
           this.y = b.y;
    }
    constrain(min, max){
           this.constrainX(min,max);
           this.constrainY(min,max);
    }
    constrainX(min, max){
           if(this.x <= min){
                  this.x = min;
           }
           if(this.x >= max){
                  this.x = max;
           }
    }
    constrainY(min, max){
           if(this.y <= min){
                  this.y = min;
           }
           if(this.y >= max){
                  this.y = max;
           }
    }
    magSq(){
           return (this.x * this.x + this.y * this.y);
    }
    fromAngle(angle, mag){
<<<<<<< HEAD
           this.x = mag * Math.cos(angle);
           this.y = mag * Math.sin(angle);
    }
    lookAt(x,y){
           var a = new vec2d(x - this.x, y - this.y);
           a.normalize();
           return a;
    }
    lerp(b, amt){
          this.x += (b.x - this.x) * amt || 0;
          this.y += (b.y - this.y) * amt || 0;
=======
           this.x = mag * Math.cos(angle)
           this.y = mag * Math.sin(angle)
    }
    lerp(b, n){
           this.x = (1-n)*this.x + n*b.x;
           this.y = (1-n)*this.y + n*b.y;
>>>>>>> 4bc522b585b1cdeb48c6de2bd795e164b3cc0c46
    }
    object(){
           return {x: this.x, y: this.y};
    }
    normalize(){
           const mg = this.mag();
           this.div(mg);
    }
}
function randomInterval(min, max) {
    return Math.random() * (max - min) + min;
}

function lerpN(a, b, n) {
    return (1 - n) * a + n * b;
}
module.exports = vec2d;