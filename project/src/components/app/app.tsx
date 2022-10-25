import Card from '../../components/card/card';

type AppOfferProps = {
  offersCount: number;
}


function App({offersCount}: AppOfferProps): JSX.Element{
  return (
    <Card offersCount={offersCount} />
  );
}

export default App;
