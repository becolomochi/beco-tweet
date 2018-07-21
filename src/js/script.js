(function () {
  'use strict';
  const tweetBtn = document.getElementById("tweet-btn");
  const tweetDivided = document.getElementById('tweet-area');

  /**
   * 指定した要素の子どもをすべて除去する
   * @param {HTMLElement} element HTMLの要素
   */
  function removeAllChildren(element) {
    while (element.firstChild) { // 子どもの要素があるかぎり除去
        element.removeChild(element.firstChild);
    }
  }
  
  tweetBtn.onclick = () => {
    let tweet = document.getElementById("tweet").value;

    if(tweet.length > 0) {
      tweet += ' 【作業がんばるぞい】';
    } else {
      tweet = '【作業がんばるぞい】';
    }

    // ツイートエリアの作成
    removeAllChildren(tweetDivided);
    const anchor = document.createElement('a');
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag='
      + encodeURIComponent('作業がんばる')
      + '&ref_src=twsrc%5Etfw';
    anchor.setAttribute('href', hrefValue);
    anchor.className = 'twitter-hashtag-button';
    anchor.setAttribute('data-show-count', 'false');
    anchor.setAttribute('data-size', 'large');
    anchor.setAttribute('data-text', tweet);
    anchor.setAttribute('data-url', 'https://goo.gl/U3kLez')
    anchor.innerText = 'Tweet #作業がんばる';
    tweetDivided.appendChild(anchor);

    twttr.widgets.load();
  }
})();