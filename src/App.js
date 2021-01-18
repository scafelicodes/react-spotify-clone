import "./App.scss";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MusicControl from "./components/MusicControl";

import Home from "./components/Home";
import Search from "./components/Search";
import Library from "./components/Library";

import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Navbar />
			<SearchBar />
			<div className="Pages">
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/search" exact>
						<Search />
					</Route>
					<Route path="/library" exact>
						<Library />
					</Route>
				</Switch>
			</div>
			<MusicControl />
		</div>
	);
}

export default App;
