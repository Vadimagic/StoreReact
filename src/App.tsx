import { observer } from "mobx-react";
import { FunctionComponent } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import CardList from "./components/CardList/CardList"
import CardInfo from "./components/CardInfo/CardInfo";
import Toasts from "./components/Toasts/Toasts";

const App: FunctionComponent = () => {
	return (
		<BrowserRouter>
			<div className="container">
				<Switch>
					<Route path="/cards" exact component={CardList}/>
					<Route path="/card/:id" exact component={CardInfo}/>
					<Redirect to="/cards" />
				</Switch>
			</div>
			<Toasts />
		</BrowserRouter>
	);
}

export default observer(App);
