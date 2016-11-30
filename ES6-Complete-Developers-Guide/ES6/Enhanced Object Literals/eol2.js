// With enhanced object literals, we can make jQuery AJAX requests more readable!
function saveFile(url, data) {
    $.ajax({
        url,
        data,
        method: 'POST'
    });
}

const url = "http://fileupload.com";
const data = {
    color: 'red'
};

saveFile(url, data);