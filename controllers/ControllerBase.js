/* 
 * This file should contain user actions handlers
 * It's a comunicator between user activities
 * and server side.
 */

function ControllerBase() { }

// Actions
ControllerBase.prototype.indexActionGet = function (req, res, next) {
    this.responseData = {
        admin: this.isAdmin()
    };
    this.redirect('/' + this.config.defaultActiveTab);
    next();
};


module.exports = ControllerBase;