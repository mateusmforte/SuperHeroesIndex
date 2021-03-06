import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { Store, Persistor } from "./Store/index";
import { PersistGate } from "redux-persist/integration/react";
import * as serviceWorker from "./serviceWorker";
//import {saveState} from './Store/localStorage';

ReactDOM.render(
	<Provider store={Store}>
		<PersistGate loading={null} persistor={Persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
