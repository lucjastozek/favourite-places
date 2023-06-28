import PageHeader from "./components/PageHeader";
import Place from "./components/Place";
import PageFooter from "./components/PageFooter";
import "./styles.css";

function App(): JSX.Element {
  return (
    <>
      <PageHeader />
      <div className="places">
        <Place
          title="Freezing!"
          placeName="Yogurt Yoghurt Yogurté"
          countryName="The Good Place"
          image="https://cdn.vox-cdn.com/thumbor/pq4QnLBOocHclsSMVRI4XM1k0fU=/0x0:2000x1286/1200x0/filters:focal(0x0:2000x1286):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13695332/the_good_place_yogurt.jpg"
          location="Neighborhood 12358W, The Good Place, Afterlife"
          description="The best Frozen Yogurt in the whole Afterlife. A fruit of fabolous collaboration between Michael and Janet."
        />
        <Place
          title="Quite mediocre"
          placeName="Mindy St. Claire's House"
          countryName="The Medium Place"
          image="https://storage.googleapis.com/moviemaps/img/1i2v.eeomid.940.jpg"
          location="Mindy St. Claire's House, The Medium Place, Afterlife"
          description="The best (only) place in The Medium Place. Remember to bring cocaine!"
        />
        <Place
          title="Mind-stimulating"
          placeName="The Museum Of Human Misery"
          countryName="The Bad Place"
          image="https://i.redd.it/kdc5foirx9m31.jpg"
          location="The Museum Of Human Misery, The Bad Place, Afterlife"
          description="The best atraction in The Bad Place!!! I recommend going there with a crappy mood, alone."
        />
        <Place
          title="Hi/Bye!"
          placeName="The Door to Earth"
          countryName="Afterlife"
          image="https://i.insider.com/5f737ff00ab50d00184ad128?width=600&format=jpeg&auto=webp"
          location="The Door to Earth, Afterlife"
          description="If you want a down-to-earth place, you should definitely visit this place. You can meet Jeff there!!! You better bring some froggy stuff with you though..."
        />
      </div>
      <PageFooter />
    </>
  );
}

export default App;
