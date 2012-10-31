(function ($) {


    var viewModel = {};

    viewModel.members = ko.observableArray();

    viewModel.addMember = function (member, delay) {
        setTimeout(function () {
            viewModel.members.push(member);
        }, delay);
    };

    viewModel.fadeIn = function(elem){
        if (elem.nodeType === 1)
        $(elem).hide().fadeIn('normal');
    };

    ko.applyBindings(viewModel);


    $(function () {
        var members = ['backpaper0',
            'irof',
            'KASUYA, Daisuke',
            's_kozake',
            'shumaro',
            'Kuchitama',
            'hakurai',
            'issps2009',
            'yukamu',
            'つねまげ（@tunemage)',
            'tanago238 ',
            'N.Murakami',
            'shinsukeoda'];

        $.each(members, function (i, member) {
            viewModel.addMember(member, 500 * i);
        });
    });

}(jQuery));