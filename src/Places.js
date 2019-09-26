const Places = ({ places }) => {
  return (
    <ul>
      {
        places.map(place => <li key={place.id}>{place.name}</li>)
      }
    </ul>
  );
};

export default Places;
