/**
 * Created by tanner on 2/9/17.
 */
angular.module('userProfiles').service('mainService', function ()
{
    var users;
    loadJson(function (response)
    {
        users = JSON.parse(response);
    });

    this.getUsers = function ()
    {
        return users;
    };

    this.toggleFavorite = function (index)
    {
        users[index].isFavorite = !users[index].isFavorite;
    };
});

function loadJson(callback)
{
    var request = new XMLHttpRequest();
    request.overrideMimeType('application/json');
    request.open('GET', 'data.json', false);
    request.onreadystatechange = function ()
    {
        if (request.readyState == 4 && request.status == 200)
        {
            callback(request.responseText);
        }
    }
    request.send();
}