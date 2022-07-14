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

const WeatherReport = function (data) {

    const days = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
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

  return (
      <React.Fragment>
          <Grid className="App">
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

export default WeatherReport;
