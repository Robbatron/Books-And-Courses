var app = angular.module('mealtrack.filters.mealtime', []);

app.filter("mealtime", function () {
	return function (date) {
		if (!date) {
			return '';
		}

		/* hour is before noon */
		if (date.getHours() < 12) {
			return 'Breakfast'
		}
		else  /* Hour is from noon to 5pm (actually to 5:59 pm) */
		if (date.getHours() >= 12 && date.getHours() <= 17) {
			return 'Lunch'
		}
		else  /* the hour is after 5pm, so it is between 6pm and midnight */
		if (date.getHours() > 17 && date.getHours() <= 24) {
			return 'Dinner'
		}
		else  /* the hour is not between 0 and 24, so something is wrong */
		{
			return 'Strange Time'
		}

	};
});
