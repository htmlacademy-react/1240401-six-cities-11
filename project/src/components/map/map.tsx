type PropMap = {
  className: string;
}

function Map ({className}: PropMap): JSX.Element {
  return (
    <section className={`${className} map`}></section>
  );
}

export default Map;
