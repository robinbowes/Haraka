// Just relay everything - could be useful for a spamtrap

exports.register = function() {
    this.register_hook('rcpt', 'confirm_all');
};

exports.confirm_all = function(next, connection, params) {
    var recipient = params.shift();
    this.loginfo("confirming recipient " + recipient);
    next(OK);
};
