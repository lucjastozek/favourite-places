function PageFooter(): JSX.Element {
  return (
    <footer>
      <h3 className="author">Made by me!</h3>
      <p>Photos from:</p>
      <ul className="contributions-list">
        <li>
          <a href="https://www.eater.com">Eater</a>
        </li>
        <li>
          <a href="https://www.reddit.com">Reddit</a>
        </li>
        <li>
          <a href="https://www.moviemaps.org">Movie Maps</a>
        </li>
      </ul>
    </footer>
  );
}

export default PageFooter;
