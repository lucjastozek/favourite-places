import places from "./places";

export interface PlaceProps {
  title: string;
  placeName: string;
  countryName: string;
  image: string;
  location: string;
  description: string;
}
function Place(props: PlaceProps): JSX.Element {
  return (
    <div className="place">
      <img src={props.image} alt="place" className="place-img" />
      <h2 className="title">{props.title}</h2>
      <h3 className="name">
        {props.placeName}, {props.countryName}
      </h3>
      <i className="location">{props.location}</i>
      <p className="description">{props.description}</p>
    </div>
  );
}

function Places(): JSX.Element {
  return <>{places.map((place) => Place(place))}</>;
}

export default Places;
