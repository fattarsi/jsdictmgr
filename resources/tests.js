test('Shot init', function() {
  var data = {'team_name': 'Loser', 'team_type': 'visit'};
  var shot = new Shot(data)
  equal( shot.team_name, "Loser");
  equal( shot.team_type, "visit");
});

test('ShotMgr init', function() {
  var data = [
    {'team_type': 'pro', 'y_value': '22', 'x_value': '33'},
	{'team_type': 'minor', 'x_value': '44', 'y_value': '55'}];
  var mgr = new ShotManager(data);
  equal( mgr.count(), 2);
  equal( mgr.shots[0].to_html(), '<span class="pro" style="top:22 left:33"></span>');
  equal( mgr.shots[1].to_html(), '<span class="minor" style="top:55 left:44"></span>');
});

test('ShotMgr empty mgr', function() {
  var mgr = new ShotManager();
  equal(mgr.count(), 0);
});

test('ShotMgr filter', function() {
  var data = [
    {'team_type': 'pro', 'y_value': '12', 'x_value': '21'},
	{'team_type': 'minor', 'y_value': '12', 'x_value': '21'},
    {'team_type': 'pro', 'y_value': '23', 'x_value': '32'},
	{'team_type': 'minor', 'y_value': '23', 'x_value': '66'},
    {'team_type': 'pro', 'y_value': '34', 'x_value': '43'},
	{'team_type': 'minor', 'y_value': '44', 'x_value': '55'}];

	var mgr = new ShotManager(data);
	var m1 = mgr.filter('team_type', 'pro');
	var m2 = mgr.filter('y_value', '12');
	
	equal(m1.count(), 3);
	equal(m1.shots[0].x_value, '21');
	equal(m1.shots[1].x_value, '32');
	equal(m1.shots[2].x_value, '43');
	equal(m2.count(), 2);
	equal(m2.shots[0].team_type, 'pro');
	equal(m2.shots[1].team_type, 'minor');

});
