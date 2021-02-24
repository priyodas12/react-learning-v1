import React, { useState, useEffect } from 'react'

export default function CountryList() {

  const url = 'https://restcountries.eu/rest/v2/all';

  const [country, setCountryList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(
    () => {
      setLoading(true);

      fetch(url)
        .then((data) => data.json())
        .then(res => {
          setCountryList(res);
          console.log(res);
          setLoading(false);
        })
        .catch(() => {
          setError(true);
          setLoading(false);
        })
    }
    , []);

  if (loading) {
    <div>Loading data from API...</div>
  }

  if (error) {
    <div>Something went wrong...</div>
  }
  return (
    <div>
      <center><h2>Country List</h2></center><hr />
      <ol>
        {
          country.map((item, i) => <li key={item.alpha2Code}>{item.name}</li>)
        }
      </ol>
    </div>

  );
}
