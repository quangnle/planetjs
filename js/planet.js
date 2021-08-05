var Planet = function(logo, x, y, size, color, fillColor) {
	this.x = x;
	this.y = y;
	this.size = size;
	this.logo = logo;
	this.state = 0;
	
	this.draw = function() {
		push();
		
		translate(this.x, this.y);
		stroke(color);
		strokeWeight(1);
		fill(fillColor)
		
		if (this.state > 0) {
			this.state+= 0.25;
			ellipse(0, 0, this.size + (this.state % 10), this.size + (this.state % 10));
		}
		
		ellipse(0, 0, this.size, this.size);
		//logo.resize(this.size >> 1, this.size >> 1);
		image(logo, 0, 0);
		
		pop();
	}
}