import './App.css';
import React, { useEffect, useState } from "react";
import {
    Divider,
    Grid,
    Label, Select,
    Table, TableBody,
    TableCell,
    TableHeader,
    TableHeaderCell,
    TableRow
} from "semantic-ui-react";
import allCitiesJson from './some-indian-city-list.json';

import img from './weather-forecast/dashboard.png';
import * as img01n from './weather-forecast/01n.png';
import * as img02n from './weather-forecast/02n.png';
import * as img03n from './weather-forecast/03n.png';
import * as img04n from './weather-forecast/04n.png';
import * as img09n from './weather-forecast/09n.png';
import * as img10n from './weather-forecast/10n.png';
import * as img11n from './weather-forecast/11n.png';
import * as img13n from './weather-forecast/13n.png';
import * as img50n from './weather-forecast/50n.png';

import * as img01d from './weather-forecast/01d.png';
import * as img02d from './weather-forecast/02d.png';
import * as img03d from './weather-forecast/03d.png';
import * as img04d from './weather-forecast/04d.png';
import * as img09d from './weather-forecast/09d.png';
import * as img10d from './weather-forecast/10d.png';
import * as img11d from './weather-forecast/11d.png';
import * as img13d from './weather-forecast/13d.png';
import * as img50d from './weather-forecast/50d.png';

import moment from "moment";

const App = function () {

  const [lat, setLat] = useState(12.9716);
  const [long, setLong] = useState(77.5946);
  const [location, setLocation] = useState('Bangalore, IN');
  const [locationId, setLocationId] = useState(1277333);
  const [data, setData] = useState([]);
  const [randomCitiesData, setRandomCitiesData] = useState([]);
  const [greet, setGreet] = useState('Good Morning')
  const [cityOptions, setCityOptions] = useState([])

    const days = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
    }



    useEffect(()=> {
        const arr = allCitiesJson.cities
        console.log(arr.length)
        setRandomCitiesData(getMultipleRandom(arr, 10))
        const cityOpts = []
        {randomCitiesData && randomCitiesData.map(city=> {
            const cityOption = { key: city.id, value: city.id, text: city.name }
            cityOpts.push(cityOption)
        })}
        setCityOptions(cityOpts)

    },[])

  useEffect(() => {

      var today = new Date()
      var curHr = today.getHours()

      if (curHr < 12) {
          setGreet('Good Morning')
      } else if (curHr < 18) {
          setGreet('Good Afternoon')
      } else {
          setGreet('Good Evening')
      }



    const fetchData = async () => {
      await fetch(`${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${long}&exclude=current,hourly,minutely,alerts&appid=7f988146f66fa2af6a37732fbfc6ff28`)
          .then(res => res.json())
          .then(result => {
            setData(result)
          });
    }
    fetchData();


  }, [lat,long])

    const getMultipleRandom = (arr, num) => {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }

    const getImage = (imgCode) => {
        switch (imgCode) {
            case '01n':
                return img01n;
            case '02n':
                return img02n;
            case '03n':
                return img03n;
            case '04n':
                return img04n;
            case '09n':
                return img09n;
            case '10n':
                return img10n;
            case '11n':
                return img11n;
            case '13n':
                return img13n;
            case '50n':
                return img50n;

            case '01d':
                return img01d;
            case '02d':
                return img02d;
            case '03d':
                return img03d;
            case '04d':
                return img04d;
            case '09d':
                return img09d;
            case '10d':
                return img10d;
            case '11d':
                return img11d;
            case '13d':
                return img13d;
            case '50d':
                return img50d;
        }
    }


    const cityChange = (event) => {
      setLocationId(event.target.value)
        {randomCitiesData && randomCitiesData.map(city=> {
            if(city.id == event.target.value) {
                setLat(city.coord.lat)
                setLong(city.coord.lon)
                setLocation(city.name+", " + city.country)
            }
        })}
    }

  return (
      <React.Fragment>
          <Grid className="App">

              <Table>
                  <TableRow style={{ border: 'solid 1px' }} >
                      <TableCell width={12} style={{ border: 'solid 1px', margin: '20px 20px 20px 20px', height: '500px', width: '283px', backgroundColor: 'cornflowerblue'}} >
                          {days[moment().day()]}
                          <div>
                              <img src={getImage(data.daily && data.daily[0].weather[0].icon)} style={{width: '100px'}}/>
                          </div>
                          <div>
                              {data.daily && Math.round(data.daily[0].temp.min-273.15)}&#176; | { data.daily && Math.round(data.daily[0].temp.max-273.15)}&#176;
                          </div>
                      </TableCell>
                      <TableCell width={12} style={{ border: 'solid 1px', margin: '20px 20px 20px 20px', height: '500px',width: '84%', backgroundColor:'lightblue'}} >
                          <Grid style={{
                              marginTop: '-214px'
                          }}>
                              <img src={img}/>
                              <Grid style={{marginLeft:'1000px'}}>
                                  <select

                                      id="city-select"
                                      value={locationId}
                                      onChange={cityChange}
                                  >

                                      <option value=""><b>--Select City--</b></option>
                                      {randomCitiesData && randomCitiesData.map(city => (
                                          <option selected value={city.id}>
                                              {city.name}
                                          </option>
                                      ))}
                                  </select>
                              </Grid>

                          </Grid>
                          <Grid style={{marginRight:'1000px'}}>
                              <Grid>
                                  <Label style={{fontSize:'50px'}}>{greet}</Label>
                              </Grid>
                              <Grid >
                                  <Label style={{fontSize:'30px'}}>{location}</Label>
                              </Grid>
                          </Grid>

                      </TableCell>
                  </TableRow>
              </Table>
              <Table style={{margin: '0px 0px 0px 226px'}}>
                  <TableHeader >

                      <TableHeaderCell style={{color:'cornflowerblue', padding: '0px 80px 0px 80px'}}>
                          {days[(moment().day()+1) <= 6 ? moment().day()+1 : moment().day()-6]}
                      </TableHeaderCell>
                      <TableHeaderCell style={{color:'cornflowerblue', padding: '0px 80px 0px 80px'}}>
                          {days[(moment().day()+2) <= 6 ? moment().day()+2 : moment().day()-5]}
                      </TableHeaderCell>
                      <TableHeaderCell style={{color:'cornflowerblue', padding: '0px 80px 0px 80px'}}>
                          {days[(moment().day()+3) <= 6 ? moment().day()+3 : moment().day()-4]}
                      </TableHeaderCell>
                      <TableHeaderCell style={{color:'cornflowerblue', padding: '0px 80px 0px 80px'}}>
                          {days[(moment().day()+4) <= 6 ? moment().day()+4 : moment().day()-3]}
                      </TableHeaderCell>
                      <TableHeaderCell style={{color:'cornflowerblue', padding: '0px 80px 0px 80px'}}>
                          {days[(moment().day()+5) <= 6 ? moment().day()+5 : moment().day()-2]}
                      </TableHeaderCell>
                      <TableHeaderCell style={{color:'cornflowerblue', padding: '0px 80px 0px 80px'}}>
                          {days[(moment().day()+6) <= 6 ? moment().day()+6 : moment().day()-1]}
                      </TableHeaderCell>
                  </TableHeader>
                  <TableBody>
                      <TableRow style={{width:'100%'}}>
                          <TableCell >
                              <div>
                                  <img src={getImage(data.daily && data.daily[1].weather[0].icon)} style={{width: '100px'}}/>
                              </div>
                              <div>
                                  {data.daily && Math.round(data.daily[1].temp.min-273.15)}&#176; | { data.daily && Math.round(data.daily[1].temp.max-273.15)}&#176;
                              </div>
                          </TableCell>
                          <TableCell >
                              <div>
                                  <img src={getImage(data.daily && data.daily[2].weather[0].icon)} style={{width: '100px'}}/>
                              </div>
                              <div>
                                  {data.daily && Math.round(data.daily[2].temp.min-273.15)}&#176; | { data.daily && Math.round(data.daily[2].temp.max-273.15)}&#176;
                              </div>
                          </TableCell>
                          <TableCell >
                              <div>
                                  <img src={getImage(data.daily && data.daily[3].weather[0].icon)} style={{width: '100px'}}/>
                              </div>
                              <div>
                                  {data.daily && Math.round(data.daily[3].temp.min-273.15)}&#176; | { data.daily && Math.round(data.daily[3].temp.max-273.15)}&#176;
                              </div>
                          </TableCell>
                          <TableCell>
                              <div>
                                  <img src={getImage(data.daily && data.daily[4].weather[0].icon)} style={{width: '100px'}}/>
                              </div>
                              <div>
                                  {data.daily && Math.round(data.daily[4].temp.min-273.15)}&#176; | { data.daily && Math.round(data.daily[4].temp.max-273.15)}&#176;
                              </div>
                          </TableCell>
                          <TableCell>
                              <div>
                                  <img src={getImage(data.daily && data.daily[5].weather[0].icon)} style={{width: '100px'}}/>
                              </div>
                              <div>
                                  {data.daily && Math.round(data.daily[5].temp.min-273.15)}&#176; | { data.daily && Math.round(data.daily[5].temp.max-273.15)}&#176;
                              </div>
                          </TableCell>
                          <TableCell>
                              <div>
                                  <img src={getImage(data.daily && data.daily[6].weather[0].icon)} style={{width: '100px'}}/>
                              </div>
                              <div>
                                  {data.daily && Math.round(data.daily[6].temp.min-273.15)}&#176; | { data.daily && Math.round(data.daily[6].temp.max-273.15)}&#176;
                              </div>
                          </TableCell>
                      </TableRow>
                  </TableBody>

              </Table>
          </Grid>
      </React.Fragment>

  );
}

export default App;
