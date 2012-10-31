(function($){

    var viewModel = {};

    viewModel.message = ko.observable('');

    viewModel.clickAction = function(){
        viewModel.message('hello world!');
    };

    ko.applyBindings(viewModel);

}(jQuery));