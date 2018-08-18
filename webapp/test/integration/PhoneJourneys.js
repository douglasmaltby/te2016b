sap.ui.define([
	"sap/ui/test/Opa5",
	"com/test/teched/te2016b/test/integration/arrangements/Arrangement",
	"com/test/teched/te2016b/test/integration/NavigationJourneyPhone",
	"com/test/teched/te2016b/test/integration/NotFoundJourneyPhone",
	"com/test/teched/te2016b/test/integration/BusyJourneyPhone"
], function (Opa5, Arrangement) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Arrangement(),
		viewNamespace: "com.test.teched.te2016b.view.",
		autoWait: true
	});
});
