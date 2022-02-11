var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var mor = 0;
var otica = createSprite(330, 200, 60);
otica.shapeColor = "yellow";
var calcada = createSprite(60, 200, 50);
calcada.shapeColor = "cyan";
var parede1 = createSprite(200, 150, 325, 4);
parede1.shapeColor = "black";
var parede2 = createSprite(200, 250, 325, 4);
parede2.shapeColor = "black";
var parede3 = createSprite(37, 200, 4);
parede3.shapeColor = "black";
var parede4 = createSprite(360, 200, 4);
parede4.shapeColor = "black";
var player = createSprite(70, 200, 15, 15);
player.shapeColor = "green";
var carro1 = createSprite(100, 200, 10, 10);
carro1.shapeColor = "red";
var carro2 = createSprite(150, 200, 10, 10);
carro2.shapeColor = "red";
var carro3 = createSprite(200, 200, 10, 10);
carro3.shapeColor = "red";
var carro4 = createSprite(250, 200, 10, 10);
carro4.shapeColor = "red";
carro1.velocityY = -3;
carro2.velocityY = 3;
carro3.velocityY = -3;
carro4.velocityY = 3;
function draw() {
  background("white");
  drawSprites();
  if (player.isTouching(carro1) || (player.isTouching(carro2) || (player.isTouching(carro3) || player.isTouching(carro4)))) {
    mor += 1;
    player.x = 70;
  }
  if (player.isTouching(otica)) {
    fill("black");
    textSize(40);
    text("você ganhou!!" , 70, 200);
    var f = createSprite(200, 200, 400);
  }
  
  carro1.bounceOff(parede1);
  carro1.bounceOff(parede2);
  carro2.bounceOff(parede1);
  carro2.bounceOff(parede2);
  carro3.bounceOff(parede1);
  carro3.bounceOff(parede2);
  carro4.bounceOff(parede1);
  carro4.bounceOff(parede2);
  
  if (keyDown("left")) {
    player.x -= 3
    
  }
  if (keyDown("right")) {
    player.x += 3
    
  }
  fill("red");
  textSize(30);
  text("morte:" + mor , 280, 130);
  fill("red");
  textSize(30);
  text("morte:" + mor , 280, 130);
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
