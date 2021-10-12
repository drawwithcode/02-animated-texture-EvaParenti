var points = []; //field for starting points
var mult = 0.005; //control angle velocità

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
  angleMode(DEGREES);
  noiseDetail(75);

  var density = 80; //points in each row
  var space = width / density; //distance between each point

  for (var x = 0; x < width; x += space) {
    //starting points
    for (var y = 0; y < height; y += space) {
      var p = createVector(x + random(-10, 10), y + random(-10, 10)); //vector for X and Y
      points.push(p); //add the vector to the field for starting points
    }
  }
}

function draw() {
  let myColor = lerpColor(color("#ea0043"), color("#9932CC"), frameCount / 200);
  noStroke();

  for (var i = 0; i < points.length; i++) {
    fill(myColor);

    var angle = map(
      noise(points[i].x * mult, points[i].y * mult), //noise function: create flow field
      0,
      1,
      0,
      720
    );

    points[i].add(createVector(cos(angle), sin(angle))); //add vector to each point
    {
      ellipse(points[i].x, points[i].y, 1);
    }
  }
}
