var Dot = function (x, y) {
    this.x = x;
    this.y = y;
    this.add = function (w) {
        this.x += w.x;
        this.y += w.y;
        return this;
    };
    this.min = function (w) {
        this.x -= w.x;
        this.y -= w.y;
        return this;
    };
};

Math.radians = function (degrees) {
    return degrees * Math.PI / 180;
};

Math.degrees = function (radians) {
    return radians * 180 / Math.PI;
};

Math.get_deg_between = function (a, b) {
    var deg = (Math.degrees(Math.atan2(a.x - b.x, a.y - b.y)) * (-1) - 90);
    return (deg < 0) ? 360 + deg : deg;
};

function getRelativeDot(m, deg, dist) {
    return new Dot(
        m.x + Math.cos(Math.radians(deg)) * dist, m.y + Math.sin(Math.radians(deg)) * dist
    );
}

function getPosition(el, offsetYPos) {
    var x = 0;
    var y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        x += el.offsetLeft - el.scrollLeft;
        y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return new Dot(x, y - offsetYPos);
}

document.addEventListener("mousemove", myFunction);

function myFunction(e) {
    var mouse = new Dot(e.clientX, e.clientY);
      
    var eyes = document.getElementsByClassName("eye");
  
    var joconde = document.getElementById("joconde");
  
    var offsetYPos = joconde.offsetTop;
  
    for (i = 0; i < eyes.length; i++) {
        var eye = eyes[i];

        var eye_position = getPosition(eye, offsetYPos);
      
        var eye_mid = new Dot(eye.offsetWidth / 2, eye.offsetWidth / 4);

        var pill = eye.querySelectorAll('.pill')[0];

        var degrees = Math.get_deg_between(eye_position, mouse);      
      
        var distance = (eye.offsetWidth / 2 - pill.offsetWidth / 2);

        var new_pill = getRelativeDot(eye_mid, degrees, distance);
              
        var minus = new Dot(pill.offsetWidth / 2, pill.offsetWidth / 2);
      
        new_pill.min(minus);
      
        pill.style.top = new_pill.y + 'px';
        pill.style.left = new_pill.x + 'px';

    }
}
