chrome.browserAction.onClicked.addListener(function (tab){
    const colors = ["red", "orange", "yellow", "green", "blue", "violet", 'deeppink', 'coral', 'peachpuff', 'khaki', 'rebeccapurple', 'mediumslateblue', 'springgreen', 'olive', 'teal', 'steelblue', 'powderblue', 'cornsilk', 'sandybrown', 'goldenrod', 'chocolate', 'maroon', 'honeydew', 'beige', 'linen', 'darkslategray'];

    const fonts = ["Arial", "monofur", "verdana", "Times New Roman"];

    const fontPicker = () => {
        const randomIndex = Math.floor(Math.random() * fonts.length);
        return fonts[randomIndex];
    }

    const colorPicker = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor = "' + colorPicker() + '"',
    });
    chrome.tabs.executeScript({
        code: 'document.body.style.fontFamily = "' + fontPicker() + '"',
       
    });


});