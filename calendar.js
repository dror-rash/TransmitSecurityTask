
var august_schedule = {
	'3': {'events':[{'time': '11:00-12:30', 'description': 'Band practice'}, {'time': '15:00-16:00', 'description': 'Math class'} ]},
	'18': {'events':[{'time': '12:00-13:00', 'description': 'Lunch'}]}	
}

NUM_DAYS_AUGUST=31;
FIRST_DAY_OF_AUGUST=4;
function createDays() {
	var calendar = document.getElementById('days');
	
	//create blank days up to where the month starts
	var filler, day_template, new_day, el;
	for (var i=1; i<FIRST_DAY_OF_AUGUST; i++) {
		el = document.createElement('div');
		el.classList.add("day");
		calendar.appendChild(el);
	}

	for (i=1; i<=NUM_DAYS_AUGUST; i++) {
		day_template = document.getElementsByClassName("day")[0]
		new_day = day_template.cloneNode(true);
		el = new_day.getElementsByClassName('number')[0]
		el.innerHTML = i;
		if (august_schedule[i.toString()]) {
			el.classList.add("has_event");
			(function(day) {
				el.addEventListener('click', function(){
					closeModal();
					openModal(august_schedule[day.toString()].events);
				});
			}(i));
		}
		calendar.appendChild(new_day);
	}
}


var openModal = function(events) {
	var modal = document.getElementById('modal');
	modal.style.display = 'block';
	event_template = document.getElementsByClassName("event")[0];

	removeAllEvents();
	events_container = document.getElementById('events');
	for (var event_id=0; event_id<events.length; event_id++) {
		new_event = event_template.cloneNode(true);
		new_event.getElementsByClassName('time')[0].textContent = events[event_id].time;
		new_event.getElementsByClassName('description')[0].textContent = events[event_id].description;
		events_container.appendChild(new_event);
	}
}

var removeAllEvents = function() {
	var myNode = document.getElementById("events");
	myNode.innerHTML = '';
}

var closeModal = function() {
	var modal = document.getElementById('modal');
	modal.style.display = 'none';
}