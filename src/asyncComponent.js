import React, { useState } from "react";

const DomainSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.openbrewerydb.org/breweries?by_city=${query}&per_page=10`
      );
      if (response.ok) {
        const data = await response.json();
        setResults(data || []); // Updated here
        setError(null);
      } else {
        setError("Failed to fetch data");
      }
    } catch (error) {
      setError("Error fetching data");
    }
  };

  return (
    <div className="">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter city"
        className="form-control"
      />
      <div className="mx-auto my-2 d-flex">
        <button onClick={handleSearch} className="btn btn-primary ">
          Search
        </button>
      </div>
      {error && <p>{error}</p>}
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>id</th>
              <th>
                <td>Nome</td>
              </th>
              <th>
                <td>Sito</td>
              </th>
            </tr>
          </thead>
          <tbody>
            {results.map((beer, index) => (
              <tr key={index}>
                <td> {index + 1}</td>
                <td> {beer.name}</td>
                <td> {beer.website_url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DomainSearch;
