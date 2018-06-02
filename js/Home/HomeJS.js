var HomeViewModel = function () {
    var message = ko.observable("Hello World! I'm Kia Miller!");
};

ko.applyBindings(new HomeViewModel());
