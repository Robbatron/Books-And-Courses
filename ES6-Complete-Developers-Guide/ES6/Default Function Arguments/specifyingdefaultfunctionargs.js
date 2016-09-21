function makeAjaxRequest(url = 'google.com', method = 'GET') {
    // default values used to have to be specified like this...
    //      method = method || 'GET'; 
    return method;
}

makeAjaxRequest('google.com', undefined); // GET
makeAjaxRequest('google.com', null); // null (will not get reassigned to GET)
makeAjaxRequest('google.com', 'POST'); // POST