sap.ui.define([
	"com/test/teched/te2016b/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("com.test.teched.te2016b.controller.NotFound", {

			onInit: function () {
				this.getRouter().getTarget("notFound").attachDisplay(this._onNotFoundDisplayed, this);
			},

			_onNotFoundDisplayed : function () {
					this.getModel("appView").setProperty("/layout", "OneColumn");
			}
		});
	}
);
