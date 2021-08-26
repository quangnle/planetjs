
let w = 600;
let h = 600;

let img;
let tauPlanet, musicPlanet, defiPlanet, gamePlanet, nftPlanet, rngPlanet, platformPlanet, metaversePlanet;



let system = new PlanetSystem(w >> 1, h >> 1, h>>1, 400, "#fff");
let selectedObj = null;

function preload(){
	 img = loadImage('../images/logo.png');
}

function sqDistance(a, b){
	return (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y); 
}

function setup(){
	var canvas = createCanvas(w, h);
	canvas.parent('sketch-holder');
	
	tauPlanet = new Planet(img, 0, 0, 70, '#fff', '#000');
	musicPlanet = new Planet(img, 0, 0, 40, '#fff', '#000');
	defiPlanet = new Planet(img, 0, 0, 40, '#fff', '#000');
	gamePlanet = new Planet(img, 0, 0, 40, '#fff', '#000');
	nftPlanet = new Planet(img, 0, 0, 40, '#fff', '#000');

	rngPlanet = new Planet(img, 0, 0, 50, '#fff', '#000');
	platformPlanet = new Planet(img, 0, 0, 50, '#fff', '#000');

	metaversePlanet = new Planet(img, 0, 0, 60, '#fff', '#000');
	
	
	system.setCenter(tauPlanet);
	
	system.addOrbit(90);
	system.addOrbitalPlanet(musicPlanet, 90, 0, 0.5);
	system.addOrbitalPlanet(defiPlanet, 90, 90, 0.5);
	system.addOrbitalPlanet(gamePlanet, 90, 180, 0.5);
	system.addOrbitalPlanet(nftPlanet, 90, 270, 0.5);
	
	system.addOrbit(150);
	system.addOrbitalPlanet(rngPlanet, 150, 30, -0.5);
	system.addOrbitalPlanet(platformPlanet, 150, 210, -0.5);
	
	system.addOrbit(200);
	system.addOrbitalPlanet(metaversePlanet, 200, 0, 0.5);
	
	
}

function draw(){
	background("#000");
	system.draw();
}

function mousePressed(){
	let mx = mouseX - system.x;
	let my = mouseY - system.y;
	if (system.center != null && (sqDistance(system.center, {"x":mx, "y":my}) < system.center.size * system.center.size)){
		system.center.state = 1;
	} else {
		system.center.state = 0;
		for(let i = 0; i < system.planets.length; i++){
			let p = system.planets[i].p;
			if (sqDistance(p, {"x":mx, "y":my}) < p.size * p.size){
				//sytem.state = 0;
				p.state = 1;
			} else {
				p.state = 0;
			}
		}
	}
}

function touchStarted(){
	let mx = mouseX - system.x;
	let my = mouseY - system.y;
	if (system.center != null && (sqDistance(system.center, {"x":mx, "y":my}) < system.center.size * system.center.size)){
		system.center.state = 1;
	} else {
		system.center.state = 0;
		for(let i = 0; i < system.planets.length; i++){
			let p = system.planets[i].p;
			if (sqDistance(p, {"x":mx, "y":my}) < p.size * p.size){
				//sytem.state = 0;
				p.state = 1;
			} else {
				p.state = 0;
			}
		}
	}
}