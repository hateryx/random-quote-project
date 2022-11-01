import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import "./App.css";

const quoteList = [
  {
    author: "Mahatma Gandhi",
    quote:
      "Learn as if you will live forever, live like you will die tomorrow.",
  },
  {
    author: "Albert Enstein",
    quote:
      "“We cannot solve problems with the kind of thinking we employed when we came up with them.",
  },
  {
    author: "Walter Anderson",
    quote:
      "It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.",
  },
  {
    author: "Winston S. Churchill",
    quote:
      "Success is not final; failure is not fatal: It is the courage to continue that counts.",
  },
  {
    author: "Alexander Graham Bell",
    quote:
      "Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus.",
  },
  {
    author: "Thomas Jefferson",
    quote:
      "I’m a greater believer in luck, and I find the harder I work the more I have of it.",
  },
  {
    author: "Paulo Coelho",
    quote:
      "When we strive to become better than we are, everything around us becomes better too.",
  },
  {
    author: "Confucius",
    quote: "He who conquers himself is the mightiest warrior.",
  },
  {
    author: "Anonymous",
    quote: "Work until your bank account looks like a phone number.",
  },
];

const App = () => {
  let quoteNum = Math.floor(Math.random() * quoteList.length);
  let quoteFlash = quoteList[quoteNum].quote;
  let quoteAuthor = quoteList[quoteNum].author;

  const [quoteFlashState, setQuoteFlash] = useState(quoteFlash);
  const [quoteAuthorState, setQuoteAuthor] = useState(quoteAuthor);

  const onClickHandler_new_quote = (event) => {
    quoteNum = "";
    quoteNum = Math.floor(Math.random() * quoteList.length);
    quoteFlash = quoteList[quoteNum].quote;
    quoteAuthor = quoteList[quoteNum].author;

    setQuoteFlash(quoteFlash);
    setQuoteAuthor(quoteAuthor);
  };

  const onClickHandler_tweet_quote = (event) => {
    event.preventDefault();
  };

  return (
    <div id="quote-box">
      <div id="text">{quoteFlashState}</div>
      <div id="author">- {quoteAuthorState}</div>

      <div class="buttons">
        <button id="new-quote" onClick={onClickHandler_new_quote}>
          New Quote
        </button>
        <a
          href="https://www.twitter.com/intent/tweet"
          id="tweet-quote"
          onClick={onClickHandler_tweet_quote}
        >
          <i class="bi bi-twitter"></i>
        </a>
      </div>
    </div>
  );
};

//<button>Tweet Quote</button>

export default App;
