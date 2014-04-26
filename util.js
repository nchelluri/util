var Util = (function() {
    var queryStringParams = function(queryString) {
        var params = {};
        if (queryString.length == 0) {
            return params;
        }

        if (queryString[0] == '?') {
            queryString = queryString.slice(1);
        }

        var paramPairs = queryString.split('&');
        paramPairs.forEach(function(val) {
            var param = val.split('=');
            params[param[0]] = param[1];
        });

        return params;
    };

    var buildQueryString = function(params) {
        var queryString = '?';

        for (var key in params) {
            if (! params.hasOwnProperty(key)) continue;

            queryString += key + '='  + params[key] + '&';
        }

        if(queryString[queryString.length - 1] == '&') {
            queryString = queryString.slice(0, -1);
        }

        return queryString;
    };

    var updateUrl = function(url) {
        window.history.replaceState({}, '', url);
    };

    return {
        queryStringParams: queryStringParams,
        buildQueryString: buildQueryString,
        updateUrl: updateUrl
    };
}());