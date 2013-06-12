
function Shot(data) {
  for (var i in data) {
    this[i] = data[i];
  }
}

Shot.prototype.to_html = function () {
	return '<span class="'+this.team_type+'" style="top:'+this.y_value+' left:'+this.x_value+'"></span>';
}

function ShotManager(data) {
	this.shots = this.parse_shots(data);
}

ShotManager.prototype.parse_shots = function (data) {
	var ary = new Array();
	if (typeof data != 'undefined') {
		for (var i=0; i<data.length; i++) {
			ary.push(new Shot(data[i]));
		}
	}
	return ary;
}

ShotManager.prototype.count = function () {
	return this.shots.length;
}

ShotManager.prototype.filter = function (key, value) {
// return a new ShotManager where key, values match
	var mgr = new ShotManager();
	for (var i=0; i<this.count(); i++) {
		if(this.shots[i][key] == value) {
			mgr.shots.push(this.shots[i]);
		}
	}
	return mgr;
}
