fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data=>country(data));

function country(data){
    const countryName = data;
   for (let i = 0; i < countryName.length; i++) {
       const element = countryName[i];
      const mainDiv = document.getElementById('country-list');
      const division = document.createElement('div');
      division.className ='country';
    //   const h3 = document.createElement('h3');
    //   h3.innerText = element.name;
    //  const p = document.createElement('p');
    //  p.innerText = element.capital;
    //  division.appendChild(h3);
    //  division.appendChild(p);
    const countryList =`
    <h3>${element.name}</h3>
    <p>${element.capital}</p>
    <h2>${element.population}</h2>
    <button onclick="displayDetails('${element.name}')"> Click For details </button>
    `
    division.innerHTML = countryList;
     mainDiv.appendChild(division);
      }
    }
    const displayDetails = name=>{
      const url =`https://restcountries.eu/rest/v2/name/${name}`
      fetch(url)
      .then(res=>res.json())
      .then(data =>countryInfo(data[0]));
    }
    const countryInfo = country =>{
      const countryDiv = document.getElementById('country-details');
      countryDiv.innerHTML =`
      <h1>${country.name}</h1>
      <h1>${country.capital}</h1>
      <img src='${country.flag}'>
      `
    }
       
