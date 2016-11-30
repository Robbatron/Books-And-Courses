import $ from "jquery";

const $title = $("#title");
const $results = $("#results");

let lastQuery = null; // fix to not query when arrows are pressed
let lastTimeout = null;
let nextQueryId = 0; // fix for race conditions
$title.on("keyup", e => {
    const title = e.target.value;

    if (title == lastQuery) return;
    lastQuery = title;
    
    if (lastTimeout) 
        window.clearTimeout(lastTimeout);

    let ourQueryId = ++nextQueryId;
    lastTimeout = window.setTimeout(() => {
        getItems(title)
            .then(items => {
                if (ourQueryId !== nextQueryId) return;
                $results.empty();
                const $items = items.map(item => $(`<li />`).text(item));
                    $results.append($items);
            });
        }, 500);
});


// ----------------------------
// Library
function getItems(title) {
    console.log(`Querying ${title}`);
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve([title, "Item 2", `Another ${Math.random()}`]);
        }, 500 + (Math.random() * 2000));
    });
}