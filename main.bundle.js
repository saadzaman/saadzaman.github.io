webpackJsonp([1,5],{

/***/ 1000:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0\">\n\n        <div class=\"navbar-header ft-left\"><a href=\"index.html\"><img class=\"mar-top-5 mar-left-10\" src=\"assets/guard.png\" height=\"40\" width=\"40\" /></a></div>\n          <div class=\"ft-left navbar-header mar-left-10 mar-top-5\"><h4>Guards v1.0</h4></div>\n\n\n<div class=\"navbar-header pad-right-30 pad-top-20 pull-right\">\n        <a href=\"javascript:;\" [routerLink]=\"['alerts']\"><span class=\"glyphicon glyphicon-alert\"></span></a>\n</div>\n<div class=\"navbar-header pad-right-30 pad-top-20 pull-right\">\n        <a href=\"javascript:;\"  [routerLink]=\"['incidents']\"><span class=\"glyphicon glyphicon-flag\"></span></a>\n</div>\n\n\n    <div class=\"navbar-default sidebar\" role=\"navigation\">\n        <div class=\"sidebar-nav navbar-collapse\">\n            <ul class=\"nav\" id=\"side-menu\">\n                <li>\n                    <a href=\"javascript:;\"  [routerLink]=\"['/dashboard']\"><i class=\"fa fa-dashboard fa-fw\"></i> Dashboard</a>\n                </li>\n                <li>\n                    <a href=\"javacript:;\"  [routerLink]=\"['/clients']\"><i class=\"fa fa-bar-chart-o fa-fw\"></i>Client Management</a>\n                </li>\n                <li>\n                    <a href=\"javascript:;\" [routerLink]=\"['/guards']\"><i class=\"fa fa-table fa-fw\"></i>Guards Management</a>\n                </li>\n                <li>\n                    <a href=\"javascript:;\" [routerLink]=\"['/schedule']\"><i class=\"fa fa-edit fa-fw\"></i>Scheduling & Time Sheet</a>\n                </li>\n                <li>\n                    <a href=\"javascript:;\"  [routerLink]=\"['/reports']\"><i class=\"fa fa-wrench fa-fw\"></i>Reports</a>\n                </li>\n\n            </ul>\n\n\n        </div>\n\n    </div>\n</nav>\n\n\n<div id=\"page-wrapper\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 1001:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t  <ng2-popup #popup></ng2-popup>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-5\">\n\t\t\t<h3>\n\t\t\t\t{{!!id ? 'Edit' : 'Add New'}} Client\n\t\t\t</h3>\n\t\t\t<form class=\"mar-top-20 pad-top-10\" role=\"form\">\n\t\t\t\t<div class=\"form-group\">\n\n\t\t\t\t\t<label for=\"exampleInputEmail1\">\n\t\t\t\t\t\tContact Person\n\t\t\t\t\t</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"personName\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\n          <label for=\"exampleInputEmail1\">\n            Contact\n          </label>\n          <input type=\"text\" class=\"form-control\" id=\"contact\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\n          <label for=\"exampleInputEmail1\">\n\t\t\t\t\t\tEmail address\n\t\t\t\t\t</label>\n\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\" />\n\t\t\t\t</div>\n\n\t\t\t\t<button type=\"submit\" class=\"btn btn-default\">\n\t\t\t\t\tSave\n\t\t\t\t</button>\n\t\t\t</form>\n\t\t\t<h3>\n\t\t\t\tClients\n\t\t\t</h3>\n\t\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\n\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\tIncident\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\tTimestamp\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\tLocation\n\t\t\t\t\t\t</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t01/04/2012\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tDefault\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t\t<div class=\"col-md-7\">\n\t\t\t<div class=\"row pad-bottom-20\">\n\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t<h3>\n\t\t\t\t\t\tClient's Location\n\t\t\t\t\t</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-5 pad-top-20\">\n\n\t\t\t\t\t<button type=\"button\"   (click)=\"openPopup('small', 'Hello Small Popup')\" class=\"fl-right btn btn-default\">\n\t\t\t\t\t\tAdd New Location\n\t\t\t\t\t</button>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\n\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>\n\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\tCode\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\tName\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\tAddress\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr class=\"active\">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:;>\"><span class=\"glyphicon glyphicon-edit\"></span></a>\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:;>\"><span class=\"glyphicon glyphicon-remove\"></span></a>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t01/04/2012\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tDefault\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 1002:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-9\">\n\n      <form class=\"form-horizontal\">\n<fieldset>\n\n<!-- Form Name -->\n<legend>Add Location</legend>\n\n<!-- Text input-->\n<div class=\"form-group\">\n<label class=\"col-md-2 control-label\" for=\"name\">Name</label>\n<div class=\"col-md-4\">\n<input id=\"name\" name=\"name\" type=\"text\" placeholder=\"Name\" class=\"form-control input-md\" required=\"\">\n\n</div>\n</div>\n\n<!-- Textarea -->\n<div class=\"form-group\">\n<label class=\"col-md-2 control-label\" for=\"address\">Address</label>\n<div class=\"col-md-4\">\n  <textarea class=\"form-control\" id=\"address\" name=\"address\">Enter Address</textarea>\n</div>\n</div>\n\n<!-- Text input-->\n<div class=\"form-group\">\n<label class=\"col-md-2 control-label\" for=\"contact\">Contact</label>\n<div class=\"col-md-4\">\n<input id=\"contact\" name=\"contact\" type=\"text\" placeholder=\"Phone number\" class=\"form-control input-md\" required=\"\">\n\n</div>\n</div>\n\n<!-- Select Basic -->\n<div class=\"form-group\">\n<label class=\"col-md-2 control-label\" for=\"City\">City</label>\n<div class=\"col-md-4\">\n  <select id=\"City\" name=\"City\" class=\"form-control\">\n    <option value=\"1\">Alaska</option>\n    <option value=\"2\">Boston</option>\n  </select>\n</div>\n\n\n<label class=\"col-md-2 control-label\" for=\"country\">Country</label>\n<div class=\"col-md-4\">\n  <select id=\"country\" name=\"country\" class=\"form-control\">\n    <option value=\"1\">US</option>\n    <option value=\"2\">USA</option>\n  </select>\n</div>\n</div>\n\n\n<!-- Text input-->\n<div class=\"form-group\">\n<label class=\"col-md-2 control-label\" for=\"lat\">Latitude</label>\n<div class=\"col-md-4\">\n<input id=\"lat\" name=\"lat\" type=\"text\" placeholder=\"Enter Latitude\" class=\"form-control input-sm\" required=\"\">\n\n</div>\n\n\n<label class=\"col-md-2 control-label\" for=\"longitude\">Longitude</label>\n<div class=\"col-md-4\">\n<input id=\"longitude\" name=\"longitude\" type=\"text\" placeholder=\"Longitude\" class=\"form-control input-sm\" required=\"\">\n\n</div>\n</div>\n\n\n\n<!-- Text input-->\n<div class=\"form-group\">\n<label class=\"col-md-2 control-label\" for=\"zip\">Zip</label>\n<div class=\"col-md-4\">\n<input id=\"zip\" name=\"zip\" type=\"text\" placeholder=\"Zip Code\" class=\"form-control input-md\">\n\n</div>\n</div>\n\n<!-- Text input-->\n<div class=\"form-group\">\n<label class=\"col-md-2 control-label\" for=\"code\">Code</label>\n<div class=\"col-md-4\">\n<input id=\"code\" name=\"code\" type=\"text\" placeholder=\"Code\" class=\"form-control input-md\" required=\"\">\n\n</div>\n</div>\n\n<!-- Multiple Checkboxes (inline) -->\n<div class=\"form-group\">\n<label class=\"col-md-2 control-label\" for=\"doqr\">Generate QR</label>\n<div class=\"col-md-4\">\n  <label class=\"checkbox-inline\" for=\"doqr-0\">\n    <input type=\"checkbox\" name=\"doqr\" id=\"doqr-0\" value=\"1\">\n    Yes\n  </label>\n</div>\n</div>\n\n<!-- Select Basic -->\n<div class=\"form-group\">\n<label class=\"col-md-2 control-label\" for=\"status\">Status</label>\n<div class=\"col-md-4\">\n  <select id=\"status\" name=\"status\" class=\"form-control\">\n    <option value=\"1\">Active</option>\n    <option value=\"2\">In Active</option>\n  </select>\n</div>\n</div>\n\n<!-- Button (Double) -->\n<div class=\"form-group\">\n<label class=\"col-md-2 control-label\" for=\"submit\"></label>\n<div class=\"col-md-8\">\n  <button id=\"submit\" name=\"submit\" type=\"submit\" class=\"btn btn-success\">Submit</button>\n  <button id=\"cancel\" name=\"cancel\" type=\"reset\" (click)=\"closePopUp()\" class=\"btn btn-danger\">Cancel</button>\n</div>\n</div>\n\n</fieldset>\n</form>\n\n\n\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n      <div class=\"row qr-location\">\n\n         <img alt=\"Bootstrap Image Preview\" src=\"http://lorempixel.com/140/140/\" />\n         <div class=\"qr-location-buttons\">\n           <button id=\"regen\" name=\"regen\"  class=\"fl-right btn btn-sm btn-default\">Submit</button>\n           <!-- <button id=\"cancel\" name=\"cancel\" type=\"reset\" class=\"btn btn-danger\">Cancel</button> -->\n         </div>\n\n      </div>\n\n\n\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 1003:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-md-12 client-top\">\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<h3>Clients</h3>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-9\">\r\n\t\t\t<div class=\"btn-section pull-right\">\r\n\t\t\t\t<button class=\"btn btn-primary btn-success\" [routerLink]=\"['add']\" ng-show=\"!asd\">Add</button>\r\n\r\n\t\t\t</div>\r\n\t\t\t<div class=\"btn-section col-md-6 pull-right\">\r\n\t\t\t\t<div class=\"form-group has-feedback\">\r\n\t                <label for=\"search\" class=\"sr-only\">Search</label>\r\n\t                <input type=\"text\" class=\"form-control\" ng-model=\"searchKeyword\" placeholder=\"search\" ng-change=\"currentPage=1;\">\r\n\t                <span class=\"glyphicon glyphicon-search form-control-feedback\"></span>\r\n\t            </div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"row\">\r\n\t<div class=\"col-md-12\">\r\n\t    <div class=\"panel panel-default\">\r\n\t        <div class=\"panel-body\">\r\n\t            <div class=\"table-responsive\">\r\n\t                <table class=\"table\">\r\n\t                    <thead>\r\n\t                        <tr>\r\n\t                            <th></th>\r\n\t                            <th>Name</th>\r\n\t                            <th>Contact Person</th>\r\n\t                            <th>Contact</th>\r\n\t                            <th>Email</th>\r\n\t                            <th>Locations</th>\r\n\t                        </tr>\r\n\t                    </thead>\r\n\t                    <tbody>\r\n\t                        <tr ng-repeat=\"client in clients\">\r\n\t                            <td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" [routerLink]=\"['edit/1']\"><span class=\"glyphicon glyphicon-edit\"></span></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\"><span class=\"glyphicon glyphicon-remove\"></span></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t                            <td>Saad</td>\r\n\t                            <td>Saad</td>\r\n\t                            <td>Saad</td>\r\n\t                            <td>Saad</td>\r\n\t                            <td>Saad</td>\r\n\t                        </tr>\r\n\t                    </tbody>\r\n\t                </table>\r\n\t            </div>\r\n\t        </div>\r\n\t    </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 1004:
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ 1005:
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\">\r\n<fieldset>\r\n\r\n<!-- Form Name -->\r\n<legend>{{!!id ? 'Edit' : 'Add New'}} Guard</legend>\r\n\r\n<!-- File Button -->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"photo\">Photo</label>\r\n  <div class=\"col-md-4\">\r\n    <input id=\"photo\" name=\"photo\" class=\"input-file\" type=\"file\">\r\n  </div>\r\n</div>\r\n\r\n<!-- Text input-->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"Name\">Guard Name</label>\r\n  <div class=\"col-md-4\">\r\n  <input id=\"Name\" name=\"Name\" type=\"text\" placeholder=\"Guard Name\" class=\"form-control input-md\" required=\"\">\r\n\r\n  </div>\r\n</div>\r\n\r\n<!-- Text input-->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"pin\">PIN Code</label>\r\n  <div class=\"col-md-4\">\r\n  <input id=\"pin\" name=\"pin\" type=\"text\" placeholder=\"Guards PIN Code\" class=\"form-control input-md\" required=\"\">\r\n\r\n  </div>\r\n</div>\r\n\r\n<!-- Textarea -->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"address\">Address</label>\r\n  <div class=\"col-md-4\">\r\n    <textarea class=\"form-control\" id=\"address\" name=\"address\">- </textarea>\r\n  </div>\r\n</div>\r\n\r\n<!-- Text input-->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"contact\">Contact</label>\r\n  <div class=\"col-md-4\">\r\n  <input id=\"contact\" name=\"contact\" type=\"text\" placeholder=\"Contact Number\" class=\"form-control input-md\" required=\"\">\r\n\r\n  </div>\r\n</div>\r\n\r\n<!-- Text input-->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"emal\">Email</label>\r\n  <div class=\"col-md-4\">\r\n  <input id=\"emal\" name=\"emal\" type=\"text\" placeholder=\"Email address\" class=\"form-control input-md\" required=\"\">\r\n\r\n  </div>\r\n</div>\r\n\r\n<!-- Multiple Radios -->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"radios\">Status</label>\r\n  <div class=\"col-md-4\">\r\n  <div class=\"radio\">\r\n    <label for=\"radios-0\">\r\n      <input type=\"radio\" name=\"radios\" id=\"radios-0\" value=\"0\" checked=\"checked\">\r\n      Active\r\n    </label>\r\n\t</div>\r\n  <div class=\"radio\">\r\n    <label for=\"radios-1\">\r\n      <input type=\"radio\" name=\"radios\" id=\"radios-1\" value=\"1\">\r\n      Inactive\r\n    </label>\r\n\t</div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"form-group\">\r\n<label class=\"col-md-4 control-label\" for=\"submit\"></label>\r\n<div class=\"col-md-4\">\r\n  <button id=\"submit\" name=\"submit\" type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n  <button id=\"cancel\" name=\"cancel\" type=\"reset\" Class=\"btn btn-danger\">Cancel</button>\r\n</div>\r\n</div>\r\n\r\n</fieldset>\r\n</form>\r\n"

/***/ }),

/***/ 1006:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-12 client-top\">\n\t\t<div class=\"col-md-3\">\n\t\t\t<h3>Guards</h3>\n\t\t</div>\n\t\t<div class=\"col-md-9\">\n\t\t\t<div class=\"btn-section pull-right\">\n\t\t\t\t<button class=\"btn btn-primary btn-success\" [routerLink]=\"['add']\" ng-show=\"!asd\">Add</button>\n\n\n\t\t\t</div>\n\t\t\t<div class=\"btn-section col-md-6 pull-right\">\n\t\t\t\t<div class=\"form-group has-feedback\">\n\t                <label for=\"search\" class=\"sr-only\">Search</label>\n\t                <input type=\"text\" class=\"form-control\" ng-model=\"searchKeyword\" placeholder=\"search\" ng-change=\"currentPage=1;\">\n\t                <span class=\"glyphicon glyphicon-search form-control-feedback\"></span>\n\t            </div>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-md-12\">\n\t    <div class=\"panel panel-default\">\n\t        <div class=\"panel-body\">\n\t            <div class=\"table-responsive\">\n\t                <table class=\"table\">\n\t                    <thead>\n\t                        <tr>\n\t                            <th></th>\n\t                            <th>Name</th>\n\t                            <th>Contact Person</th>\n\t                            <th>Contact</th>\n\t                            <th>Email</th>\n\t                            <th>Locations</th>\n\t                        </tr>\n\t                    </thead>\n\t                    <tbody>\n\t                        <tr ng-repeat=\"client in clients\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;>\" [routerLink]=\"['edit/1']\" ><span class=\"glyphicon glyphicon-edit\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;>\"><span class=\"glyphicon glyphicon-remove\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t                            <td>Saad</td>\n\t                            <td>Saad</td>\n\t                            <td>Saad</td>\n\t                            <td>Saad</td>\n\t                            <td>Saad</td>\n\t                        </tr>\n\t                    </tbody>\n\t                </table>\n\t            </div>\n\t        </div>\n\t    </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 1007:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-6\">\n      <h3>Incident Details </h3>\n\t\t\t<form class=\"form-horizontal pad-top-20 mar-top-20\" role=\"form\">\n\t\t\t\t<div class=\"form-group\">\n\n\t\t\t\t\t<label for=\"inputEmail3\" class=\"col-sm-2 control-label\">\n\t\t\t\t\t\tGuard\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-sm-10 mar-top-7\">\n\t\t\t\t\t\t<span>saadzaman@out</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n        <div class=\"form-group\">\n\n\t\t\t\t\t<label for=\"inputEmail3\" class=\"col-sm-2 control-label\">\n\t\t\t\t\t\tClient\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-sm-10 mar-top-7\">\n\t\t\t\t\t\t<span>saadzaman@out</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n        <div class=\"form-group\">\n\n\t\t\t\t\t<label for=\"inputEmail3\" class=\"col-sm-2 control-label\">\n\t\t\t\t\t\tLocation\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-sm-10 mar-top-7\">\n\t\t\t\t\t\t<span>saadzaman@out</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n        <div class=\"form-group\">\n\n\t\t\t\t\t<label for=\"inputEmail3\" class=\"col-sm-2 control-label\">\n\t\t\t\t\t\tTimestamp\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-sm-10 mar-top-7\">\n\t\t\t\t\t\t<span>saadzaman@out</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n        <div class=\"form-group\">\n\n\t\t\t\t\t<label for=\"inputEmail3\" class=\"col-sm-2 control-label\">\n\t\t\t\t\t\tTracking\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-sm-10 mar-top-7\">\n\t\t\t\t\t\t<span>saadzaman@out</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group pad-top-20\">\n\t\t\t\t\t<div class=\"col-sm-offset-2 col-sm-10\">\n\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-info\">\n\t\t\t\t\t\t\tTrack\n\t\t\t\t\t\t</button>\n            <button type=\"submit\" class=\"btn btn-danger\">\n\t\t\t\t\t\t\tView Guard Details\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t\t<div class=\"col-md-6\">\n\t\t\t<ng2-map zoom=\"10\" center=\"Brampton, Canada\">\n    <marker (click)=\"showInfoWindow($event)\"  [position]=\"pos\"></marker>\n  </ng2-map>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 1008:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-12 client-top\">\n\t\t<div class=\"col-md-3\">\n\t\t\t<h3>Incidents</h3>\n\t\t</div>\n\t\t<!-- <div class=\"col-md-9\">\n\t\t\t<div class=\"btn-section pull-right\">\n\t\t\t\t<button class=\"btn btn-primary btn-success\" [routerLink]=\"['add']\" ng-show=\"!asd\">Add</button>\n\n\n\t\t\t</div>\n\t\t\t<div class=\"btn-section col-md-6 pull-right\">\n\t\t\t\t<div class=\"form-group has-feedback\">\n\t                <label for=\"search\" class=\"sr-only\">Search</label>\n\t                <input type=\"text\" class=\"form-control\" ng-model=\"searchKeyword\" placeholder=\"search\" ng-change=\"currentPage=1;\">\n\t                <span class=\"glyphicon glyphicon-search form-control-feedback\"></span>\n\t            </div>\n\t\t\t</div>\n\n\t\t</div> -->\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-md-12\">\n\t    <div class=\"panel panel-default\">\n\t        <div class=\"panel-body\">\n\t            <div class=\"table-responsive\">\n\t                <table class=\"table\">\n\t                    <thead>\n\t                        <tr>\n\n\t                            <th>Incident</th>\n\t                            <th>Description</th>\n\t                            <th>Type</th>\n                              <th>Guard</th>\n                              <th>Client</th>\n                              <th>Time</th>\n\t                            <th>Location</th>\n\t                        </tr>\n\t                    </thead>\n\t                    <tbody>\n\t                        <tr ng-repeat=\"client in clients\">\n                              <td>Armed Robbery</td>\n                              <td>At gunpoint</td>\n                              <td>Robbery</td>\n                              <td>John</td>\n\t                            <td>Mac Donalds</td>\n\t                            <td><a href=\"javascript:;\" [routerLink]=\"['/incidents/1']\">2017-25-3 10:16</a></td>\n\t                            <td>Askari 4</td>\n\t                        </tr>\n\t                    </tbody>\n\t                </table>\n\t            </div>\n\t        </div>\n\t    </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 1009:
/***/ (function(module, exports) {

module.exports = "<p>\n  reports works!\n</p>\n"

/***/ }),

/***/ 1010:
/***/ (function(module, exports) {

module.exports = "<form ngNoForm class=\"form-horizontal\">\r\n<fieldset>\r\n\r\n<!-- Form Name -->\r\n<legend>{{!!id ? 'Edit' : 'Add New'}} Duty</legend>\r\n\r\n<!-- Select Basic -->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"guard\">Guard</label>\r\n  <div class=\"col-md-4\">\r\n    <select id=\"guard\" name=\"guard\" class=\"form-control\">\r\n      <option value=\"1\">Option one</option>\r\n      <option value=\"2\">Option two</option>\r\n    </select>\r\n  </div>\r\n</div>\r\n\r\n<!-- Select Basic -->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"client\">Client</label>\r\n  <div class=\"col-md-4\">\r\n    <select id=\"client\" name=\"client\" class=\"form-control\">\r\n      <option value=\"1\">Option one</option>\r\n      <option value=\"2\">Option two</option>\r\n    </select>\r\n  </div>\r\n</div>\r\n\r\n<!-- Select Basic -->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"location\">Location</label>\r\n  <div class=\"col-md-4\">\r\n    <select id=\"location\" name=\"location\" class=\"form-control\">\r\n      <option value=\"1\">Option one</option>\r\n      <option value=\"2\">Option two</option>\r\n    </select>\r\n  </div>\r\n</div>\r\n\r\n<!-- Text input-->\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"textinput\">Date</label>\r\n  <div class=\"col-md-4\">\r\n  <!-- <input id=\"textinput\" name=\"textinput\" type=\"text\" placeholder=\"placeholder\" class=\"form-control input-md\"> -->\r\n  <input class=\"form-control input-md\"\r\n     [(ngModel)]=\"date2\"\r\n      ng2-datetime-picker\r\n    date-format=\"YYYY-MM-DD\"\r\n     year=\"2014\"\r\n     month=\"12\"\r\n     day=\"31\"\r\n     hour=\"23\"\r\n     minute='59'\r\n     date-only=\"true\"\r\n     [close-on-select]=\"false\"  />\r\n  <span class=\"help-block\">Click to select date</span>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"fromTime\">From</label>\r\n  <div class=\"col-md-4\">\r\n  <!-- <input id=\"textinput\" name=\"textinput\" type=\"text\" placeholder=\"placeholder\" class=\"form-control input-md\"> -->\r\n  <input class=\"form-control input-md\"\r\n     [(ngModel)]=\"fromTime\"\r\n      ng2-datetime-picker\r\n      date-format=\"hh:mm a\"\r\n     hour=\"12\"\r\n     minute='59'\r\n     time-only=\"true\"\r\n     [close-on-select]=\"false\"  />\r\n  <span class=\"help-block\">Click to select starting time</span>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"col-md-4 control-label\" for=\"fromTime\">To</label>\r\n  <div class=\"col-md-4\">\r\n  <!-- <input id=\"textinput\" name=\"textinput\" type=\"text\" placeholder=\"placeholder\" class=\"form-control input-md\"> -->\r\n  <input class=\"form-control input-md\"\r\n     [(ngModel)]=\"toTime\"\r\n      ng2-datetime-picker\r\n      date-format=\"hh:mm a\"\r\n     hour=\"12\"\r\n     minute='59'\r\n     time-only=\"true\"\r\n     [close-on-select]=\"false\"  />\r\n  <span class=\"help-block\">Click to set ending time</span>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"form-group\">\r\n<label class=\"col-md-4 control-label\" for=\"submit\"></label>\r\n<div class=\"col-md-4\">\r\n  <button id=\"submit\" name=\"submit\" type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n  <button id=\"cancel\" name=\"cancel\" type=\"reset\" (click)=\"closePopUp()\" class=\"mar-left-5 btn btn-danger\">Cancel</button>\r\n</div>\r\n</div>\r\n\r\n</fieldset>\r\n</form>\r\n"

/***/ }),

/***/ 1011:
/***/ (function(module, exports) {

module.exports = "<h3>McDonalds Schedule</h3>\n\n\n\n<h4> Locations </h4>\n\n<div class=\"panel-group\" id=\"accordion\">\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h4 class=\"panel-title\">\n      <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\">\n        Askari 4\n      </a>\n    </h4>\n  </div>\n  <div id=\"collapseOne\" class=\"panel-collapse collapse in\">\n    <div class=\"panel-body\">\n\n      <div class=\"row pad-bottom-20 pad-right-20\">\n      <div class=\"btn-section pull-right\">\n        <button class=\"btn btn-primary btn-success\" [routerLink]=\"['timesheet']\" ng-show=\"!asd\">View Time Sheet</button>\n\n\n      </div>\n      </div>\n\n\n      <div class=\"panel panel-default\">\n\t        <div class=\"panel-body\">\n\t            <div class=\"table-responsive\">\n\t                <table class=\"table\">\n\t                    <thead>\n\t                        <tr>\n\t                            <th></th>\n\t                            <th>Guard</th>\n\t                            <th>Date</th>\n\t                            <th>Start Time</th>\n\t                            <th>End Time</th>\n\n\t                        </tr>\n\t                    </thead>\n\t                    <tbody>\n\t                        <tr ng-repeat=\"client in clients\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;>\" [routerLink]=\"['/schedule/edit/1']\" ><span class=\"glyphicon glyphicon-edit\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;>\"><span class=\"glyphicon glyphicon-remove\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\n\t                            <td>John Mac</td>\n\t                            <td>2017 23 3</td>\n\t                            <td>8:00</td>\n\t                            <td>9:14</td>\n\t                        </tr>\n\t                    </tbody>\n\t                </table>\n\t            </div>\n\t        </div>\n\t    </div>\n    </div>\n  </div>\n</div>\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h4 class=\"panel-title\">\n      <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\">\n        Sea View\n      </a>\n    </h4>\n  </div>\n  <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\n    <div class=\"panel-body\">\n      <div class=\"panel panel-default\">\n\t        <div class=\"panel-body\">\n\t            <div class=\"table-responsive\">\n\t                <table class=\"table\">\n\t                    <thead>\n\t                        <tr>\n\t                            <th></th>\n                              <th>Guard</th>\n\t                            <th>Date</th>\n\t                            <th>Start Time</th>\n\t                            <th>End Time</th>\n\t                        </tr>\n\t                    </thead>\n\t                    <tbody>\n\t                        <tr ng-repeat=\"client in clients\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;>\" [routerLink]=\"['edit/1']\" ><span class=\"glyphicon glyphicon-edit\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;>\"><span class=\"glyphicon glyphicon-remove\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n                            <td>John Mac</td>\n                            <td>2017 23 3</td>\n                            <td>8:00</td>\n                            <td>9:14</td>\n\t                        </tr>\n\t                    </tbody>\n\t                </table>\n\t            </div>\n\t        </div>\n\t    </div>\n    </div>\n  </div>\n</div>\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h4 class=\"panel-title\">\n      <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\">\n        Gul Plaza\n      </a>\n    </h4>\n  </div>\n  <div id=\"collapseThree\" class=\"panel-collapse collapse\">\n    <div class=\"panel-body\">\n      <div class=\"panel panel-default\">\n\t        <div class=\"panel-body\">\n\t            <div class=\"table-responsive\">\n\t                <table class=\"table\">\n\t                    <thead>\n\t                        <tr>\n\t                            <th></th>\n                              <th>Guard</th>\n\t                            <th>Date</th>\n\t                            <th>Start Time</th>\n\t                            <th>End Time</th>\n\t                        </tr>\n\t                    </thead>\n\t                    <tbody>\n\t                        <tr ng-repeat=\"client in clients\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;>\" [routerLink]=\"['edit/1']\" ><span class=\"glyphicon glyphicon-edit\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:;>\"><span class=\"glyphicon glyphicon-remove\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n                            <td>John Mac</td>\n                            <td>2017 23 3</td>\n                            <td>8:00</td>\n                            <td>9:14</td>\n\t                        </tr>\n\t                    </tbody>\n\t                </table>\n\t            </div>\n\t        </div>\n\t    </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ 1012:
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-section pull-right\">\n  <button class=\"btn btn-primary btn-success\" [routerLink]=\"['add']\" ng-show=\"!asd\">Add Duty</button>\n\n</div>\n<tabset>\n  <tab heading=\"Client Schedules\">\n\n    <div class=\"row pad-top-20\">\n\n    \t<div class=\"col-md-12\">\n    \t    <div class=\"panel panel-default\">\n    \t        <div class=\"panel-body\">\n    \t            <div class=\"table-responsive\">\n    \t                <table class=\"table\">\n    \t                    <thead>\n    \t                        <tr>\n\n    \t                            <th>Client</th>\n    \t                            <th>Number Of Locations</th>\n    \t                            <th>Status</th>\n    \t                            <th></th>\n\n    \t                        </tr>\n    \t                    </thead>\n    \t                    <tbody>\n    \t                        <tr ng-repeat=\"client in clients\">\n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Mc Donalds</td>\n    \t                            <td>3</td>\n    \t                            <td>Active</td>\n    \t                            <td><a href=\"javascript:;\" [routerLink]=\"['detail/1']\" >View Schedule</a></td>\n\n    \t                        </tr>\n    \t                    </tbody>\n    \t                </table>\n    \t            </div>\n    \t        </div>\n    \t    </div>\n        </div>\n    </div>\n\n\n  </tab>\n\n\n\n\n  <tab heading=\"Guards Schedule\">\n\n\n    <div class=\"row pad-top-20\">\n\n      <div class=\"col-md-12\">\n          <div class=\"panel panel-default\">\n              <div class=\"panel-body\">\n                  <div class=\"table-responsive\">\n                      <table class=\"table\">\n                          <thead>\n                              <tr>\n\n                                  <th>Guards</th>\n                                  <th>Number Of Duties</th>\n                                  <th>Status</th>\n                                  <th></th>\n                              </tr>\n                          </thead>\n                          <tbody>\n                              <tr ng-repeat=\"client in clients\">\n                                <td>John Mac</td>\n                                  <td>3</td>\n                                  <td>Active</td>\n                                  <td><a href=\"javascript:;\" [routerLink]=\"['detail/1']\" >View Schedule</a></td>\n                              </tr>\n                          </tbody>\n                      </table>\n                  </div>\n              </div>\n          </div>\n        </div>\n    </div>\n\n\n\n\n\n  </tab>\n</tabset>\n"

/***/ }),

/***/ 1013:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-12 client-top\">\n\t\t<div class=\"col-md-3 mar-bottom-10\">\n\t\t\t<h3>Time Sheet</h3>\n\t\t</div>\n\n\t</div>\n\t<div class=\"col-md-12\">\n\t    <div class=\"panel panel-default\">\n\t        <div class=\"panel-body\">\n\t            <div class=\"table-responsive\">\n\t                <table class=\"table\">\n\t                    <thead>\n\t                        <tr>\n\n\t                            <th>Guard</th>\n\t                            <th>CheckIn</th>\n\t                            <th>CheckOut</th>\n\t                            <th>Status</th>\n\t                            <th>Break Dur</th>\n                              <th>Total Dur</th>\n\t                        </tr>\n\t                    </thead>\n\t                    <tbody>\n\t                        <tr ng-repeat=\"client in clients\">\n\n\t                            <td>Saad</td>\n\t                            <td>8:00 am</td>\n\t                            <td>9:15 pm</td>\n\t                            <td><span class=\"label label-success\">Success</span></td>\n\t                            <td>5</td>\n                              <td>75</td>\n\t                        </tr>\n\t                    </tbody>\n                      <tbody>\n\t                        <tr ng-repeat=\"client in clients\">\n\n\t                            <td>John</td>\n\t                            <td>10:00 am</td>\n\t                            <td>11:15 pm</td>\n\t                            <td><span class=\"label label-info\">Delayed</span></td>\n\t                            <td>15</td>\n                              <td>75</td>\n\t                        </tr>\n\t                    </tbody>\n\t                </table>\n\t            </div>\n\t        </div>\n\t    </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 1014:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-5\">\n\t\t\t<h3>\n\t\t\t\th3. Lorem ipsum dolor sit amet.\n\t\t\t</h3>\n\t\t\t<form role=\"form\">\n\t\t\t\t<div class=\"form-group\">\n\n\t\t\t\t\t<label for=\"exampleInputEmail1\">\n\t\t\t\t\t\tContact Person\n\t\t\t\t\t</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"personName\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\n          <label for=\"exampleInputEmail1\">\n            Contact\n          </label>\n          <input type=\"text\" class=\"form-control\" id=\"contact\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\n          <label for=\"exampleInputEmail1\">\n\t\t\t\t\t\tEmail address\n\t\t\t\t\t</label>\n\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\" />\n\t\t\t\t</div>\n\n\t\t\t\t<button type=\"submit\" class=\"btn btn-default\">\n\t\t\t\t\tSave\n\t\t\t\t</button>\n\t\t\t</form>\n\t\t\t<h3>\n\t\t\t\th3. Lorem ipsum dolor sit amet.\n\t\t\t</h3>\n\t\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t#\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\tProduct\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\tPayment Taken\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\tStatus\n\t\t\t\t\t\t</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t1\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t01/04/2012\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tDefault\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr class=\"active\">\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t1\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t01/04/2012\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tApproved\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr class=\"success\">\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t2\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t02/04/2012\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tDeclined\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr class=\"warning\">\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t3\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t03/04/2012\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tPending\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr class=\"danger\">\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t4\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t04/04/2012\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tCall in to confirm\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t\t<div class=\"col-md-7\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t<h3>\n\t\t\t\t\t\th3. Lorem ipsum dolor sit amet.\n\t\t\t\t\t</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-5\">\n\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\">\n\t\t\t\t\t\tDefault\n\t\t\t\t\t</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\">\n\t\t\t\t\t\tDefault\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n        <div class=\"col-md-12\">\n\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-default\">\n\t\t\t\t\t\tDefault\n\t\t\t\t\t</button>\n          <button type=\"button\" class=\"btn btn-sm btn-default\">\n\t\t\t\t\t\tDefault\n\t\t\t\t\t</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-default\">\n\t\t\t\t\t\tDefault\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t#\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\tProduct\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\tPayment Taken\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\tStatus\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t1\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t01/04/2012\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tDefault\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"active\">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t1\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t01/04/2012\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tApproved\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"success\">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t2\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t02/04/2012\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tDeclined\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"warning\">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t3\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t03/04/2012\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tPending\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"danger\">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t4\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tTB - Monthly\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t04/04/2012\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\tCall in to confirm\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 1046:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(660);


/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function ClientsComponent() {
    }
    ClientsComponent.prototype.ngOnInit = function () {
    };
    ClientsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__(1003)
        }), 
        __metadata('design:paramtypes', [])
    ], ClientsComponent);
    return ClientsComponent;
}());
//# sourceMappingURL=E:/unitsecurity/src/clients.component.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function GuardsComponent() {
    }
    GuardsComponent.prototype.ngOnInit = function () {
    };
    GuardsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-guards',
            template: __webpack_require__(1006)
        }), 
        __metadata('design:paramtypes', [])
    ], GuardsComponent);
    return GuardsComponent;
}());
//# sourceMappingURL=E:/unitsecurity/src/guards.component.js.map

/***/ }),

/***/ 384:
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
            template: __webpack_require__(998),
            styles: [__webpack_require__(994)]
        }), 
        __metadata('design:paramtypes', [])
    ], AlertDetailComponent);
    return AlertDetailComponent;
}());
//# sourceMappingURL=E:/unitsecurity/src/alert-detail.component.js.map

/***/ }),

/***/ 385:
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
            template: __webpack_require__(999),
        }), 
        __metadata('design:paramtypes', [])
    ], AlertComponent);
    return AlertComponent;
}());
//# sourceMappingURL=E:/unitsecurity/src/alert.component.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_ui__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_location_add_location_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(73);
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
    function AddClientComponent(_route) {
        this._route = _route;
    }
    AddClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.id = +params["id"];
        });
    };
    AddClientComponent.prototype.openPopup = function () {
        this.popup.open(__WEBPACK_IMPORTED_MODULE_2__add_location_add_location_component__["a" /* AddLocationComponent */], {
            closeWindow: true,
            classNames: 'large location-popup'
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ng2_ui__["Ng2PopupComponent"]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_ui__["Ng2PopupComponent"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_ui__["Ng2PopupComponent"]) === 'function' && _a) || Object)
    ], AddClientComponent.prototype, "popup", void 0);
    AddClientComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-client',
            template: __webpack_require__(1001)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], AddClientComponent);
    return AddClientComponent;
    var _a, _b;
}());
//# sourceMappingURL=E:/unitsecurity/src/add-client.component.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_ui__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_ui__);
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
    function AddLocationComponent() {
    }
    AddLocationComponent.prototype.ngOnInit = function () {
    };
    AddLocationComponent.prototype.closePopUp = function () {
        this.popup.close();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ng2_ui__["Ng2PopupComponent"]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_ui__["Ng2PopupComponent"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_ui__["Ng2PopupComponent"]) === 'function' && _a) || Object)
    ], AddLocationComponent.prototype, "popup", void 0);
    AddLocationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-location',
            template: __webpack_require__(1002)
        }), 
        __metadata('design:paramtypes', [])
    ], AddLocationComponent);
    return AddLocationComponent;
    var _a;
}());
//# sourceMappingURL=E:/unitsecurity/src/add-location.component.js.map

/***/ }),

/***/ 388:
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
            template: __webpack_require__(1004),
            styles: [__webpack_require__(995)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=E:/unitsecurity/src/dashboard.component.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(73);
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
    function AddGuardComponent(_route) {
        this._route = _route;
        this.clients = [];
    }
    AddGuardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.id = +params["id"];
        });
    };
    AddGuardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addguard',
            template: __webpack_require__(1005)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], AddGuardComponent);
    return AddGuardComponent;
    var _a;
}());
//# sourceMappingURL=E:/unitsecurity/src/addguard.component.js.map

/***/ }),

/***/ 390:
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
            template: __webpack_require__(1007),
            styles: [__webpack_require__(996)]
        }), 
        __metadata('design:paramtypes', [])
    ], IncidentDetailComponent);
    return IncidentDetailComponent;
}());
//# sourceMappingURL=E:/unitsecurity/src/incident-detail.component.js.map

/***/ }),

/***/ 391:
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
            template: __webpack_require__(1008)
        }), 
        __metadata('design:paramtypes', [])
    ], IncidentComponent);
    return IncidentComponent;
}());
//# sourceMappingURL=E:/unitsecurity/src/incident.component.js.map

/***/ }),

/***/ 392:
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
            template: __webpack_require__(1009),
            styles: [__webpack_require__(997)]
        }), 
        __metadata('design:paramtypes', [])
    ], ReportsComponent);
    return ReportsComponent;
}());
//# sourceMappingURL=E:/unitsecurity/src/reports.component.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(73);
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
    function AddDutyComponent(_route) {
        this._route = _route;
    }
    AddDutyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.id = +params["id"];
        });
    };
    AddDutyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-duty',
            template: __webpack_require__(1010)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], AddDutyComponent);
    return AddDutyComponent;
    var _a;
}());
//# sourceMappingURL=E:/unitsecurity/src/add-duty.component.js.map

/***/ }),

/***/ 394:
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
            template: __webpack_require__(1011)
        }), 
        __metadata('design:paramtypes', [])
    ], ScheduleDetailComponent);
    return ScheduleDetailComponent;
}());
//# sourceMappingURL=E:/unitsecurity/src/schedule-detail.component.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function ScheduleComponent() {
    }
    ScheduleComponent.prototype.ngOnInit = function () {
    };
    ScheduleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(1012)
        }), 
        __metadata('design:paramtypes', [])
    ], ScheduleComponent);
    return ScheduleComponent;
}());
//# sourceMappingURL=E:/unitsecurity/src/schedule.component.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function TimesheetComponent() {
    }
    TimesheetComponent.prototype.ngOnInit = function () {
    };
    TimesheetComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-timesheet',
            template: __webpack_require__(1013)
        }), 
        __metadata('design:paramtypes', [])
    ], TimesheetComponent);
    return TimesheetComponent;
}());
//# sourceMappingURL=E:/unitsecurity/src/timesheet.component.js.map

/***/ }),

/***/ 397:
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
            template: __webpack_require__(1014)
        }), 
        __metadata('design:paramtypes', [])
    ], UserComponent);
    return UserComponent;
}());
//# sourceMappingURL=E:/unitsecurity/src/user.component.js.map

/***/ }),

/***/ 659:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 659;


/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(779);



if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=E:/unitsecurity/src/main.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(1000)
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=E:/unitsecurity/src/app.component.js.map

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_ui__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_map__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_datetime_picker__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_datetime_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_datetime_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap__ = __webpack_require__(950);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__clients_clients_routes__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__schedule_schedule_routes__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_guards_routes__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routes__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_user_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_addguard_addguard_component__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_guards_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__clients_clients_component__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__clients_add_client_add_client_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__clients_add_location_add_location_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__schedule_schedule_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__schedule_add_duty_add_duty_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__schedule_schedule_detail_schedule_detail_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__schedule_timesheet_timesheet_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__incident_incident_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__alert_alert_component__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__dashboard_dashboard_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__reports_reports_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__alert_alert_detail_alert_detail_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__incident_incident_detail_incident_detail_component__ = __webpack_require__(390);
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
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_18__clients_add_location_add_location_component__["a" /* AddLocationComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=E:/unitsecurity/src/app.module.js.map

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_guards_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clients_clients_component__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__incident_incident_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alert_alert_component__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reports_reports_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__alert_alert_detail_alert_detail_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__incident_incident_detail_incident_detail_component__ = __webpack_require__(390);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });










var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot([
    { path: '', redirectTo: 'clients', pathMatch: 'full' },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_1__user_user_component__["a" /* UserComponent */] },
    { path: 'guards', component: __WEBPACK_IMPORTED_MODULE_2__guards_guards_component__["a" /* GuardsComponent */] },
    { path: 'clients', component: __WEBPACK_IMPORTED_MODULE_3__clients_clients_component__["a" /* ClientsComponent */] },
    { path: 'incidents', component: __WEBPACK_IMPORTED_MODULE_4__incident_incident_component__["a" /* IncidentComponent */] },
    { path: 'alerts', component: __WEBPACK_IMPORTED_MODULE_5__alert_alert_component__["a" /* AlertComponent */] },
    { path: 'incidents/:id', component: __WEBPACK_IMPORTED_MODULE_9__incident_incident_detail_incident_detail_component__["a" /* IncidentDetailComponent */] },
    { path: 'alerts/:id', component: __WEBPACK_IMPORTED_MODULE_8__alert_alert_detail_alert_detail_component__["a" /* AlertDetailComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'reports', component: __WEBPACK_IMPORTED_MODULE_7__reports_reports_component__["a" /* ReportsComponent */] },
]);
//# sourceMappingURL=E:/unitsecurity/src/app.routes.js.map

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clients_component__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_client_add_client_component__ = __webpack_require__(386);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clientsRouting; });



var clientsRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild([
    { path: 'clients', component: __WEBPACK_IMPORTED_MODULE_1__clients_component__["a" /* ClientsComponent */] },
    { path: 'clients/add', component: __WEBPACK_IMPORTED_MODULE_2__add_client_add_client_component__["a" /* AddClientComponent */] },
    { path: 'clients/edit/:id', component: __WEBPACK_IMPORTED_MODULE_2__add_client_add_client_component__["a" /* AddClientComponent */] },
]);
//# sourceMappingURL=E:/unitsecurity/src/clients.routes.js.map

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addguard_addguard_component__ = __webpack_require__(389);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return guardsRouting; });



var guardsRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild([
    { path: 'guards', component: __WEBPACK_IMPORTED_MODULE_1__guards_component__["a" /* GuardsComponent */] },
    { path: 'guards/add', component: __WEBPACK_IMPORTED_MODULE_2__addguard_addguard_component__["a" /* AddGuardComponent */] },
    { path: 'guards/edit/:id', component: __WEBPACK_IMPORTED_MODULE_2__addguard_addguard_component__["a" /* AddGuardComponent */] },
]);
//# sourceMappingURL=E:/unitsecurity/src/guards.routes.js.map

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schedule_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_duty_add_duty_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schedule_detail_schedule_detail_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__timesheet_timesheet_component__ = __webpack_require__(396);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return scheduleRouting; });





var scheduleRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild([
    { path: 'schedule', component: __WEBPACK_IMPORTED_MODULE_1__schedule_component__["a" /* ScheduleComponent */] },
    { path: 'schedule/add', component: __WEBPACK_IMPORTED_MODULE_2__add_duty_add_duty_component__["a" /* AddDutyComponent */] },
    { path: 'schedule/edit/:id', component: __WEBPACK_IMPORTED_MODULE_2__add_duty_add_duty_component__["a" /* AddDutyComponent */] },
    { path: 'schedule/detail/:id', component: __WEBPACK_IMPORTED_MODULE_3__schedule_detail_schedule_detail_component__["a" /* ScheduleDetailComponent */] },
    { path: 'schedule/detail/:id/timesheet', component: __WEBPACK_IMPORTED_MODULE_4__timesheet_timesheet_component__["a" /* TimesheetComponent */] },
]);
//# sourceMappingURL=E:/unitsecurity/src/schedule.routes.js.map

/***/ }),

/***/ 784:
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

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 437,
	"./af.js": 437,
	"./ar": 444,
	"./ar-dz": 438,
	"./ar-dz.js": 438,
	"./ar-kw": 439,
	"./ar-kw.js": 439,
	"./ar-ly": 440,
	"./ar-ly.js": 440,
	"./ar-ma": 441,
	"./ar-ma.js": 441,
	"./ar-sa": 442,
	"./ar-sa.js": 442,
	"./ar-tn": 443,
	"./ar-tn.js": 443,
	"./ar.js": 444,
	"./az": 445,
	"./az.js": 445,
	"./be": 446,
	"./be.js": 446,
	"./bg": 447,
	"./bg.js": 447,
	"./bn": 448,
	"./bn.js": 448,
	"./bo": 449,
	"./bo.js": 449,
	"./br": 450,
	"./br.js": 450,
	"./bs": 451,
	"./bs.js": 451,
	"./ca": 452,
	"./ca.js": 452,
	"./cs": 453,
	"./cs.js": 453,
	"./cv": 454,
	"./cv.js": 454,
	"./cy": 455,
	"./cy.js": 455,
	"./da": 456,
	"./da.js": 456,
	"./de": 459,
	"./de-at": 457,
	"./de-at.js": 457,
	"./de-ch": 458,
	"./de-ch.js": 458,
	"./de.js": 459,
	"./dv": 460,
	"./dv.js": 460,
	"./el": 461,
	"./el.js": 461,
	"./en-au": 462,
	"./en-au.js": 462,
	"./en-ca": 463,
	"./en-ca.js": 463,
	"./en-gb": 464,
	"./en-gb.js": 464,
	"./en-ie": 465,
	"./en-ie.js": 465,
	"./en-nz": 466,
	"./en-nz.js": 466,
	"./eo": 467,
	"./eo.js": 467,
	"./es": 469,
	"./es-do": 468,
	"./es-do.js": 468,
	"./es.js": 469,
	"./et": 470,
	"./et.js": 470,
	"./eu": 471,
	"./eu.js": 471,
	"./fa": 472,
	"./fa.js": 472,
	"./fi": 473,
	"./fi.js": 473,
	"./fo": 474,
	"./fo.js": 474,
	"./fr": 477,
	"./fr-ca": 475,
	"./fr-ca.js": 475,
	"./fr-ch": 476,
	"./fr-ch.js": 476,
	"./fr.js": 477,
	"./fy": 478,
	"./fy.js": 478,
	"./gd": 479,
	"./gd.js": 479,
	"./gl": 480,
	"./gl.js": 480,
	"./gom-latn": 481,
	"./gom-latn.js": 481,
	"./he": 482,
	"./he.js": 482,
	"./hi": 483,
	"./hi.js": 483,
	"./hr": 484,
	"./hr.js": 484,
	"./hu": 485,
	"./hu.js": 485,
	"./hy-am": 486,
	"./hy-am.js": 486,
	"./id": 487,
	"./id.js": 487,
	"./is": 488,
	"./is.js": 488,
	"./it": 489,
	"./it.js": 489,
	"./ja": 490,
	"./ja.js": 490,
	"./jv": 491,
	"./jv.js": 491,
	"./ka": 492,
	"./ka.js": 492,
	"./kk": 493,
	"./kk.js": 493,
	"./km": 494,
	"./km.js": 494,
	"./kn": 495,
	"./kn.js": 495,
	"./ko": 496,
	"./ko.js": 496,
	"./ky": 497,
	"./ky.js": 497,
	"./lb": 498,
	"./lb.js": 498,
	"./lo": 499,
	"./lo.js": 499,
	"./lt": 500,
	"./lt.js": 500,
	"./lv": 501,
	"./lv.js": 501,
	"./me": 502,
	"./me.js": 502,
	"./mi": 503,
	"./mi.js": 503,
	"./mk": 504,
	"./mk.js": 504,
	"./ml": 505,
	"./ml.js": 505,
	"./mr": 506,
	"./mr.js": 506,
	"./ms": 508,
	"./ms-my": 507,
	"./ms-my.js": 507,
	"./ms.js": 508,
	"./my": 509,
	"./my.js": 509,
	"./nb": 510,
	"./nb.js": 510,
	"./ne": 511,
	"./ne.js": 511,
	"./nl": 513,
	"./nl-be": 512,
	"./nl-be.js": 512,
	"./nl.js": 513,
	"./nn": 514,
	"./nn.js": 514,
	"./pa-in": 515,
	"./pa-in.js": 515,
	"./pl": 516,
	"./pl.js": 516,
	"./pt": 518,
	"./pt-br": 517,
	"./pt-br.js": 517,
	"./pt.js": 518,
	"./ro": 519,
	"./ro.js": 519,
	"./ru": 520,
	"./ru.js": 520,
	"./sd": 521,
	"./sd.js": 521,
	"./se": 522,
	"./se.js": 522,
	"./si": 523,
	"./si.js": 523,
	"./sk": 524,
	"./sk.js": 524,
	"./sl": 525,
	"./sl.js": 525,
	"./sq": 526,
	"./sq.js": 526,
	"./sr": 528,
	"./sr-cyrl": 527,
	"./sr-cyrl.js": 527,
	"./sr.js": 528,
	"./ss": 529,
	"./ss.js": 529,
	"./sv": 530,
	"./sv.js": 530,
	"./sw": 531,
	"./sw.js": 531,
	"./ta": 532,
	"./ta.js": 532,
	"./te": 533,
	"./te.js": 533,
	"./tet": 534,
	"./tet.js": 534,
	"./th": 535,
	"./th.js": 535,
	"./tl-ph": 536,
	"./tl-ph.js": 536,
	"./tlh": 537,
	"./tlh.js": 537,
	"./tr": 538,
	"./tr.js": 538,
	"./tzl": 539,
	"./tzl.js": 539,
	"./tzm": 541,
	"./tzm-latn": 540,
	"./tzm-latn.js": 540,
	"./tzm.js": 541,
	"./uk": 542,
	"./uk.js": 542,
	"./ur": 543,
	"./ur.js": 543,
	"./uz": 545,
	"./uz-latn": 544,
	"./uz-latn.js": 544,
	"./uz.js": 545,
	"./vi": 546,
	"./vi.js": 546,
	"./x-pseudo": 547,
	"./x-pseudo.js": 547,
	"./yo": 548,
	"./yo.js": 548,
	"./zh-cn": 549,
	"./zh-cn.js": 549,
	"./zh-hk": 550,
	"./zh-hk.js": 550,
	"./zh-tw": 551,
	"./zh-tw.js": 551
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
webpackContext.id = 940;


/***/ }),

/***/ 994:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 995:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 996:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 997:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 998:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-6\">\n      <h3>Alert Details </h3>\n\t\t\t<form class=\"form-horizontal pad-top-20 mar-top-20\" role=\"form\">\n\t\t\t\t<div class=\"form-group\">\n\n\t\t\t\t\t<label for=\"inputEmail3\" class=\"col-sm-2 control-label\">\n\t\t\t\t\t\tGuard\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-sm-10 mar-top-7\">\n\t\t\t\t\t\t<span>saadzaman@out</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n        <div class=\"form-group\">\n\n\t\t\t\t\t<label for=\"inputEmail3\" class=\"col-sm-2 control-label\">\n\t\t\t\t\t\tClient\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-sm-10 mar-top-7\">\n\t\t\t\t\t\t<span>saadzaman@out</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n        <div class=\"form-group\">\n\n\t\t\t\t\t<label for=\"inputEmail3\" class=\"col-sm-2 control-label\">\n\t\t\t\t\t\tLocation\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-sm-10 mar-top-7\">\n\t\t\t\t\t\t<span>saadzaman@out</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n        <div class=\"form-group\">\n\n\t\t\t\t\t<label for=\"inputEmail3\" class=\"col-sm-2 control-label\">\n\t\t\t\t\t\tTimestamp\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-sm-10 mar-top-7\">\n\t\t\t\t\t\t<span>saadzaman@out</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n        <div class=\"form-group\">\n\n\t\t\t\t\t<label for=\"inputEmail3\" class=\"col-sm-2 control-label\">\n\t\t\t\t\t\tTracking\n\t\t\t\t\t</label>\n\t\t\t\t\t<div class=\"col-sm-10 mar-top-7\">\n\t\t\t\t\t\t<span>saadzaman@out</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group pad-top-20\">\n\t\t\t\t\t<div class=\"col-sm-offset-2 col-sm-10\">\n\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-info\">\n\t\t\t\t\t\t\tTrack\n\t\t\t\t\t\t</button>\n            <button type=\"submit\" class=\"btn btn-danger\">\n\t\t\t\t\t\t\tView Guard Details\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t\t<div class=\"col-md-6\">\n      <ng2-map zoom=\"10\" center=\"Brampton, Canada\">\n    <marker (click)=\"showInfoWindow($event)\"  [position]=\"pos\"></marker>\n  </ng2-map>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 999:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-12 client-top\">\n\t\t<div class=\"col-md-3\">\n\t\t\t<h3>Alerts</h3>\n\t\t</div>\n\t\t<!-- <div class=\"col-md-9\">\n\t\t\t<div class=\"btn-section pull-right\">\n\t\t\t\t<button class=\"btn btn-primary btn-success\" [routerLink]=\"['add']\" ng-show=\"!asd\">Add</button>\n\n\n\t\t\t</div>\n\t\t\t<div class=\"btn-section col-md-6 pull-right\">\n\t\t\t\t<div class=\"form-group has-feedback\">\n\t                <label for=\"search\" class=\"sr-only\">Search</label>\n\t                <input type=\"text\" class=\"form-control\" ng-model=\"searchKeyword\" placeholder=\"search\" ng-change=\"currentPage=1;\">\n\t                <span class=\"glyphicon glyphicon-search form-control-feedback\"></span>\n\t            </div>\n\t\t\t</div>\n\n\t\t</div> -->\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-md-12\">\n\t    <div class=\"panel panel-default\">\n\t        <div class=\"panel-body\">\n\t            <div class=\"table-responsive\">\n\t                <table class=\"table\">\n\t                    <thead>\n\t                        <tr>\n\n\t                            <th>Guard</th>\n\t                            <th>Client</th>\n\t                            <th>Timestamp</th>\n\t                            <th>Location</th>\n\t                        </tr>\n\t                    </thead>\n\t                    <tbody>\n\t                        <tr ng-repeat=\"client in clients\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <td>John</td>\n\t                            <td>Mac Donalds</td>\n\t                            <td><a href=\"javascript:;\" [routerLink]=\"['/alerts/1']\">2017-25-3 10:16</a></td>\n\t                            <td>Askari 4</td>\n\t                        </tr>\n\t                    </tbody>\n\t                </table>\n\t            </div>\n\t        </div>\n\t    </div>\n    </div>\n</div>\n"

/***/ })

},[1046]);
//# sourceMappingURL=main.bundle.map