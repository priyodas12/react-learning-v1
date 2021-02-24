import React, { useState, useEffect } from 'react'
import './CountryList.css'

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
    <div >
      <center><h2>Country  Flags</h2></center><hr />
      <ol>
        {
          country.map((item, i) =>
            <div key={item.name} className="countryList">
              <h3>{item.name}</h3>
              <img src={item.flag} alt={item.alpha2Code} ></img>
            </div>

          )
        }
      </ol>
    </div>

  );
}
