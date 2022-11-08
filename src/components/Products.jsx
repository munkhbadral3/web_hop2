import { useContext } from "react";
import { Container } from "react-bootstrap";
import img9 from "../assets/img9.png";
import { darkModeContext } from "../App";

const SignUp = () => {
  const { isDarkMode } = useContext(darkModeContext);

  const styles = {
    box: {
      backgroundColor: isDarkMode ? "black" : "white",
      color: isDarkMode ? "white" : "black",
    },
  };

  return (
    <div style={styles.box}>
      <div>
        <Container>
          <h1 className="a">
            10 Secrets for managing a<br /> remote team
          </h1>
          <div className="column">
            <img id="o" src={img9} alt="BG" />
            <div className="fon8">Leslie Alexander l 2nd January,2022</div>
          </div>
          <img id="s" src={img9} alt="BG" />
          <div className="font9">
            If you’re thinking of starting a blog of your own, but just don’t
            have a clue on what to blog about, then fear not! In this article, I
            have included a whole load of blog examples from a wide variety of
            different niches, all run on different blogging platforms like
            WordPress, Joomla! and Drupal. Since the beginning of the internet,
            millions and millions and millions of blogs have been created. Many
            have died due to lost interest or their owners giving up on the
            idea, while others have thrived and continue to grow, making money
            and earning their owners a steady income. It’s a constant evolution
            of content that keeps people coming back for more, especially if
            these blogs contact highly resourceful material that people find
            useful and interesting. Each example listed in this blog post are
            all different in some way and all bring something unique to their
            readers & subscribers. I want to show you what is possible and how
            you can take inspiration from them and create an awesome blog of
            your own. Some of these blogs make over $100k a month, others are
            just a hobby for their owners, but all have the same purpose at
            their core… the love of writing and sharing information. Some of
            these blogs make over $100k a month, others are just a hobby for
            their owners, but all have the same purpose at their core… the love
            of writing and Some of these blogs make over $100k a month, others
            are just a hobby for their owners, but all have the same purpose at
            their core… the love of writing and sharing information. Some of
            these blogs make over $100k a month, others are just a hobby for
            their owners, but all have the same purpose at their core… the love
            of writing and sharing information.
          </div>
          <div className="column">
            <img id="p" src={img9} alt="BG" />
            <div>
              <div>Written by</div>
              <h6>Shedrack Eze</h6>
              <div>CEO Team App</div>
            </div>
          </div>
          <hr></hr>
          <textarea id="w3review" name="comment" rows="4" cols="50"></textarea>
        </Container>
      </div>
    </div>
  );
};

export default SignUp;
