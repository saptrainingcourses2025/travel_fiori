sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"travel/test/integration/pages/TravelList",
	"travel/test/integration/pages/TravelObjectPage",
	"travel/test/integration/pages/BookingObjectPage"
], function (JourneyRunner, TravelList, TravelObjectPage, BookingObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('travel') + '/test/flp.html#app-preview',
        pages: {
			onTheTravelList: TravelList,
			onTheTravelObjectPage: TravelObjectPage,
			onTheBookingObjectPage: BookingObjectPage
        },
        async: true
    });

    return runner;
});

