let userInput;
let userNum;
const searchUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="

function setup() {
    noCanvas();
    userInput = select('#userinput');
    userNum = select('#userNum');
    userInput.changed(goWiki);
    goWiki();
}

function goWiki() {
    let term = userInput.value();
    let url = searchUrl + term

    // location.reload();
    let i = 0;
    while (i < userNum.value()) {
        loadJSON(url, getData, 'jsonp');
        i += 1;
    }
}

function getData(data) {
    let len = data[1].length;

    // Assign a random integer
    let index = floor(random(len));

    var title = data[1][index];
    var content = data[2][index];

    // Replace all whitespaces with an underscore
    title = title.replace(/\s/g, '_')

    console.log(title)
    console.log(content)

    createDiv(title);
    createP(content);

}
