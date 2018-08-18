// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 BusinessPartnerCollection in the list
// * All 3 BusinessPartnerCollection have at least one RelatedContacts

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/test/teched/te2016b/test/integration/arrangements/Arrangement","com/test/teched/te2016b/test/integration/MasterJourney",
	"com/test/teched/te2016b/test/integration/NavigationJourney",
	"com/test/teched/te2016b/test/integration/NotFoundJourney",
	"com/test/teched/te2016b/test/integration/BusyJourney"
], function (Opa5, Arrangement) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Arrangement(),
		viewNamespace: "com.test.teched.te2016b.view.",
		autoWait: true
	});
});
