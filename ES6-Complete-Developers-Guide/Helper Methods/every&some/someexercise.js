//In Progress Network Requests

//Given an array of network objects representing network requests, assign the boolean 'true' to the variable 'inProgress' if any network request has a 'status' of 'pending'.

var requests = [
    {
        url: '/photos',
        status: 'complete'
    },
    {
        url: '/albums',
        status: 'pending'
    },
    {
        url: '/users',
        status: 'failed'
    }
];

var inProgress = requests.some(request => !status.pending);