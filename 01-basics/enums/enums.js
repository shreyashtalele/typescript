"use strict";
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["user"] = 1] = "user";
    Role[Role["seller"] = 2] = "seller";
    Role[Role["guest"] = 3] = "guest";
})(Role || (Role = {}));
let currentRole = Role.admin;
console.log(currentRole);
