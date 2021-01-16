import { observer } from "mobx-react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import CardList from "./components/CardList/CardList"
import CardInfo from "./components/CradInfo/CardInfo";

const App = () => {
	return (
		<BrowserRouter>
			<div className="container">
				<Switch>
					<Route path="/cards" exact component={CardList}/>
					<Route path="/card/:id" exact component={CardInfo}/>
					<Redirect to="/cards" />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default observer(App);
