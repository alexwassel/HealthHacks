import React, { Component, createContext } from "react";
import { auth, generateUserDocument } from "../firebase";
import { navigate } from "@reach/router";
import setBackgroundColor from "../utils/setBackground";
import * as colors from "../colors";

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
	state = {
		user: null,
	};

	componentDidMount = async () => {
		auth.onAuthStateChanged(async (userAuth) => {
			const user = await generateUserDocument(userAuth);
			this.setState({ user });
			if (window.location.pathname.substring(1) === "signIn" && user) {
				if (window.location.search.substring(1).trim().length === 0) {
					setBackgroundColor(colors.ORG_COLOR);
					await navigate("/leaderboard");
				} else {
					await navigate(
						window.location.search.substring(
							window.location.search.indexOf("=") + 1,
						),
					);
				}
			} else if (window.location.pathname.substring(1) === "signOut" && !user) {
				window.location.href = "./";
			}
		});
	};

	render() {
		const { user } = this.state;

		return (
			<UserContext.Provider value={user}>
				{this.props.children}
			</UserContext.Provider>
		);
	}
}

export default UserProvider;
