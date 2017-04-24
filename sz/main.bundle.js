webpackJsonp([1,5],{

/***/ 1049:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1050:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1051:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1052:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1053:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-6\">\n      <h3>Alert Details </h3>\n\t\t\t<form class=\"form-horizontal pad-top-20 mar-top-20\" role=\"form\">\n\t\t\t\t<div class=\"form-group\">\n\n\t\t\t\t\t<label for=\"inputEmail3\" class=\"col-sm-2 control-label\">\n\t\t\t\t\t\tGuard\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-sm-10 mar-top-7\">\n\t\t\t\t\t\t<span>saadzaman@out</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n        <div class=\"form-group\">\n\n\t\t\t\t\t<label for=\"inputEmail3\" class=\"col-sm-2 control-label\">\n\t\t\t\t\t\tClient\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-sm-10 mar-top-7\">\n\t\t\t\t\t\t<span>saadzaman@out</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n        <div class=\"form-group\">\n\n\t\t\t\t\t<label for=\"inputEmail3\" class=\"col-sm-2 control-label\">\n\t\t\t\t\t\tLocation\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-sm-10 mar-top-7\">\n\t\t\t\t\t\t<span>saadzaman@out</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n        <div class=\"form-group\">\n\n\t\t\t\t\t<label for=\"inputEmail3\" class=\"col-sm-2 control-label\">\n\t\t\t\t\t\tTimestamp\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-sm-10 mar-top-7\">\n\t\t\t\t\t\t<span>saadzaman@out</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n        <div class=\"form-group\">\n\n\t\t\t\t\t<label for=\"inputEmail3\" class=\"col-sm-2 control-label\">\n\t\t\t\t\t\tTracking\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-sm-10 mar-top-7\">\n\t\t\t\t\t\t<span>saadzaman@out</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group pad-top-20\">\n\t\t\t\t\t<div class=\"col-sm-offset-2 col-sm-10\">\n\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-info\">\n\t\t\t\t\t\t\tTrack\n\t\t\t\t\t\t</button>\n            <button type=\"submit\" class=\"btn btn-danger\">\n\t\t\t\t\t\t\tView Guard Details\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t\t<div class=\"col-md-6\">\n      <ng2-map zoom=\"10\" center=\"Brampton, Canada\">\n    <marker (click)=\"showInfoWindow($event)\"  [position]=\"pos\"></marker>\n  </ng2-map>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 1054:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-12 client-top\">\n\t\t<div class=\"col-md-3\">\n\t\t\t<h3>Alerts</h3>\n\t\t</div>\n\t\t<!-- <div class=\"col-md-9\">\n\t\t\t<div class=\"btn-section pull-right\">\n\t\t\t\t<button class=\"btn btn-primary btn-success\" [routerLink]=\"['add']\" ng-show=\"!asd\">Add</button>\n\n\n\t\t\t</div>\n\t\t\t<div class=\"btn-section col-md-6 pull-right\">\n\t\t\t\t<div class=\"form-group has-feedback\">\n\t                <label for=\"search\" class=\"sr-only\">Search</label>\n\t                <input type=\"text\" class=\"form-control\" ng-model=\"searchKeyword\" placeholder=\"search\" ng-change=\"currentPage=1;\">\n\t                <span class=\"glyphicon glyphicon-search form-control-feedback\"></span>\n\t            </div>\n\t\t\t</div>\n\n\t\t</div> -->\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-md-12\">\n\t    <div class=\"panel panel-default\">\n\t        <div class=\"panel-body\">\n\t            <div class=\"table-responsive\">\n\t                <table class=\"table\">\n\t                    <thead>\n\t                        <tr>\n\n\t                            <th>Guard</th>\n\t                            <th>Client</th>\n\t                            <th>Timestamp</th>\n\t                            <th>Location</th>\n\t                        </tr>\n\t                    </thead>\n\t                    <tbody>\n\t                        <tr ng-repeat=\"client in clients\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <td>John</td>\n\t                            <td>Mac Donalds</td>\n\t                            <td><a href=\"javascript:;\" [routerLink]=\"['/alerts/1']\">2017-25-3 10:16</a></td>\n\t                            <td>Askari 4</td>\n\t                        </tr>\n\t                    </tbody>\n\t                </table>\n\t            </div>\n\t        </div>\n\t    </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 1055:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0\">\n\n        <div class=\"navbar-header ft-left\"><a href=\"index.html\"><img class=\"mar-top-5 mar-left-10\" src=\"assets/guard.png\" height=\"40\" width=\"40\" /></a></div>\n          <div class=\"ft-left navbar-header mar-left-10 mar-top-5\"><h4>Guards v1.0</h4></div>\n\n\n<div class=\"navbar-header pad-right-30 pad-top-20 pull-right\">\n        <a href=\"javascript:;\" [routerLink]=\"['alerts']\"><span class=\"glyphicon glyphicon-alert\"></span></a>\n</div>\n<div class=\"navbar-header pad-right-30 pad-top-20 pull-right\">\n        <a href=\"javascript:;\"  [routerLink]=\"['incidents']\"><span class=\"glyphicon glyphicon-flag\"></span></a>\n</div>\n\n\n    <div class=\"navbar-default sidebar\" role=\"navigation\">\n        <div class=\"sidebar-nav navbar-collapse\">\n            <ul class=\"nav\" id=\"side-menu\">\n                <li>\n                    <a href=\"javascript:;\"  [routerLink]=\"['/dashboard']\"><i class=\"fa fa-dashboard fa-fw\"></i> Dashboard</a>\n                </li>\n                <li>\n                    <a href=\"javacript:;\"  [routerLink]=\"['/clients']\"><i class=\"fa fa-bar-chart-o fa-fw\"></i>Client Management</a>\n                </li>\n                <li>\n                    <a href=\"javascript:;\" [routerLink]=\"['/guards']\"><i class=\"fa fa-table fa-fw\"></i>Guards Management</a>\n                </li>\n                <li>\n                    <a href=\"javascript:;\" [routerLink]=\"['/schedule']\"><i class=\"fa fa-edit fa-fw\"></i>Scheduling & Time Sheet</a>\n                </li>\n                <li>\n                    <a href=\"javascript:;\"  [routerLink]=\"['/reports']\"><i class=\"fa fa-wrench fa-fw\"></i>Reports</a>\n                </li>\n\n            </ul>\n\n\n        </div>\n\n    </div>\n</nav>\n\n\n<div id=\"page-wrapper\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 1056:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t  <ng2-popup #popup></ng2-popup>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-5\">\n\t\t\t<h3>\n\t\t\t\t{{!!id ? 'Edit' : 'Add New'}} Client\n\t\t\t</h3>\n\t\t\t<form class=\"mar-top-20 pad-top-10\" >\n\t\t\t\t<div class=\"form-group\">\n\n\t\t\t\t\t<label for=\"exampleInputEmail1\">\n\t\t\t\t\t\tContact Person\n\t\t\t\t\t</label>\n\t\t\t\t\t<input [(ngModel)]=\"currClient.contactPerson\" name=\"contactPerson\" type=\"text\" class=\"form-control\" id=\"personName\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\n          <label for=\"exampleInputEmail1\">\n            Contact\n          </label>\n          <input type=\"text\" [(ngModel)]=\"currClient.contactNumber\" name=\"contactNumber\" class=\"form-control\" id=\"contact\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\n          <label for=\"exampleInputEmail1\">\n\t\t\t\t\t\tEmail address\n\t\t\t\t\t</label>\n\t\t\t\t\t<input type=\"email\" [(ngModel)]=\"currClient.email\" class=\"form-control\" id=\"email\" name=\"email\" />\n\t\t\t\t</div>\n\n\t\t\t\t<button type=\"submit\"  (click)=\"submit()\"  class=\"btn btn-default\">\n\t\t\t\t\tSave\n\t\t\t\t</button>\n\t\t\t</form>\n\t\t\t<h3>\n\t\t\t\tClients\n\t\t\t</h3>\n\t\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\n\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\tIncident\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\tTimestamp\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\tLocation\n\t\t\t\t\t\t</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t01/04/2012\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tDefault\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t\t<div class=\"col-md-7\">\n\t\t\t<div class=\"row pad-bottom-20\">\n\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t<h3>\n\t\t\t\t\t\tClient's Location\n\t\t\t\t\t</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-5 pad-top-20\">\n\n\t\t\t\t\t<button [disabled]=\"!this.currClient.id\" type=\"button\"   (click)=\"openPopup('small', 'Hello Small Popup')\" class=\"fl-right btn btn-default\">\n\t\t\t\t\t\tAdd New Location\n\t\t\t\t\t</button>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\n\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>\n\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\tCode\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\tName\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\tAddress\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr *ngFor=\"let location of locations\" class=\"active\">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:;>\"><span  (click)=\"openPopup(location.id)\"   class=\"glyphicon glyphicon-edit\"></span></a>\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:;>\"><span class=\"glyphicon glyphicon-remove\"></span></a>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t{{location.code}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t{{location.location}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t{{location.longitude}},{{location.latitude}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 1057:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-9\">\n\n      <form class=\"form-horizontal\">\n<fieldset>\n\n<!-- Form Name -->\n<legend>Add Location</legend>\n\n<!-- Text input-->\n<div class=\"form-group\">\n<label class=\"col-md-2 control-label\" for=\"name\">Name</label>\n<div class=\"col-md-4\">\n<input id=\"name\" name=\"name\" [(ngModel)]=\"currLocation.location\" type=\"text\" placeholder=\"Name\" class=\"form-control input-md\" required=\"\">\n\n</div>\n</div>\n\n<!-- Textarea -->\n<div class=\"form-group\">\n<label class=\"col-md-2 control-label\" for=\"address\">Address</label>\n<div class=\"col-md-4\">\n  <textarea class=\"form-control\" id=\"address\"  name=\"address\">Enter Address</textarea>\n</div>\n</div>\n\n<!-- Text input-->\n<div class=\"form-group\">\n<label class=\"col-md-2 control-label\" for=\"contact\">Contact</label>\n<div class=\"col-md-4\">\n<input id=\"contact\" name=\"contact\" type=\"text\" placeholder=\"Phone number\" class=\"form-control input-md\" required=\"\">\n\n</div>\n</div>\n\n<!-- Select Basic -->\n<div class=\"form-group\">\n<label class=\"col-md-2 control-label\" for=\"City\">City</label>\n<div class=\"col-md-4\">\n  <select id=\"City\" name=\"City\" class=\"form-control\">\n    <option value=\"1\">Alaska</option>\n    <option value=\"2\">Boston</option>\n  </select>\n</div>\n\n\n<label class=\"col-md-2 control-label\" for=\"country\">Country</label>\n<div class=\"col-md-4\">\n  <select id=\"country\" name=\"country\" class=\"form-control\">\n    <option value=\"1\">US</option>\n    <option value=\"2\">USA</option>\n  </select>\n</div>\n</div>\n\n<div class=\"form-group\">\n\t<label class=\"col-md-2 control-label\" for=\"lat\">Select Location</label>\n\t\t<div class=\"col-md-10\">\n\t\t\t<ng2-map zoom=\"10\" center=\"Brampton, Canada\" (click)=\"changeMarker($event)\">\n\t\t\t\t <marker  [position]=\"pos\" draggable=\"true\" (dragend)=\"dragEnd($event)\" ></marker>\n\t\t\t </ng2-map>\n\t </div>\n </div>\n<!-- Text input-->\n<div class=\"form-group\">\n<label class=\"col-md-2 control-label\" for=\"lat\">Latitude</label>\n<div class=\"col-md-4\">\n<input id=\"lat\" name=\"lat\" type=\"text\" [(ngModel)]=\"currLocation.latitude\" placeholder=\"Enter Latitude\" class=\"form-control input-sm\" required=\"\">\n\n</div>\n\n\n<label class=\"col-md-2 control-label\" for=\"longitude\">Longitude</label>\n<div class=\"col-md-4\">\n<input id=\"longitude\" name=\"longitude\" type=\"text\" placeholder=\"Longitude\" [(ngModel)]=\"currLocation.longitude\" class=\"form-control input-sm\" required=\"\">\n\n</div>\n</div>\n\n\n\n\n\n\n<!-- Text input-->\n<div class=\"form-group\">\n<label class=\"col-md-2 control-label\" for=\"zip\">Zip</label>\n<div class=\"col-md-4\">\n<input id=\"zip\" name=\"zip\" type=\"text\" placeholder=\"Zip Code\" class=\"form-control input-md\">\n\n</div>\n</div>\n\n<!-- Text input-->\n<div class=\"form-group\">\n<label class=\"col-md-2 control-label\" for=\"code\">Code</label>\n<div class=\"col-md-4\">\n<input id=\"code\" name=\"code\" type=\"text\" placeholder=\"Code\" class=\"form-control input-md\" required=\"\">\n\n</div>\n</div>\n\n<!-- Multiple Checkboxes (inline) -->\n<div class=\"form-group\">\n<label class=\"col-md-2 control-label\" for=\"doqr\">Generate QR</label>\n<div class=\"col-md-4\">\n  <label class=\"checkbox-inline\" for=\"doqr-0\">\n    <input type=\"checkbox\" name=\"doqr\" id=\"doqr-0\" value=\"1\">\n    Yes\n  </label>\n</div>\n</div>\n\n<!-- Select Basic -->\n<div class=\"form-group\">\n<label class=\"col-md-2 control-label\" for=\"status\">Status</label>\n<div class=\"col-md-4\">\n  <select id=\"status\" name=\"status\" class=\"form-control\">\n    <option value=\"1\">Active</option>\n    <option value=\"2\">In Active</option>\n  </select>\n</div>\n</div>\n\n<!-- Button (Double) -->\n<div class=\"form-group\">\n<label class=\"col-md-2 control-label\" for=\"submit\"></label>\n<div class=\"col-md-8\">\n  <button id=\"submit\" name=\"submit\" type=\"submit\" (click)=\"submit()\" class=\"btn btn-success\">Submit</button>\n  <button id=\"cancel\" name=\"cancel\" type=\"reset\" (click)=\"closePopUp()\" class=\"btn btn-danger\">Cancel</button>\n</div>\n</div>\n\n</fieldset>\n</form>\n\n\n\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n      <div class=\"row qr-location\">\n\n         <img alt=\"Bootstrap Image Preview\" src=\"http://lorempixel.com/140/140/\" />\n         <div class=\"qr-location-buttons\">\n           <button id=\"regen\" name=\"regen\"   class=\"fl-right btn btn-sm btn-default\">Submit</button>\n           <!-- <button id=\"cancel\" name=\"cancel\" type=\"reset\" class=\"btn btn-danger\">Cancel</button> -->\n         </div>\n\n      </div>\n\n\n\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 1058:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-md-12 client-top\">\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<h3>Clients</h3>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-9\">\r\n\t\t\t<div class=\"btn-section pull-right\">\r\n\t\t\t\t<button class=\"btn btn-primary btn-success\" [routerLink]=\"['add']\" ng-show=\"!asd\">Add</button>\r\n\r\n\t\t\t</div>\r\n\t\t\t<div class=\"btn-section col-md-6 pull-right\">\r\n\t\t\t\t<div class=\"form-group has-feedback\">\r\n\t                <label for=\"search\" class=\"sr-only\">Search</label>\r\n\t                <input type=\"text\" class=\"form-control\" ng-model=\"searchKeyword\" placeholder=\"search\" ng-change=\"currentPage=1;\">\r\n\t                <span class=\"glyphicon glyphicon-search form-control-feedback\"></span>\r\n\t            </div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-md-12\">\r\n\t    <div class=\"panel panel-default\">\r\n\t        <div class=\"panel-body\">\r\n\t            <div class=\"table-responsive\">\r\n\t                <table class=\"table\">\r\n\t                    <thead>\r\n\t                        <tr>\r\n\t                            <th></th>\r\n\t                            <th>Name</th>\r\n\t                            <th>Contact Person</th>\r\n\t                            <th>Contact</th>\r\n\t                            <th>Email</th>\r\n\t                            <th>Locations</th>\r\n\t                        </tr>\r\n\t                    </thead>\r\n\t                    <tbody>\r\n\t                        <tr *ngFor=\"let client of clients\">\r\n\t                            <td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" [routerLink]=\"['edit/'+client.id]\"><span class=\"glyphicon glyphicon-edit\"></span></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" (click)=\"deleteClient(client.id)\"><span class=\"glyphicon glyphicon-remove\"></span></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t                            <td>{{client.name}}</td>\r\n\t                            <td>{{client.contactPerson}}</td>\r\n\t                            <td>{{client.contactNumber}}</td>\r\n\t                            <td>-</td>\r\n\t                            <td>-</td>\r\n\t                        </tr>\r\n\t                    </tbody>\r\n\t                </table>\r\n\t            </div>\r\n\t        </div>\r\n\t    </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 1059:
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ 1060:
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\">\r\n<fieldset>\r\n\r\n<!-- Form Name -->\r\n<legend>{{!!id ? 'Edit' : 'Add New'}} Guard</legend>\r\n\r\n<!-- File Button -->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"photo\">Photo</label>\r\n  <div class=\"col-md-4\">\r\n    <input id=\"photo\" name=\"photo\" class=\"input-file\" type=\"file\">\r\n  </div>\r\n</div>\r\n\r\n<!-- Text input-->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"Name\">Guard Name</label>\r\n  <div class=\"col-md-4\">\r\n  <input id=\"Name\" name=\"Name\"  [(ngModel)]=\"currUser.username\" type=\"text\" placeholder=\"Guard Name\" class=\"form-control input-md\" required=\"\">\r\n\r\n  </div>\r\n</div>\r\n\r\n<!-- Text input-->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"pin\">PIN Code</label>\r\n  <div class=\"col-md-4\">\r\n  <input id=\"pin\" name=\"pin\" type=\"text\" [(ngModel)]=\"currUser.pinCode\" placeholder=\"Guards PIN Code\" class=\"form-control input-md\" required=\"\">\r\n\r\n  </div>\r\n</div>\r\n\r\n<!-- Textarea -->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"address\">Address</label>\r\n  <div class=\"col-md-4\">\r\n    <textarea class=\"form-control\" id=\"address\"  [(ngModel)]=\"currUser.address\" name=\"address\"></textarea>\r\n  </div>\r\n</div>\r\n\r\n<!-- Text input-->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"contact\">Contact</label>\r\n  <div class=\"col-md-4\">\r\n  <input id=\"contact\" name=\"contact\" type=\"text\" placeholder=\"Contact Number\" [(ngModel)]=\"currUser.contact\" class=\"form-control input-md\" required=\"\">\r\n\r\n  </div>\r\n</div>\r\n\r\n<!-- Text input-->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"emal\">Email</label>\r\n  <div class=\"col-md-4\">\r\n  <input id=\"emal\" name=\"emal\" type=\"text\" placeholder=\"Email address\" [(ngModel)]=\"currUser.email\" class=\"form-control input-md\" required=\"\">\r\n\r\n  </div>\r\n</div>\r\n\r\n<!-- Multiple Radios -->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"radios\">Status</label>\r\n  <div class=\"col-md-4\">\r\n  <div class=\"radio\">\r\n    <label for=\"radios-0\">\r\n      <input type=\"radio\" name=\"radios\" id=\"radios-0\" value=\"0\" checked=\"checked\">\r\n      Active\r\n    </label>\r\n\t</div>\r\n  <div class=\"radio\">\r\n    <label for=\"radios-1\">\r\n      <input type=\"radio\" name=\"radios\" id=\"radios-1\" value=\"1\">\r\n      Inactive\r\n    </label>\r\n\t</div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"form-group\">\r\n<label class=\"col-md-4 control-label\" for=\"submit\"></label>\r\n<div class=\"col-md-4\">\r\n  <button id=\"submit\" name=\"submit\"  (click)=\"submit()\"  type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n  \r\n</div>\r\n</div>\r\n\r\n</fieldset>\r\n</form>\r\n"

/***/ }),

/***/ 1061:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-12 client-top\">\n\t\t<div class=\"col-md-3\">\n\t\t\t<h3>Guards</h3>\n\t\t</div>\n\t\t<div class=\"col-md-9\">\n\t\t\t<div class=\"btn-section pull-right\">\n\t\t\t\t<button class=\"btn btn-primary btn-success\" [routerLink]=\"['add']\" ng-show=\"!asd\">Add</button>\n\n\n\t\t\t</div>\n\t\t\t<div class=\"btn-section col-md-6 pull-right\">\n\t\t\t\t<div class=\"form-group has-feedback\">\n\t                <label for=\"search\" class=\"sr-only\">Search</label>\n\t                <input type=\"text\" class=\"form-control\" ng-model=\"searchKeyword\" placeholder=\"search\" ng-change=\"currentPage=1;\">\n\t                <span class=\"glyphicon glyphicon-search form-control-feedback\"></span>\n\t            </div>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-md-12\">\n\t    <div class=\"panel panel-default\">\n\t        <div class=\"panel-body\">\n\t            <div class=\"table-responsive\">\n\t                <table class=\"table\">\n\t                    <thead>\n\t                        <tr>\n\t                            <th></th>\n\t                            <th>Name</th>\n\t                            <th>PIN</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Contact</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Address</th>\n\n\t                        </tr>\n\t                    </thead>\n\t                    <tbody>\n\t                        <tr *ngFor=\"let user of users\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;>\" [routerLink]=\"['edit/'+user.id]\" ><span class=\"glyphicon glyphicon-edit\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" (click)=\"deleteGuard(user.id)\"><span class=\"glyphicon glyphicon-remove\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t                            <td>{{user.username}}</td>\n\t                            <td>{{user.pinCode}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{user.contact}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{user.address}}</td>\n\t                        </tr>\n\t                    </tbody>\n\t                </table>\n\t            </div>\n\t        </div>\n\t    </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 1062:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-6\">\n      <h3>Incident Details </h3>\n\t\t\t<form class=\"form-horizontal pad-top-20 mar-top-20\" role=\"form\">\n\t\t\t\t<div class=\"form-group\">\n\n\t\t\t\t\t<label for=\"inputEmail3\" class=\"col-sm-2 control-label\">\n\t\t\t\t\t\tGuard\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-sm-10 mar-top-7\">\n\t\t\t\t\t\t<span>saadzaman@out</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n        <div class=\"form-group\">\n\n\t\t\t\t\t<label for=\"inputEmail3\" class=\"col-sm-2 control-label\">\n\t\t\t\t\t\tClient\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-sm-10 mar-top-7\">\n\t\t\t\t\t\t<span>saadzaman@out</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n        <div class=\"form-group\">\n\n\t\t\t\t\t<label for=\"inputEmail3\" class=\"col-sm-2 control-label\">\n\t\t\t\t\t\tLocation\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-sm-10 mar-top-7\">\n\t\t\t\t\t\t<span>saadzaman@out</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n        <div class=\"form-group\">\n\n\t\t\t\t\t<label for=\"inputEmail3\" class=\"col-sm-2 control-label\">\n\t\t\t\t\t\tTimestamp\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-sm-10 mar-top-7\">\n\t\t\t\t\t\t<span>saadzaman@out</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n        <div class=\"form-group\">\n\n\t\t\t\t\t<label for=\"inputEmail3\" class=\"col-sm-2 control-label\">\n\t\t\t\t\t\tTracking\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-sm-10 mar-top-7\">\n\t\t\t\t\t\t<span>saadzaman@out</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group pad-top-20\">\n\t\t\t\t\t<div class=\"col-sm-offset-2 col-sm-10\">\n\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-info\">\n\t\t\t\t\t\t\tTrack\n\t\t\t\t\t\t</button>\n            <button type=\"submit\" class=\"btn btn-danger\">\n\t\t\t\t\t\t\tView Guard Details\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t\t<div class=\"col-md-6\">\n\t\t\t<ng2-map zoom=\"10\" center=\"Brampton, Canada\">\n    <marker (click)=\"showInfoWindow($event)\"  [position]=\"pos\"></marker>\n  </ng2-map>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 1063:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-12 client-top\">\n\t\t<div class=\"col-md-3\">\n\t\t\t<h3>Incidents</h3>\n\t\t</div>\n\t\t<!-- <div class=\"col-md-9\">\n\t\t\t<div class=\"btn-section pull-right\">\n\t\t\t\t<button class=\"btn btn-primary btn-success\" [routerLink]=\"['add']\" ng-show=\"!asd\">Add</button>\n\n\n\t\t\t</div>\n\t\t\t<div class=\"btn-section col-md-6 pull-right\">\n\t\t\t\t<div class=\"form-group has-feedback\">\n\t                <label for=\"search\" class=\"sr-only\">Search</label>\n\t                <input type=\"text\" class=\"form-control\" ng-model=\"searchKeyword\" placeholder=\"search\" ng-change=\"currentPage=1;\">\n\t                <span class=\"glyphicon glyphicon-search form-control-feedback\"></span>\n\t            </div>\n\t\t\t</div>\n\n\t\t</div> -->\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-md-12\">\n\t    <div class=\"panel panel-default\">\n\t        <div class=\"panel-body\">\n\t            <div class=\"table-responsive\">\n\t                <table class=\"table\">\n\t                    <thead>\n\t                        <tr>\n\n\t                            <th>Incident</th>\n\t                            <th>Description</th>\n\t                            <th>Type</th>\n                              <th>Guard</th>\n                              <th>Client</th>\n                              <th>Time</th>\n\t                            <th>Location</th>\n\t                        </tr>\n\t                    </thead>\n\t                    <tbody>\n\t                        <tr ng-repeat=\"client in clients\">\n                              <td>Armed Robbery</td>\n                              <td>At gunpoint</td>\n                              <td>Robbery</td>\n                              <td>John</td>\n\t                            <td>Mac Donalds</td>\n\t                            <td><a href=\"javascript:;\" [routerLink]=\"['/incidents/1']\">2017-25-3 10:16</a></td>\n\t                            <td>Askari 4</td>\n\t                        </tr>\n\t                    </tbody>\n\t                </table>\n\t            </div>\n\t        </div>\n\t    </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 1064:
/***/ (function(module, exports) {

module.exports = "<p>\n  reports works!\n</p>\n"

/***/ }),

/***/ 1065:
/***/ (function(module, exports) {

module.exports = "<form ngNoForm class=\"form-horizontal\">\r\n<fieldset>\r\n\r\n<!-- Form Name -->\r\n<legend>{{!!id ? 'Edit' : 'Add New'}} Duty</legend>\r\n\r\n<!-- Select Basic -->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"guard\">Guard</label>\r\n  <div class=\"col-md-4\">\r\n    <select id=\"guard\" name=\"guard\" class=\"form-control\" type=\"number\" [(ngModel)]=\"currDuty.guardId\" (ngModelChange)=\"guardSelected()\">\r\n      <option *ngFor=\"let guard of guards\" [ngValue]=\"guard.id\">{{guard.username}}</option>\r\n    </select>\r\n  </div>\r\n</div>\r\n\r\n<!-- Select Basic -->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"client\">Client</label>\r\n  <div class=\"col-md-4\">\r\n    <select id=\"client\" name=\"client\" class=\"form-control\" type=\"number\" [(ngModel)]=\"currDuty.clientId\" (ngModelChange)=\"clientSelected()\">\r\n      <option *ngFor=\"let client of clients\" [ngValue]=\"client.id\">{{client.contactPerson}}</option>\r\n    </select>\r\n  </div>\r\n</div>\r\n\r\n<!-- Select Basic -->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"location\">Location</label>\r\n  <div class=\"col-md-4\">\r\n    <select id=\"location\" name=\"location\" class=\"form-control\" type=\"number\" [(ngModel)]=\"currDuty.clientLocationId\">\r\n      <option *ngFor=\"let location of locations\" [ngValue]=\"location.id\">{{location.location}}</option>\r\n    </select>\r\n  </div>\r\n</div>\r\n\r\n<!-- Text input-->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"textinput\">Date</label>\r\n  <div class=\"col-md-4\">\r\n  <!-- <input id=\"textinput\" name=\"textinput\" type=\"text\" placeholder=\"placeholder\" class=\"form-control input-md\"> -->\r\n  <input class=\"form-control input-md\"\r\n     [(ngModel)]=\"currDuty.date\"\r\n      ng2-datetime-picker\r\n    date-format=\"YYYY-MM-DD\"\r\n     year=\"2014\"\r\n     month=\"12\"\r\n     day=\"31\"\r\n     hour=\"23\"\r\n     minute='59'\r\n     date-only=\"true\"\r\n     [close-on-select]=\"false\"  />\r\n  <span class=\"help-block\">Click to select date</span>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"fromTime\">From</label>\r\n  <div class=\"col-md-4\">\r\n  <!-- <input id=\"textinput\" name=\"textinput\" type=\"text\" placeholder=\"placeholder\" class=\"form-control input-md\"> -->\r\n  <input class=\"form-control input-md\"\r\n     [(ngModel)]=\"currDuty.startTime\"\r\n      ng2-datetime-picker\r\n      date-format=\"hh:mm a\"\r\n     hour=\"12\"\r\n     minute='59'\r\n     time-only=\"true\"\r\n     [close-on-select]=\"false\"  />\r\n  <span class=\"help-block\">Click to select starting time</span>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"fromTime\">To</label>\r\n  <div class=\"col-md-4\">\r\n  <!-- <input id=\"textinput\" name=\"textinput\" type=\"text\" placeholder=\"placeholder\" class=\"form-control input-md\"> -->\r\n  <input class=\"form-control input-md\"\r\n     [(ngModel)]=\"currDuty.endTime\"\r\n      ng2-datetime-picker\r\n      date-format=\"hh:mm a\"\r\n     hour=\"12\"\r\n     minute='59'\r\n     time-only=\"true\"\r\n     [close-on-select]=\"false\"  />\r\n  <span class=\"help-block\">Click to set ending time</span>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"form-group\">\r\n<label class=\"col-md-4 control-label\" for=\"submit\"></label>\r\n<div class=\"col-md-4\">\r\n  <a (click)=\"submit()\" class=\"btn btn-success\">Submit</a>\r\n  <!-- <button id=\"cancel\" name=\"cancel\" type=\"reset\" (click)=\"closePopUp()\" class=\"mar-left-5 btn btn-danger\">Cancel</button> -->\r\n</div>\r\n</div>\r\n\r\n</fieldset>\r\n</form>\r\n"

/***/ }),

/***/ 1066:
/***/ (function(module, exports) {

module.exports = "<h3>McDonalds Schedule</h3>\n\n\n\n<h4> Locations </h4>\n\n<div class=\"panel-group\" id=\"accordion\">\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h4 class=\"panel-title\">\n      <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\">\n        Askari 4\n      </a>\n    </h4>\n  </div>\n  <div id=\"collapseOne\" class=\"panel-collapse collapse in\">\n    <div class=\"panel-body\">\n\n      <div class=\"row pad-bottom-20 pad-right-20\">\n      <div class=\"btn-section pull-right\">\n        <button class=\"btn btn-primary btn-success\" [routerLink]=\"['timesheet']\" ng-show=\"!asd\">View Time Sheet</button>\n\n\n      </div>\n      </div>\n\n\n      <div class=\"panel panel-default\">\n\t        <div class=\"panel-body\">\n\t            <div class=\"table-responsive\">\n\t                <table class=\"table\">\n\t                    <thead>\n\t                        <tr>\n\t                            <th></th>\n\t                            <th>Guard</th>\n\t                            <th>Date</th>\n\t                            <th>Start Time</th>\n\t                            <th>End Time</th>\n\n\t                        </tr>\n\t                    </thead>\n\t                    <tbody>\n\t                        <tr ng-repeat=\"client in clients\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;>\" [routerLink]=\"['/schedule/edit/1']\" ><span class=\"glyphicon glyphicon-edit\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;>\"><span class=\"glyphicon glyphicon-remove\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\n\t                            <td>John Mac</td>\n\t                            <td>2017 23 3</td>\n\t                            <td>8:00</td>\n\t                            <td>9:14</td>\n\t                        </tr>\n\t                    </tbody>\n\t                </table>\n\t            </div>\n\t        </div>\n\t    </div>\n    </div>\n  </div>\n</div>\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h4 class=\"panel-title\">\n      <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\">\n        Sea View\n      </a>\n    </h4>\n  </div>\n  <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\n    <div class=\"panel-body\">\n      <div class=\"panel panel-default\">\n\t        <div class=\"panel-body\">\n\t            <div class=\"table-responsive\">\n\t                <table class=\"table\">\n\t                    <thead>\n\t                        <tr>\n\t                            <th></th>\n                              <th>Guard</th>\n\t                            <th>Date</th>\n\t                            <th>Start Time</th>\n\t                            <th>End Time</th>\n\t                        </tr>\n\t                    </thead>\n\t                    <tbody>\n\t                        <tr ng-repeat=\"client in clients\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;>\" [routerLink]=\"['edit/1']\" ><span class=\"glyphicon glyphicon-edit\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;>\"><span class=\"glyphicon glyphicon-remove\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n                            <td>John Mac</td>\n                            <td>2017 23 3</td>\n                            <td>8:00</td>\n                            <td>9:14</td>\n\t                        </tr>\n\t                    </tbody>\n\t                </table>\n\t            </div>\n\t        </div>\n\t    </div>\n    </div>\n  </div>\n</div>\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h4 class=\"panel-title\">\n      <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\">\n        Gul Plaza\n      </a>\n    </h4>\n  </div>\n  <div id=\"collapseThree\" class=\"panel-collapse collapse\">\n    <div class=\"panel-body\">\n      <div class=\"panel panel-default\">\n\t        <div class=\"panel-body\">\n\t            <div class=\"table-responsive\">\n\t                <table class=\"table\">\n\t                    <thead>\n\t                        <tr>\n\t                            <th></th>\n                              <th>Guard</th>\n\t                            <th>Date</th>\n\t                            <th>Start Time</th>\n\t                            <th>End Time</th>\n\t                        </tr>\n\t                    </thead>\n\t                    <tbody>\n\t                        <tr ng-repeat=\"client in clients\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;>\" [routerLink]=\"['edit/1']\" ><span class=\"glyphicon glyphicon-edit\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;>\"><span class=\"glyphicon glyphicon-remove\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n                            <td>John Mac</td>\n                            <td>2017 23 3</td>\n                            <td>8:00</td>\n                            <td>9:14</td>\n\t                        </tr>\n\t                    </tbody>\n\t                </table>\n\t            </div>\n\t        </div>\n\t    </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ 1067:
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-section pull-right\">\n  <button class=\"btn btn-primary btn-success\" [routerLink]=\"['add']\" ng-show=\"!asd\">Add Duty</button>\n\n</div>\n<tabset>\n  <tab heading=\"Client Schedules\">\n\n    <div class=\"row pad-top-20\">\n\n    \t<div class=\"col-md-12\">\n    \t    <div class=\"panel panel-default\">\n    \t        <div class=\"panel-body\">\n    \t            <div class=\"table-responsive\">\n    \t                <table class=\"table\">\n    \t                    <thead>\n    \t                        <tr>\n\n    \t                            <th>Client</th>\n    \t                            <th>Number Of Locations</th>\n    \t                            <th>Status</th>\n    \t                            <th></th>\n\n    \t                        </tr>\n    \t                    </thead>\n    \t                    <tbody>\n    \t                        <tr ng-repeat=\"client in clients\">\n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Mc Donalds</td>\n    \t                            <td>3</td>\n    \t                            <td>Active</td>\n    \t                            <td><a href=\"javascript:;\" [routerLink]=\"['detail/1']\" >View Schedule</a></td>\n\n    \t                        </tr>\n    \t                    </tbody>\n    \t                </table>\n    \t            </div>\n    \t        </div>\n    \t    </div>\n        </div>\n    </div>\n\n\n  </tab>\n\n\n\n\n  <tab heading=\"Guards Schedule\">\n\n\n    <div class=\"row pad-top-20\">\n\n      <div class=\"col-md-12\">\n          <div class=\"panel panel-default\">\n              <div class=\"panel-body\">\n                  <div class=\"table-responsive\">\n                      <table class=\"table\">\n                          <thead>\n                              <tr>\n\n                                  <th>Guards</th>\n                                  <th>Number Of Duties</th>\n                                  <th>Status</th>\n                                  <th></th>\n                              </tr>\n                          </thead>\n                          <tbody>\n                              <tr ng-repeat=\"client in clients\">\n                                <td>John Mac</td>\n                                  <td>3</td>\n                                  <td>Active</td>\n                                  <td><a href=\"javascript:;\" [routerLink]=\"['detail/1']\" >View Schedule</a></td>\n                              </tr>\n                          </tbody>\n                      </table>\n                  </div>\n              </div>\n          </div>\n        </div>\n    </div>\n\n\n\n\n\n  </tab>\n</tabset>\n"

/***/ }),

/***/ 1068:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-12 client-top\">\n\t\t<div class=\"col-md-3 mar-bottom-10\">\n\t\t\t<h3>Time Sheet</h3>\n\t\t</div>\n\n\t</div>\n\t<div class=\"col-md-12\">\n\t    <div class=\"panel panel-default\">\n\t        <div class=\"panel-body\">\n\t            <div class=\"table-responsive\">\n\t                <table class=\"table\">\n\t                    <thead>\n\t                        <tr>\n\n\t                            <th>Guard</th>\n\t                            <th>CheckIn</th>\n\t                            <th>CheckOut</th>\n\t                            <th>Status</th>\n\t                            <th>Break Dur</th>\n                              <th>Total Dur</th>\n\t                        </tr>\n\t                    </thead>\n\t                    <tbody>\n\t                        <tr ng-repeat=\"client in clients\">\n\n\t                            <td>Saad</td>\n\t                            <td>8:00 am</td>\n\t                            <td>9:15 pm</td>\n\t                            <td><span class=\"label label-success\">Success</span></td>\n\t                            <td>5</td>\n                              <td>75</td>\n\t                        </tr>\n\t                    </tbody>\n                      <tbody>\n\t                        <tr ng-repeat=\"client in clients\">\n\n\t                            <td>John</td>\n\t                            <td>10:00 am</td>\n\t                            <td>11:15 pm</td>\n\t                            <td><span class=\"label label-info\">Delayed</span></td>\n\t                            <td>15</td>\n                              <td>75</td>\n\t                        </tr>\n\t                    </tbody>\n\t                </table>\n\t            </div>\n\t        </div>\n\t    </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 1069:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-5\">\n\t\t\t<h3>\n\t\t\t\th3. Lorem ipsum dolor sit amet.\n\t\t\t</h3>\n\t\t\t<form role=\"form\">\n\t\t\t\t<div class=\"form-group\">\n\n\t\t\t\t\t<label for=\"exampleInputEmail1\">\n\t\t\t\t\t\tContact Person\n\t\t\t\t\t</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"personName\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\n          <label for=\"exampleInputEmail1\">\n            Contact\n          </label>\n          <input type=\"text\" class=\"form-control\" id=\"contact\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\n          <label for=\"exampleInputEmail1\">\n\t\t\t\t\t\tEmail address\n\t\t\t\t\t</label>\n\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\" />\n\t\t\t\t</div>\n\n\t\t\t\t<button type=\"submit\" class=\"btn btn-default\">\n\t\t\t\t\tSave\n\t\t\t\t</button>\n\t\t\t</form>\n\t\t\t<h3>\n\t\t\t\th3. Lorem ipsum dolor sit amet.\n\t\t\t</h3>\n\t\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t#\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\tProduct\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\tPayment Taken\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\tStatus\n\t\t\t\t\t\t</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t1\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t01/04/2012\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tDefault\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr class=\"active\">\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t1\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t01/04/2012\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tApproved\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr class=\"success\">\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t2\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t02/04/2012\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tDeclined\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr class=\"warning\">\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t3\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t03/04/2012\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tPending\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr class=\"danger\">\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t4\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t04/04/2012\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tCall in to confirm\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t\t<div class=\"col-md-7\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t<h3>\n\t\t\t\t\t\th3. Lorem ipsum dolor sit amet.\n\t\t\t\t\t</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-5\">\n\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\">\n\t\t\t\t\t\tDefault\n\t\t\t\t\t</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\">\n\t\t\t\t\t\tDefault\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n        <div class=\"col-md-12\">\n\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-default\">\n\t\t\t\t\t\tDefault\n\t\t\t\t\t</button>\n          <button type=\"button\" class=\"btn btn-sm btn-default\">\n\t\t\t\t\t\tDefault\n\t\t\t\t\t</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-default\">\n\t\t\t\t\t\tDefault\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t#\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\tProduct\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\tPayment Taken\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\tStatus\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t1\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t01/04/2012\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tDefault\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"active\">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t1\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t01/04/2012\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tApproved\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"success\">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t2\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t02/04/2012\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tDeclined\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"warning\">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t3\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t03/04/2012\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tPending\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"danger\">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t4\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t04/04/2012\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tCall in to confirm\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 1333:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(711);


/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_api_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_ui__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_ui__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientsComponent = (function () {
    function ClientsComponent(apiService) {
        this.apiService = apiService;
    }
    ClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getClients().subscribe(function (res) {
            console.log(res);
            _this.clients = res._embedded.clients;
        }, function (err) {
            console.log(err);
        });
    };
    ClientsComponent.prototype.deleteClient = function (id) {
        var _this = this;
        this.apiService.delete('clients', id).subscribe(function (res) {
            console.log(res);
            for (var i = 0; i < _this.clients.length; i++) {
                console.log(_this.clients[i]);
                if (!!_this.clients[i] && _this.clients[i].id == id) {
                    _this.clients.splice(i);
                }
            }
        }, function (err) { console.log(err); });
        /*    this.popup.open(Ng2MessagePopupComponent, {
             //classNames: size,
             title: 'Delete Client',
             message: "Are you sure you want to delete the client ?",
             buttons: {
               OK: () => {
        
        
               },
               CANCEL: () => {
                 this.popup.close();
               }
             }
           });*/
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_ui__["Ng2PopupComponent"]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_ui__["Ng2PopupComponent"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_ui__["Ng2PopupComponent"]) === 'function' && _a) || Object)
    ], ClientsComponent.prototype, "popup", void 0);
    ClientsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__(1058)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__common_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__common_api_service__["a" /* ApiService */]) === 'function' && _b) || Object])
    ], ClientsComponent);
    return ClientsComponent;
    var _a, _b;
}());
//# sourceMappingURL=E:/unitsecurity/src/clients.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DutiesResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DutiesResolver = (function () {
    function DutiesResolver(apiService) {
        this.apiService = apiService;
    }
    DutiesResolver.prototype.resolve = function (route) {
        console.log(route);
        var clientId = route.params['id'];
        if (!!clientId) {
            var todaysDate = moment().format('YYYY-MM-DD');
            return this.apiService.getDuties(clientId, todaysDate);
        }
        else {
        }
    };
    DutiesResolver = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], DutiesResolver);
    return DutiesResolver;
    var _a;
}());
//# sourceMappingURL=E:/unitsecurity/src/duties.resolver.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_api_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GuardsComponent = (function () {
    function GuardsComponent(apiService) {
        this.apiService = apiService;
    }
    GuardsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getUsers().subscribe(function (res) {
            _this.users = res._embedded.users.filter(function (user) { return user.userType == 'GUARD'; });
            console.log(_this.users);
        }, function (err) {
            console.log(err);
        });
    };
    GuardsComponent.prototype.deleteGuard = function (id) {
        var _this = this;
        this.apiService.delete('users', id).subscribe(function (res) {
            console.log(res);
            for (var i = 0; i < _this.users.length; i++) {
                console.log(_this.users[i]);
                if (!!_this.users[i] && _this.users[i].id == id) {
                    _this.users.splice(i);
                }
            }
        }, function (err) { console.log(err); });
    };
    GuardsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-guards',
            template: __webpack_require__(1061)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__common_api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], GuardsComponent);
    return GuardsComponent;
    var _a;
}());
//# sourceMappingURL=E:/unitsecurity/src/guards.component.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(1071);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiService = (function () {
    // Resolve HTTP using the constructor
    function ApiService(http) {
        this.http = http;
        this.baseUrl = 'http://54.190.51.6:3307/';
        this.baseApiUrl = 'http://54.190.51.6:3307/api/';
        this.commentsUrl = 'http://localhost:3000/api/comments';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('content-type', 'application/json');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: headers,
            withCredentials: true
        });
    }
    ApiService.prototype.login = function (user, pass) {
        var params = "username=" + user + "&password=" + pass;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('content-type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: headers,
            withCredentials: true
        });
        // ...using get request
        return this.http.post(this.baseUrl + 'login', params, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error || 'Server error'); });
    };
    ApiService.prototype.getClients = function (id) {
        // ...using get request
        return this.http.get(this.baseApiUrl + (!!id ? 'clients/' + id : 'clients/search/findMyClients'), this.options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error || 'Server error'); });
    };
    ApiService.prototype.getLocations = function (clientId) {
        //!!id ? 'clients/'+id :
        // ...using get request
        return this.http.get(this.baseApiUrl + ('clientLocations/search/findByClientId?clientID=' + clientId), this.options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error || 'Server error'); });
    };
    ApiService.prototype.getUsers = function (id) {
        //!!id ? 'clients/'+id :
        // ...using get request
        return this.http.get(this.baseApiUrl + (!!id ? 'users/' + id : 'users'), this.options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error || 'Server error'); });
    };
    ApiService.prototype.add = function (type, obj) {
        return this.http.post(this.baseApiUrl + type, obj, this.options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error || 'Server error'); });
    };
    ApiService.prototype.addLocation = function (location) {
        return this.http.post(this.baseApiUrl + 'addclientlocation', location, this.options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error || 'Server error'); });
    };
    ApiService.prototype.delete = function (type, id) {
        return this.http.delete(this.baseApiUrl + type + '/' + id, this.options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error || 'Server error'); });
    };
    ApiService.prototype.getDuties = function (id, fromDate) {
        return this.http.get(this.baseApiUrl + 'dutySchedules/findByClientId?clientId=' + id + '&fromDate=' + fromDate, this.options)
            .map(function (res) { return res.json()._embedded.dutySchedules; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error || 'Server error'); });
    };
    ApiService.prototype.getTimesheets = function (id) {
        return this.http.get(this.baseApiUrl + 'duties', this.options)
            .map(function (res) { return res.json()._embedded.duties; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error || 'Server error'); });
    };
    ApiService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], ApiService);
    return ApiService;
    var _a;
}());
//# sourceMappingURL=E:/unitsecurity/src/api.service.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertDetailComponent = (function () {
    function AlertDetailComponent() {
        this.pos = [43.72, -79.7699];
    }
    AlertDetailComponent.prototype.ngOnInit = function () {
    };
    AlertDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alert-detail',
            template: __webpack_require__(1053),
            styles: [__webpack_require__(1049)]
        }), 
        __metadata('design:paramtypes', [])
    ], AlertDetailComponent);
    return AlertDetailComponent;
}());
//# sourceMappingURL=E:/unitsecurity/src/alert-detail.component.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertComponent = (function () {
    function AlertComponent() {
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    AlertComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(1054),
        }), 
        __metadata('design:paramtypes', [])
    ], AlertComponent);
    return AlertComponent;
}());
//# sourceMappingURL=E:/unitsecurity/src/alert.component.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_ui__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_location_add_location_component__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_client__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_api_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddClientComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddClientComponent = (function () {
    function AddClientComponent(_route, apiService) {
        this._route = _route;
        this.apiService = apiService;
        this.currClient = new __WEBPACK_IMPORTED_MODULE_4__models_client__["a" /* Client */]();
    }
    AddClientComponent.prototype.loadClients = function () {
        var _this = this;
        this.apiService.getClients(this.id).subscribe(function (res) {
            _this.currClient = res;
            console.log(_this.currClient);
            _this.apiService.getLocations(_this.currClient.id).subscribe(function (locations) {
                _this.locations = locations._embedded.clientLocations;
                console.log('locations', locations);
            });
        }, function (err) {
            console.log(err);
        });
    };
    AddClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.queryParams.subscribe(function (queryParams) {
            if (_this.lastEnteredLocation != queryParams['location']) {
                _this.lastEnteredLocation = queryParams['location'];
                _this.loadClients();
            }
        });
        this._route.params.subscribe(function (params) {
            _this.id = +params["id"];
            if (!!_this.id) {
                _this.loadClients();
            }
        });
    };
    AddClientComponent.prototype.submit = function () {
        var _this = this;
        this.apiService.add('clients', this.currClient).subscribe(function (res) {
            _this.currClient = res;
            console.log(_this.currClient);
        }, function (err) {
            console.log(err);
        });
    };
    AddClientComponent.prototype.openPopup = function (locationId) {
        if (!!locationId) {
            this.apiService.currTempId = this.currClient.id;
            this.popup.open(__WEBPACK_IMPORTED_MODULE_2__add_location_add_location_component__["a" /* AddLocationComponent */], {
                closeWindow: true,
                clientId: this.currClient.id,
                classNames: 'large location-popup'
            });
        }
        else {
            this.apiService.currTempLocId = locationId;
            this.popup.open(__WEBPACK_IMPORTED_MODULE_2__add_location_add_location_component__["a" /* AddLocationComponent */], {
                closeWindow: true,
                clientId: this.currClient.id,
                classNames: 'large location-popup'
            });
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ng2_ui__["Ng2PopupComponent"]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_ui__["Ng2PopupComponent"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_ui__["Ng2PopupComponent"]) === 'function' && _a) || Object)
    ], AddClientComponent.prototype, "popup", void 0);
    AddClientComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-client',
            template: __webpack_require__(1056)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__common_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__common_api_service__["a" /* ApiService */]) === 'function' && _c) || Object])
    ], AddClientComponent);
    return AddClientComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=E:/unitsecurity/src/add-client.component.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_ui__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_location__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_api_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddLocationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddLocationComponent = (function () {
    function AddLocationComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.currLocation = new __WEBPACK_IMPORTED_MODULE_3__models_location__["a" /* Location */]();
        this.pos = [43.72, -79.7699];
        console.log(this.router);
    }
    AddLocationComponent.prototype.dragEnd = function (event) {
        if (!!event.latLng) {
            this.pos = (event.latLng);
            this.currLocation.latitude = this.pos.lat();
            this.currLocation.longitude = this.pos.lng();
            event.target.ng2MapComponent.map.panTo(event.latLng);
        }
    };
    AddLocationComponent.prototype.changeMarker = function (event) {
        if (event instanceof MouseEvent)
            return;
        this.pos = (event.latLng);
        this.currLocation.latitude = this.pos.lat();
        this.currLocation.longitude = this.pos.lng();
        event.target.panTo(event.latLng);
    };
    AddLocationComponent.prototype.submit = function () {
        var _this = this;
        var clientId = this.apiService.currTempId;
        this.currLocation.clientId = clientId;
        console.log('submit called');
        this.apiService.addLocation(this.currLocation).subscribe(function (res) {
            _this.currLocation = res;
            console.log(_this.currLocation);
            _this.router.navigate(['/clients/edit/' + clientId], { queryParams: { location: _this.currLocation.id } });
            //this.router.navigateByUrl('/clients/edit/'+clientId);
            _this.popup.close();
        }, function (err) {
            console.log(err);
        });
    };
    AddLocationComponent.prototype.ngOnInit = function () {
    };
    AddLocationComponent.prototype.closePopUp = function () {
        this.popup.close();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_ui__["Ng2PopupComponent"]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_ui__["Ng2PopupComponent"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_ui__["Ng2PopupComponent"]) === 'function' && _a) || Object)
    ], AddLocationComponent.prototype, "popup", void 0);
    AddLocationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-location',
            template: __webpack_require__(1057)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__common_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__common_api_service__["a" /* ApiService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _c) || Object])
    ], AddLocationComponent);
    return AddLocationComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=E:/unitsecurity/src/add-location.component.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientsResolver = (function () {
    function ClientsResolver(apiService) {
        this.apiService = apiService;
    }
    ClientsResolver.prototype.resolve = function () {
        console.log('called');
        return this.apiService.getClients();
    };
    ClientsResolver = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], ClientsResolver);
    return ClientsResolver;
    var _a;
}());
//# sourceMappingURL=E:/unitsecurity/src/clients.resolver.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesheetsResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimesheetsResolver = (function () {
    function TimesheetsResolver(apiService) {
        this.apiService = apiService;
    }
    TimesheetsResolver.prototype.resolve = function () {
        console.log('called');
        return this.apiService.getTimesheets(0);
    };
    TimesheetsResolver = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], TimesheetsResolver);
    return TimesheetsResolver;
    var _a;
}());
//# sourceMappingURL=E:/unitsecurity/src/timesheets.resolver.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersResolver = (function () {
    function UsersResolver(apiService) {
        this.apiService = apiService;
    }
    UsersResolver.prototype.resolve = function () {
        console.log('called');
        return this.apiService.getUsers();
    };
    UsersResolver = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], UsersResolver);
    return UsersResolver;
    var _a;
}());
//# sourceMappingURL=E:/unitsecurity/src/users.resolver.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(1059),
            styles: [__webpack_require__(1050)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=E:/unitsecurity/src/dashboard.component.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_api_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(837);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGuardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddGuardComponent = (function () {
    function AddGuardComponent(_route, apiService) {
        this._route = _route;
        this.apiService = apiService;
        this.currUser = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]();
    }
    AddGuardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.id = +params["id"];
            if (!!_this.id) {
                _this.apiService.getUsers(_this.id).subscribe(function (res) {
                    _this.currUser = res;
                    console.log(_this.currUser, 'user');
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    AddGuardComponent.prototype.submit = function () {
        var _this = this;
        this.currUser.userType = 'GUARD';
        this.apiService.add('users', this.currUser).subscribe(function (res) {
            _this.currUser = res;
            console.log(_this.currUser);
        }, function (err) {
            console.log(err);
        });
    };
    AddGuardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addguard',
            template: __webpack_require__(1060)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__common_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__common_api_service__["a" /* ApiService */]) === 'function' && _b) || Object])
    ], AddGuardComponent);
    return AddGuardComponent;
    var _a, _b;
}());
//# sourceMappingURL=E:/unitsecurity/src/addguard.component.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncidentDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IncidentDetailComponent = (function () {
    function IncidentDetailComponent() {
        this.pos = [43.72, -79.7699];
    }
    IncidentDetailComponent.prototype.ngOnInit = function () {
    };
    IncidentDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-incident-detail',
            template: __webpack_require__(1062),
            styles: [__webpack_require__(1051)]
        }), 
        __metadata('design:paramtypes', [])
    ], IncidentDetailComponent);
    return IncidentDetailComponent;
}());
//# sourceMappingURL=E:/unitsecurity/src/incident-detail.component.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncidentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IncidentComponent = (function () {
    function IncidentComponent() {
    }
    IncidentComponent.prototype.ngOnInit = function () {
    };
    IncidentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-incident',
            template: __webpack_require__(1063)
        }), 
        __metadata('design:paramtypes', [])
    ], IncidentComponent);
    return IncidentComponent;
}());
//# sourceMappingURL=E:/unitsecurity/src/incident.component.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportsComponent = (function () {
    function ReportsComponent() {
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(1064),
            styles: [__webpack_require__(1052)]
        }), 
        __metadata('design:paramtypes', [])
    ], ReportsComponent);
    return ReportsComponent;
}());
//# sourceMappingURL=E:/unitsecurity/src/reports.component.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_duty__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_api_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDutyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddDutyComponent = (function () {
    function AddDutyComponent(_route, apiService) {
        this._route = _route;
        this.apiService = apiService;
        this.currDuty = new __WEBPACK_IMPORTED_MODULE_2__models_duty__["a" /* Duty */]();
    }
    AddDutyComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this._route.snapshot.data['clients']);
        console.log(this._route.snapshot.data['users']);
        this.clients = this._route.snapshot.data['clients']._embedded.clients;
        this.guards = this._route.snapshot.data['users']._embedded.users;
        this._route.params.subscribe(function (params) {
            _this.id = +params["id"];
        });
    };
    AddDutyComponent.prototype.guardSelected = function () {
        console.log(this.currDuty.guardId);
    };
    AddDutyComponent.prototype.clientSelected = function () {
        var _this = this;
        console.log(this.currDuty.clientId);
        this.apiService.getLocations(this.currDuty.clientId).subscribe(function (locations) {
            _this.locations = locations._embedded.clientLocations;
            console.log('locations', locations);
        });
    };
    AddDutyComponent.prototype.submit = function () {
        var _this = this;
        this.currDuty.date = new Date(this.currDuty.startTime);
        this.currDuty.date = moment(this.currDuty.startTime).format('YYYY-MM-DD');
        this.currDuty.startTime = new Date(this.currDuty.startTime);
        this.currDuty.startTime = this.currDuty.date + 'T' + moment(this.currDuty.startTime).format('hh:mm:ss');
        this.currDuty.endTime = new Date(this.currDuty.endTime);
        this.currDuty.endTime = this.currDuty.date + 'T' + moment(this.currDuty.endTime).format('hh:mm:ss');
        this.currDuty.allowedBreakHrs = 1;
        this.apiService.add('dutySchedules/add', this.currDuty).subscribe(function (res) {
            _this.currDuty = new __WEBPACK_IMPORTED_MODULE_2__models_duty__["a" /* Duty */]();
            console.log(_this.currDuty);
        }, function (err) {
            console.log(err);
        });
    };
    AddDutyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-duty',
            template: __webpack_require__(1065)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__common_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__common_api_service__["a" /* ApiService */]) === 'function' && _b) || Object])
    ], AddDutyComponent);
    return AddDutyComponent;
    var _a, _b;
}());
//# sourceMappingURL=E:/unitsecurity/src/add-duty.component.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScheduleDetailComponent = (function () {
    function ScheduleDetailComponent() {
    }
    ScheduleDetailComponent.prototype.ngOnInit = function () {
    };
    ScheduleDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-schedule-detail',
            template: __webpack_require__(1066)
        }), 
        __metadata('design:paramtypes', [])
    ], ScheduleDetailComponent);
    return ScheduleDetailComponent;
}());
//# sourceMappingURL=E:/unitsecurity/src/schedule-detail.component.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_api_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleComponent = (function () {
    function ScheduleComponent(apiService, _route) {
        this.apiService = apiService;
        this._route = _route;
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        console.log(this._route.snapshot.data['duties']);
    };
    ScheduleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(1067)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__common_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], ScheduleComponent);
    return ScheduleComponent;
    var _a, _b;
}());
//# sourceMappingURL=E:/unitsecurity/src/schedule.component.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_api_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesheetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimesheetComponent = (function () {
    function TimesheetComponent(_route, apiService) {
        this._route = _route;
        this.apiService = apiService;
    }
    TimesheetComponent.prototype.ngOnInit = function () {
        console.log(this._route.snapshot.data['timesheets']);
    };
    TimesheetComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-timesheet',
            template: __webpack_require__(1068)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__common_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__common_api_service__["a" /* ApiService */]) === 'function' && _b) || Object])
    ], TimesheetComponent);
    return TimesheetComponent;
    var _a, _b;
}());
//# sourceMappingURL=E:/unitsecurity/src/timesheet.component.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(1069)
        }), 
        __metadata('design:paramtypes', [])
    ], UserComponent);
    return UserComponent;
}());
//# sourceMappingURL=E:/unitsecurity/src/user.component.js.map

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 710;


/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(839);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(830);



if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=E:/unitsecurity/src/main.js.map

/***/ }),

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_api_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(apiService) {
        this.apiService = apiService;
        this.title = 'app works!';
        this.apiService.login('saad1', '123456').subscribe(function (res) {
            // Emit list event
            console.log(res);
        }, function (err) {
            // Log errors if any
            //console.log(err);
        });
        ;
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(1055)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__common_api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=E:/unitsecurity/src/app.component.js.map

/***/ }),

/***/ 830:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_ui__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_map__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_datetime_picker__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_datetime_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_datetime_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap__ = __webpack_require__(1005);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__clients_clients_routes__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__schedule_schedule_routes__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_guards_routes__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routes__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_user_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_addguard_addguard_component__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_guards_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__clients_clients_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__clients_add_client_add_client_component__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__clients_add_location_add_location_component__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__schedule_schedule_component__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__schedule_add_duty_add_duty_component__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__schedule_schedule_detail_schedule_detail_component__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__schedule_timesheet_timesheet_component__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__incident_incident_component__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__alert_alert_component__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__dashboard_dashboard_component__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__reports_reports_component__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__alert_alert_detail_alert_detail_component__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__incident_incident_detail_incident_detail_component__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__common_api_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__common_resolvers_clients_resolver__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__common_resolvers_users_resolver__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__common_resolvers_duties_resolver__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__common_resolvers_timesheets_resolver__ = __webpack_require__(422);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_14__guards_addguard_addguard_component__["a" /* AddGuardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__guards_guards_component__["a" /* GuardsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__clients_clients_component__["a" /* ClientsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__clients_add_client_add_client_component__["a" /* AddClientComponent */],
                __WEBPACK_IMPORTED_MODULE_18__clients_add_location_add_location_component__["a" /* AddLocationComponent */],
                __WEBPACK_IMPORTED_MODULE_19__schedule_schedule_component__["a" /* ScheduleComponent */],
                __WEBPACK_IMPORTED_MODULE_20__schedule_add_duty_add_duty_component__["a" /* AddDutyComponent */],
                __WEBPACK_IMPORTED_MODULE_21__schedule_schedule_detail_schedule_detail_component__["a" /* ScheduleDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_22__schedule_timesheet_timesheet_component__["a" /* TimesheetComponent */],
                __WEBPACK_IMPORTED_MODULE_23__incident_incident_component__["a" /* IncidentComponent */],
                __WEBPACK_IMPORTED_MODULE_24__alert_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_25__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_26__reports_reports_component__["a" /* ReportsComponent */],
                __WEBPACK_IMPORTED_MODULE_27__alert_alert_detail_alert_detail_component__["a" /* AlertDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_28__incident_incident_detail_incident_detail_component__["a" /* IncidentDetailComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__schedule_schedule_routes__["a" /* scheduleRouting */],
                __WEBPACK_IMPORTED_MODULE_8__clients_clients_routes__["a" /* clientsRouting */],
                __WEBPACK_IMPORTED_MODULE_10__guards_guards_routes__["a" /* guardsRouting */],
                __WEBPACK_IMPORTED_MODULE_11__app_routes__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4_ng2_ui__["Ng2UIModule"],
                __WEBPACK_IMPORTED_MODULE_6_ng2_datetime_picker__["Ng2DatetimePickerModule"],
                __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap__["a" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap__["b" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ng2_map__["Ng2MapModule"].forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?libraries=visualization,places,drawing&key=AIzaSyDbJZtwWtcv3_LLOFaPCNkndh_4_hEFVhc' })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_29__common_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_30__common_resolvers_clients_resolver__["a" /* ClientsResolver */], __WEBPACK_IMPORTED_MODULE_31__common_resolvers_users_resolver__["a" /* UsersResolver */], __WEBPACK_IMPORTED_MODULE_32__common_resolvers_duties_resolver__["a" /* DutiesResolver */], __WEBPACK_IMPORTED_MODULE_33__common_resolvers_timesheets_resolver__["a" /* TimesheetsResolver */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_18__clients_add_location_add_location_component__["a" /* AddLocationComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=E:/unitsecurity/src/app.module.js.map

/***/ }),

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_guards_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clients_clients_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__incident_incident_component__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alert_alert_component__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reports_reports_component__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__alert_alert_detail_alert_detail_component__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__incident_incident_detail_incident_detail_component__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_resolvers_duties_resolver__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__schedule_schedule_component__ = __webpack_require__(431);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });












var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot([
    //  { path: '' , redirectTo: 'clients' , pathMatch: 'full' },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_1__user_user_component__["a" /* UserComponent */] },
    { path: 'guards', component: __WEBPACK_IMPORTED_MODULE_2__guards_guards_component__["a" /* GuardsComponent */] },
    { path: 'clients', component: __WEBPACK_IMPORTED_MODULE_3__clients_clients_component__["a" /* ClientsComponent */] },
    { path: 'incidents', component: __WEBPACK_IMPORTED_MODULE_4__incident_incident_component__["a" /* IncidentComponent */] },
    { path: 'alerts', component: __WEBPACK_IMPORTED_MODULE_5__alert_alert_component__["a" /* AlertComponent */] },
    { path: 'incidents/:id', component: __WEBPACK_IMPORTED_MODULE_9__incident_incident_detail_incident_detail_component__["a" /* IncidentDetailComponent */] },
    { path: 'alerts/:id', component: __WEBPACK_IMPORTED_MODULE_8__alert_alert_detail_alert_detail_component__["a" /* AlertDetailComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'schedule', component: __WEBPACK_IMPORTED_MODULE_11__schedule_schedule_component__["a" /* ScheduleComponent */], resolve: { duties: __WEBPACK_IMPORTED_MODULE_10__common_resolvers_duties_resolver__["a" /* DutiesResolver */] } },
    { path: 'reports', component: __WEBPACK_IMPORTED_MODULE_7__reports_reports_component__["a" /* ReportsComponent */] },
]);
//# sourceMappingURL=E:/unitsecurity/src/app.routes.js.map

/***/ }),

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clients_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_client_add_client_component__ = __webpack_require__(419);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clientsRouting; });



var clientsRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild([
    { path: 'clients', component: __WEBPACK_IMPORTED_MODULE_1__clients_component__["a" /* ClientsComponent */] },
    { path: 'clients/add', component: __WEBPACK_IMPORTED_MODULE_2__add_client_add_client_component__["a" /* AddClientComponent */] },
    { path: 'clients/edit/:id', component: __WEBPACK_IMPORTED_MODULE_2__add_client_add_client_component__["a" /* AddClientComponent */] },
]);
//# sourceMappingURL=E:/unitsecurity/src/clients.routes.js.map

/***/ }),

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addguard_addguard_component__ = __webpack_require__(425);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return guardsRouting; });



var guardsRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild([
    { path: 'guards', component: __WEBPACK_IMPORTED_MODULE_1__guards_component__["a" /* GuardsComponent */] },
    { path: 'guards/add', component: __WEBPACK_IMPORTED_MODULE_2__addguard_addguard_component__["a" /* AddGuardComponent */] },
    { path: 'guards/edit/:id', component: __WEBPACK_IMPORTED_MODULE_2__addguard_addguard_component__["a" /* AddGuardComponent */] },
]);
//# sourceMappingURL=E:/unitsecurity/src/guards.routes.js.map

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Client; });
var Client = (function () {
    function Client() {
    }
    Client.prototype.Client = function (obj) {
        if (!!obj)
            for (var prop in obj)
                this[prop] = obj[prop];
    };
    return Client;
}());
//# sourceMappingURL=E:/unitsecurity/src/client.js.map

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Duty; });
var Duty = (function () {
    function Duty() {
    }
    Duty.prototype.Duty = function (obj) {
        if (!!obj)
            for (var prop in obj)
                this[prop] = obj[prop];
    };
    return Duty;
}());
//# sourceMappingURL=E:/unitsecurity/src/duty.js.map

/***/ }),

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Location; });
var Location = (function () {
    function Location() {
    }
    Location.prototype.Location = function (obj) {
        if (!!obj)
            for (var prop in obj)
                this[prop] = obj[prop];
    };
    return Location;
}());
//# sourceMappingURL=E:/unitsecurity/src/location.js.map

/***/ }),

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    User.prototype.User = function (obj) {
        if (!!obj)
            for (var prop in obj)
                this[prop] = obj[prop];
    };
    return User;
}());
//# sourceMappingURL=E:/unitsecurity/src/user.js.map

/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_duty_add_duty_component__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_detail_schedule_detail_component__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timesheet_timesheet_component__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_resolvers_clients_resolver__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_resolvers_users_resolver__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_resolvers_duties_resolver__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_resolvers_timesheets_resolver__ = __webpack_require__(422);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return scheduleRouting; });








var scheduleRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild([
    { path: 'schedule/add', component: __WEBPACK_IMPORTED_MODULE_1__add_duty_add_duty_component__["a" /* AddDutyComponent */], resolve: { clients: __WEBPACK_IMPORTED_MODULE_4__common_resolvers_clients_resolver__["a" /* ClientsResolver */], users: __WEBPACK_IMPORTED_MODULE_5__common_resolvers_users_resolver__["a" /* UsersResolver */] } },
    { path: 'schedule/edit/:id', component: __WEBPACK_IMPORTED_MODULE_1__add_duty_add_duty_component__["a" /* AddDutyComponent */] },
    { path: 'schedule/detail/:id', component: __WEBPACK_IMPORTED_MODULE_2__schedule_detail_schedule_detail_component__["a" /* ScheduleDetailComponent */], resolve: { duties: __WEBPACK_IMPORTED_MODULE_6__common_resolvers_duties_resolver__["a" /* DutiesResolver */] } },
    { path: 'schedule/detail/:id/timesheet', component: __WEBPACK_IMPORTED_MODULE_3__timesheet_timesheet_component__["a" /* TimesheetComponent */], resolve: { timesheets: __WEBPACK_IMPORTED_MODULE_7__common_resolvers_timesheets_resolver__["a" /* TimesheetsResolver */] } },
]);
//# sourceMappingURL=E:/unitsecurity/src/schedule.routes.js.map

/***/ }),

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=E:/unitsecurity/src/environment.js.map

/***/ }),

/***/ 995:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 473,
	"./af.js": 473,
	"./ar": 480,
	"./ar-dz": 474,
	"./ar-dz.js": 474,
	"./ar-kw": 475,
	"./ar-kw.js": 475,
	"./ar-ly": 476,
	"./ar-ly.js": 476,
	"./ar-ma": 477,
	"./ar-ma.js": 477,
	"./ar-sa": 478,
	"./ar-sa.js": 478,
	"./ar-tn": 479,
	"./ar-tn.js": 479,
	"./ar.js": 480,
	"./az": 481,
	"./az.js": 481,
	"./be": 482,
	"./be.js": 482,
	"./bg": 483,
	"./bg.js": 483,
	"./bn": 484,
	"./bn.js": 484,
	"./bo": 485,
	"./bo.js": 485,
	"./br": 486,
	"./br.js": 486,
	"./bs": 487,
	"./bs.js": 487,
	"./ca": 488,
	"./ca.js": 488,
	"./cs": 489,
	"./cs.js": 489,
	"./cv": 490,
	"./cv.js": 490,
	"./cy": 491,
	"./cy.js": 491,
	"./da": 492,
	"./da.js": 492,
	"./de": 495,
	"./de-at": 493,
	"./de-at.js": 493,
	"./de-ch": 494,
	"./de-ch.js": 494,
	"./de.js": 495,
	"./dv": 496,
	"./dv.js": 496,
	"./el": 497,
	"./el.js": 497,
	"./en-au": 498,
	"./en-au.js": 498,
	"./en-ca": 499,
	"./en-ca.js": 499,
	"./en-gb": 500,
	"./en-gb.js": 500,
	"./en-ie": 501,
	"./en-ie.js": 501,
	"./en-nz": 502,
	"./en-nz.js": 502,
	"./eo": 503,
	"./eo.js": 503,
	"./es": 505,
	"./es-do": 504,
	"./es-do.js": 504,
	"./es.js": 505,
	"./et": 506,
	"./et.js": 506,
	"./eu": 507,
	"./eu.js": 507,
	"./fa": 508,
	"./fa.js": 508,
	"./fi": 509,
	"./fi.js": 509,
	"./fo": 510,
	"./fo.js": 510,
	"./fr": 513,
	"./fr-ca": 511,
	"./fr-ca.js": 511,
	"./fr-ch": 512,
	"./fr-ch.js": 512,
	"./fr.js": 513,
	"./fy": 514,
	"./fy.js": 514,
	"./gd": 515,
	"./gd.js": 515,
	"./gl": 516,
	"./gl.js": 516,
	"./gom-latn": 517,
	"./gom-latn.js": 517,
	"./he": 518,
	"./he.js": 518,
	"./hi": 519,
	"./hi.js": 519,
	"./hr": 520,
	"./hr.js": 520,
	"./hu": 521,
	"./hu.js": 521,
	"./hy-am": 522,
	"./hy-am.js": 522,
	"./id": 523,
	"./id.js": 523,
	"./is": 524,
	"./is.js": 524,
	"./it": 525,
	"./it.js": 525,
	"./ja": 526,
	"./ja.js": 526,
	"./jv": 527,
	"./jv.js": 527,
	"./ka": 528,
	"./ka.js": 528,
	"./kk": 529,
	"./kk.js": 529,
	"./km": 530,
	"./km.js": 530,
	"./kn": 531,
	"./kn.js": 531,
	"./ko": 532,
	"./ko.js": 532,
	"./ky": 533,
	"./ky.js": 533,
	"./lb": 534,
	"./lb.js": 534,
	"./lo": 535,
	"./lo.js": 535,
	"./lt": 536,
	"./lt.js": 536,
	"./lv": 537,
	"./lv.js": 537,
	"./me": 538,
	"./me.js": 538,
	"./mi": 539,
	"./mi.js": 539,
	"./mk": 540,
	"./mk.js": 540,
	"./ml": 541,
	"./ml.js": 541,
	"./mr": 542,
	"./mr.js": 542,
	"./ms": 544,
	"./ms-my": 543,
	"./ms-my.js": 543,
	"./ms.js": 544,
	"./my": 545,
	"./my.js": 545,
	"./nb": 546,
	"./nb.js": 546,
	"./ne": 547,
	"./ne.js": 547,
	"./nl": 549,
	"./nl-be": 548,
	"./nl-be.js": 548,
	"./nl.js": 549,
	"./nn": 550,
	"./nn.js": 550,
	"./pa-in": 551,
	"./pa-in.js": 551,
	"./pl": 552,
	"./pl.js": 552,
	"./pt": 554,
	"./pt-br": 553,
	"./pt-br.js": 553,
	"./pt.js": 554,
	"./ro": 555,
	"./ro.js": 555,
	"./ru": 556,
	"./ru.js": 556,
	"./sd": 557,
	"./sd.js": 557,
	"./se": 558,
	"./se.js": 558,
	"./si": 559,
	"./si.js": 559,
	"./sk": 560,
	"./sk.js": 560,
	"./sl": 561,
	"./sl.js": 561,
	"./sq": 562,
	"./sq.js": 562,
	"./sr": 564,
	"./sr-cyrl": 563,
	"./sr-cyrl.js": 563,
	"./sr.js": 564,
	"./ss": 565,
	"./ss.js": 565,
	"./sv": 566,
	"./sv.js": 566,
	"./sw": 567,
	"./sw.js": 567,
	"./ta": 568,
	"./ta.js": 568,
	"./te": 569,
	"./te.js": 569,
	"./tet": 570,
	"./tet.js": 570,
	"./th": 571,
	"./th.js": 571,
	"./tl-ph": 572,
	"./tl-ph.js": 572,
	"./tlh": 573,
	"./tlh.js": 573,
	"./tr": 574,
	"./tr.js": 574,
	"./tzl": 575,
	"./tzl.js": 575,
	"./tzm": 577,
	"./tzm-latn": 576,
	"./tzm-latn.js": 576,
	"./tzm.js": 577,
	"./uk": 578,
	"./uk.js": 578,
	"./ur": 579,
	"./ur.js": 579,
	"./uz": 581,
	"./uz-latn": 580,
	"./uz-latn.js": 580,
	"./uz.js": 581,
	"./vi": 582,
	"./vi.js": 582,
	"./x-pseudo": 583,
	"./x-pseudo.js": 583,
	"./yo": 584,
	"./yo.js": 584,
	"./zh-cn": 585,
	"./zh-cn.js": 585,
	"./zh-hk": 586,
	"./zh-hk.js": 586,
	"./zh-tw": 587,
	"./zh-tw.js": 587
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 995;


/***/ })

},[1333]);
//# sourceMappingURL=main.bundle.map