import { gql, useQuery } from "@apollo/client";
import "./App.css";

const EXCHANGE_RATES = gql`

query GET_RATES {
  rates(currency: "USD") {
    name
    currency
    rate
  }
}

`;


export const App = () => {


  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  )));
};

export default App;
