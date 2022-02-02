var app = document.getElementById('app');

var authors = [
    {
        name: 'Mark Zuckerberg',
        imageUrl: 'assets/mark.jpg',
        quotes: [
            '"The biggest risk is not taking any risk. In a world that is changing really quickly, the only strategy that is guaranteed to fail is not taking risks."',
            '"Find that thing you are super passionate about."',
            '"People don’t care about what you say, they care about what you build."',
            '"If you actually do something you love it’s a lot easier and takes on a lot more purpose."',
            '"The trick isn’t adding stuff, it’s taking away."'
        ]
    },
    {
        name: 'Bill Gates',
        imageUrl: 'assets/bill-gates.jpg',
        quotes: [
            '"Patience is a key element of success"',
            '"I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it"',
            '"To win big, you sometimes have to take big risks"',
            '"It’s fine to celebrate success, but it is more important to heed the lessons of failure"',
            '"We all need people who will give us feedback. That’s how we improve"'
        ]
    },
    {
        name: 'Elon Musk',
        imageUrl: 'assets/elon-musk.jpg',
        quotes: [
            '"I think it is possible for ordinary people to choose to be extraordinary."', 
            '"When something is important enough, you do it even if the odds are not in your favor."', 
            '"Failure is an option here. If things are not failing, you are not innovating enough."', 
            '"Persistence is very important. You should not give up unless you are forced to give up"', 
            '"People work better when they know what the goal is and why. It is important that people look forward to coming to work in the morning and enjoy working."'
        ]
    },
    {
        name: 'Jack Ma',
        imageUrl: 'assets/jack.jpg',
        quotes: [
            '"Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine."',
            '"The very important thing you should have is patience"',
            '"If you don’t give up, you still have a chance"',
            '"If you don’t do it, nothing’s possible"',
            '"Try to find the right people, not the best people"'
        ]
    },
    {
        name: 'Sergey Brin',
        imageUrl: 'assets/sergey.jpg',
        quotes: [
            '"The only way you are going to have success is to have lots of failures first."',
            '"Anything you can imagine probably is doable, you just have to imagine it and work on it"',
            '"Always deliver more than expected."',
            '"Solving big problems is easier than solving little problems."',
            '"You never lose a dream, it just incubates as a hobby."'
        ]
    },
]
function generateAuthorList() {
    var authorList = document.getElementById('author-list');
    for (var i = 0; i < authors.length; i++) {
        var authorListItem = document.createElement('a');
        var authorButton = document.createElement('img');
        authorButton.className = 'circle-container';
        authorButton.src = authors[i].imageUrl;
        authorButton.onclick = function (authorIdx) {
            return function () {
                var authorName = document.getElementById('author-name');
                authorName.textContent = authors[authorIdx].name;

                var generateButton = document.getElementById('generate-btn');
                generateButton.onclick = function () {
                    generateQuote(0, authorIdx);
                }
            }
        }(i);

        authorListItem.appendChild(authorButton);
        authorList.appendChild(authorListItem);
    }
}

function generateQuote(quoteIdx, currentAuthorIdx) {
    var selectedAuthor = authors[currentAuthorIdx];
    var mainQuote = document.getElementById('main-quote');
    var quotation = document.getElementById('quotation');

    while (mainQuote.firstChild) {
        mainQuote.removeChild(mainQuote.firstChild);
    }
    var quoteContent = document.createElement('h1-new-quote');
    quoteContent.style = 'width:70%;text-align:center; border-style: dashed;border-width: 5px;border-color: #095256; border-radius: 35px;'
    quoteContent.textContent = selectedAuthor.quotes[quoteIdx % selectedAuthor.quotes.length];

    var generateButton = document.getElementById('generate-btn');
    generateButton.onclick = function () {
        generateQuote(quoteIdx + 1, currentAuthorIdx);
    }
    
    mainQuote.appendChild(quoteContent);
}

generateAuthorList();