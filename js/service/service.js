var app = angular.module('serviceApp');
app.factory('ItemService', [function () {
        var items = [
            {id: 1, label: 'Item 0'},
            {id: 2, label: 'Item 1'}
        ];

        return {
            list: function () {
                return items;
            },
            add: function (item) {
                items.push(item);
            }
        };
    }]);
