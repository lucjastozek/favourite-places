import PageHeader from "./components/PageHeader";
import Places from "./components/Place";
import PageFooter from "./components/PageFooter";
import "./styles.css";

function App(): JSX.Element {
  return (
    <>
      <PageHeader />
      <div className="places">
        <Places />
      </div>
      <PageFooter />
    </>
  );
}

export default App;
