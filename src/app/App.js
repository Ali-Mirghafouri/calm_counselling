import "./App.css";
import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import { About, Home, Services, Contact } from "../pages";
import { NAV } from "../constant";
import { images } from "../images";

import * as emailjs from "emailjs-com";
emailjs.init("user_iCfG1P6IsdTrS0CKX21GG");

const SERVICE_ID = "service_mrs88pa"; //get these from the website
const TEMPLATE_ID = "template_yfg55w8";
const USER_ID = "user_7lb3PAGKnyYTi2no5SgHT";

function App() {
	const [message, setMessage] = React.useState("");
	function handleClick() {
		console.log(message);
		var data = {
			to_name: "Jack",
			from_name: "jack@test.com",
			message: message,
			happy: "happy from js",
		};

		emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
			function (response) {
				console.log(response.status, response.text);
			},
			function (err) {
				console.log(err);
			}
		);
	}

	return (
		<Router>
			<div className="app_nav_container">
				<div className="app_img_container">
					<img src={images.logo} alt="calm counselling logo"></img>
				</div>
				<div className="app_nav_options_container">
					{NAV.map((tabName) => (
						<a key={tabName} className="app_nav_option" href={"/" + tabName}>
							{tabName}
						</a>
					))}
				</div>

				<p>
					Enter your message here
					<input onChange={(event) => setMessage(event.target.value)}></input>
					<button type="submit" onClick={handleClick}>
						Send mail
					</button>
				</p>
			</div>
			<Switch>
				<Route exact path="/">
					<Redirect exact from="/" to="/Home" />
				</Route>
				<Route path="/Home">
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/Services">
					<Services />
				</Route>
				<Route path="/Contact">
					<Contact />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
