var app = angular.module('serviceApp');
app.controller('MainCtrl', [function () {
        self = this;
        self.tab = 'firsttab';

        self.open = function (tab) {
            self.tab = tab;
        };
    }]);
app.controller('SubCtrl', ['ItemService', function (ItemService) {
        var self = this;

        self.list = function () {
            return ItemService.list();
        };

        self.add = function () {
            ItemService.add({
                id: self.list().length + 1,
                label: 'Item' + self.list().length
            });
        };
    }]);


