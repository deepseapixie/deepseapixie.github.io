$(function () {
    ko.applyBindings(HomeViewModel);
});

function HomeViewModel() {
    this.message = ko.observable("Hello World! I'm Kia Miller!");
}
