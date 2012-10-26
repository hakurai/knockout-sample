(function($){

    var viewModel = {};

    viewModel.message = ko.observable('');

    viewModel.buttonText = 'click here!';

    viewModel.clickAction = function(){
        viewModel.message('hello world!');
    };

    ko.applyBindings(viewModel);

}(jQuery));