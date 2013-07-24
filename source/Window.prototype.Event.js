// Window.prototype.Event
(function () {
	window.Event = Window.prototype.Event = function Event(type, eventInitDict) {
		if (!type) {
			throw new Error('Not enough arguments');
		}

		var
		event = document.createEvent('Event'),
		bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false,
		cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : true;

		event.initEvent(type, bubbles, cancelable);

		return event;
	};

	window.CustomEvent = Window.prototype.CustomEvent = function CustomEvent(type, eventInitDict) {
		var event = new Event(type, eventInitDict);

		event.detail = eventInitDict && eventInitDict.detail || {};

		return event;
	};
})();