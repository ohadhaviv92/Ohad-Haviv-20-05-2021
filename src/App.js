

import Favorites from './Favorites';
import Main from './Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Menu from './Menu'

function App() {
    return (
        <Router>
            <Menu />
            <Switch>
                <Route path='/favorites' component={Favorites} exact />
                <Route path='/' component={Main} exact />
            </Switch>
        </Router>
    )

}

export default App
