import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from '../src/components/Menu';
import DriftPage from '../src/components/DriftPage';
import HomePage from '../src/components/HomePage';
import ForzaPage from '../src/components/ForzaPage';
import TimeAttackPage from '../src/components/TimeAttackPage';

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Switch>
            <Route path="/forza" component={ForzaPage} />
            <Route path="/timeattack" component={TimeAttackPage} />
            <Route path="/drift" component={DriftPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}