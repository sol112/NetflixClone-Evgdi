import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import "./App.css";
import Banner from "./Components/Banner/Banner";
import requests from "./Utilities/requests";
import Row from "./Components/Row/Row";

function App() {
 

  return (
    <>
 <div>
    <Header />
    <Banner />
	<br />
  <br />
		<Row
			title="NETFLIX ORIGNALS"
			isLargeRow
			fetchUrl={requests.fetchNetflixOriginals}
		/>
		<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
		<Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
		<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
		<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
		<Row title="Horrer Movies" fetchUrl={requests.fetchHorrorMovies} />
		<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
		<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Footer />
      </div>
     
    </>
  )
}

export default App
