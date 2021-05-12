import styles from "./App.module.css"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Sidebar from "./Sidebar.js"
import HomeFeed from "./pages/feed/HomeFeed.js"
import Messages from "./pages/messages/Messages.js"
import Profile from "./pages/profile/Profile.js"
import Group from "./pages/group/Group.js"
import Settings from "./pages/settings/Settings.js"


export default function App() {
   return (
        <Router>
            <div className={styles.app}>
                <Sidebar />
                <div className={styles.page}>
                    <Switch>
                        <Route exact path="/" component={HomeFeed} />
                        <Route path="/messages" component={Messages} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/group" component={Group} />
                        <Route path="/settings" component={Settings} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}
