(function ($) {


    var viewModel = {};

    viewModel.todo = ko.observable();
    viewModel.todoList = ko.observableArray();

    viewModel.add = function(){
        viewModel.todoList.push(viewModel.todo());
        viewModel.todo('');
    }

    viewModel.remove = function(data){
        viewModel.todoList.remove(data);
    }

    viewModel.fadeIn = function(elem){
        if (elem.nodeType === 1)
        $(elem).hide().fadeIn('normal');
    };

    viewModel.fadeOut = function(elem){
        if (elem.nodeType === 1)
            $(elem).hide().fadeOut('normal');
    };

    viewModel.sort = function(){
        viewModel.members.sort();
    };

    ko.applyBindings(viewModel);

}(jQuery));