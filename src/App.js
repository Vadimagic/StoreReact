import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import CardList from "./components/CardList/CardList"

const App = () => {
	return (
		<BrowserRouter>
			<div className="container">
				<Switch>
					<Route path="/cards" exact component={CardList}/>
					<Route path="/card/:id" exact component={CardList}/>
					<Redirect to="/cards" />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
