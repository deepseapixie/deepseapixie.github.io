function HomeViewModel() {
    this.message = ko.observable("Hello World! I'm Kia Miller!");
};

ko.applyBindings(new HomeViewModel());
