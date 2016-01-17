import "angular-ui-bootstrap";

var app = angular.module("map-editor", [
	"ui.bootstrap"
]);

import multiSelect from "./common/multi-select/multiSelect";
app.directive("multiSelect", multiSelect);

import booleanField from "./common/booleanField";
app.directive("booleanField", booleanField);

import collapsiblePanel from "./common/collapsiblePanel";
app.directive("collapsiblePanel", collapsiblePanel);

import validate from "./common/validate";
app.directive("validate", validate);

import segmentTools from "./toolbox/segment-tools/segmentTools";
app.directive("segmentTools", segmentTools);

import sectorTools from "./toolbox/sector-tools/sectorTools";
app.directive("sectorTools", sectorTools);

import entityTools from "./toolbox/entity-tools/entityTools";
app.directive("entityTools", entityTools);

import zoneTools from "./toolbox/zone-tools/zoneTools";
app.directive("zoneTools", zoneTools);

import toolbox from "./toolbox/toolbox";
app.component("toolbox", toolbox);

app.config(() => {
});

app.run(() => {
	$(document).on("contextmenu", function(){
		return false;
	});
});