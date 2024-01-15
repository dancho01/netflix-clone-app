import React from 'react'
import Main from '../components/Main'
import { Row } from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <div>
        <Main/>
        <Row id='1' title='Upcoming' fetchUrl={requests.requestUpcoming} />
        <Row id='2' title='Popular' fetchUrl={requests.requestPopular} />
        <Row id='3' title='Trending' fetchUrl={requests.requestTrending} />
        <Row id='4' title='Top Rated' fetchUrl={requests.requestTopRated} />
        <Row id='5' title='Horror' fetchUrl={requests.requestHorror} />
    </div>
  )
}

export default Home