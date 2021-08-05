var PlanetSystem = function(x, y){
	this.x = x;
	this.y = y;
	this.planets = [];
	this.orbits = [];
	this.t = 0;
	this.state = 1;
	
	this.setCenter = function(planet){
		this.center = planet;
		this.center.x = 0;
		this.center.y = 0;
	}
	
	this.addOrbitalPlanet = function(planet, distance, startAngle, speed){
		this.planets.push({"p":planet, "d":distance, "a": startAngle, "s": speed});
	}
	
	this.addOrbit = function(distance){
		this.orbits.push(distance);
	}
	
	this.draw = function(){
		push();
		translate(this.x, this.y);
		noFill();
		imageMode(CENTER);
		
		// draw center
		if (this.center != null)
			this.center.draw();
		
		// draw orbits
		//stroke('#fff');
		if(this.orbits.length > 0){
			for (let i = 0; i < this.orbits.length; i++){
				ellipse(0, 0, this.orbits[i] * 2, this.orbits[i] * 2);
			}
		}
		
		if (this.planets.length > 0) {
			for (let i = 0; i < this.planets.length; i++)
			{
				this.planets[i].p.x = this.planets[i].d * Math.cos((this.planets[i].a + this.planets[i].s * this.t) * Math.PI / 180);
				this.planets[i].p.y = this.planets[i].d * Math.sin((this.planets[i].a + this.planets[i].s * this.t) * Math.PI / 180);
				this.planets[i].p.draw();
			}
		}
		
		this.t += this.state;
		
		pop();
	}
}
