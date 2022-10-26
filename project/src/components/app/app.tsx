import Main from '../../pages/main/main';


type AppOfferProps = {
  offersCount: number;
}


function App({offersCount}: AppOfferProps): JSX.Element{
  return (
    <Main offersCount={offersCount}/>
  );
}

export default App;
