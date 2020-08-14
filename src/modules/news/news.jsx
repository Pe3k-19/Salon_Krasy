import React from "react";

export default class News extends React.Component {
  render() {
    return (
      <div className="novinky" style={{ color: "#f2f2f2" }}>
        <h3 style={{ textAlign: "left" }}>
          Text Readability Analysis is a tool that allows you to estimate
          whether the inserted text is easy to read. If not, the reader will
          have the problem of "breaking through" with poorly readable material.
          Analysis of the readability of your formulas. Try the number of words,
          the length of words, the number of syllables ...
          <span id="circle-image" className="pic1"></span>
          The samples are intended for the English language, so it is not
          accurate in the Slovak language. We will see whether the text to be
          written will be pleasant for the reader or if it is possible to avoid
          it. More detailed information on text readability analysis After you
          submit the text, you will see different indexes. For those interested
          in details, we provide links to resources in English. If you want to
          analyze some text, you don't need to consider automatic text analysis.
          Just look at the results.These indexes are: Nebula Index. Estimates
          the number of years of choice to understand the text. The shorter
          sentences and words, the better the readability. The result 12 means
          the pupil's age around 17 years. From practice: 6 means excellent
          readability. 8 to 10 are magazine and newspaper articles, short
          stories, easy to read and understand. Indexes 11 to 14 are already
          attained in scientific articles. Scientific work can be obtained at
          levels 15 to 20 and be communicated from the reader with full aim. An
          index of over 20 text-only texts that completely ignores the writer.
          Flesch readability index. "Evaluates" text from 1 to 100. The higher
          the number, the easier it is to read the text. Optimized readability
          on average for 60-70 user interfaces. The text should be understood by
          13-15 year olds. A result of 50 or less will be understood by people
          with higher education. 80 or more means that children in the lower
          classes of elementary schools also understand the text. Flesch-Kincaid
          index of educational situation. It evaluates the text according to its
          readability by students of statistical schools. When the readability
          is 8, the pupil of the eighth grade school school, the text can
          understand. The ideal readability of documents on the Internet is
          between 7 and 8. The readers' texts are common, if possible, indexes 8
          to 10, "should also guarantee successful text on the Internet. Coleman
          Liau Index, Smog Index and Automated Index. Calculate the number of
          years in the US to conduct to a full understanding of the text. Each
          of the other members in Slovak are therefore different results. 1 year
          of age 6 - 8 years, 12 years of age 17 years.
        </h3>
        {/* <br /> */}
        <h3 style={{ textAlign: "right" }}>
          Therefore, this text analysis may be of interest to you? The reason is
          simple. When you write text, you probably want you to get a pleasant
          reading. Vρroρο 2 Check if your text is available to the reader. Not
          after publishing content, but its readability. If you have short words
          and short sentences, your text is easy to read.
          <span id="circle-image" className="pic2"></span>
          This is the point of all this analysis of the text. Why on the web
          about internet marketing? You don't have to look for your readers.
          Accept whether the texts you write are attractive to readers. It is a
          good and illustrative example for SEO beginners. We see how easy
          search engines can analyze texts. Tips for reading results The results
          are only indicative. The formulas are assigned for English. Flesch
          readability index. "Evaluates" text from 1 to 100. The higher the
          number, the easier it is to read the text. Optimized readability on
          average for 60-70 user interfaces. The text should be understood by
          13-15 year olds. A result of 50 or less will be understood by people
          with higher education. 80 or more means that children in the lower
          classes of elementary schools also understand the text. Flesch-Kincaid
          index of educational situation.They are therefore inaccurate for
          Slovak. So take them with caution. Analyze articles only. Do not put
          all the content of other pages into the mechanical unit. Text menu
          analysis (which are short items) according to very short distorted
          results. Short articles (few sentences) cannot be unspecified. Average
          phrase per sentence: The shorter the sentence, the easier it is to
          read the text. In the text, probably longer and shorter sentences need
          to be alternated. The 6 to 10 words of the sentence have plain text
          that is capable of reading. 10 to 15 words for normal length. We see
          how easy search engines can analyze texts. Tips for reading results
          The results are only indicative. The formulas are assigned for
          English. Flesch readability index. "Evaluates" text from 1 to 100. The
          higher the number, the easier it is to read the text.
        </h3>
      </div>
    );
  }
}
