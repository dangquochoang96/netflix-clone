import React from 'react'
import requests from './request'
import './App.css';
import Row from './Components/Row'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row title="NETFLIX Phim Gốc" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Phim Thịnh Hành" fetchUrl={requests.fetchTrending} />
      <Row title="Phim Đánh Giá Cao" fetchUrl={requests.fetchTopRated} />
      <Row title="Phim Hành Động" fetchUrl={requests.fetchActionMovies} />
      <Row title="Phim Hài" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Phim Kinh Dị" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Phim Tình Cảm" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Phim Tài Liệu" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
