// Other imports 
import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

// Components
import Menu from './components/Menu';

// Pages 
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import DeletePage from './pages/DeletePage';
import UpdatePage from './pages/UpdatePage';
import ListPage from './pages/ListPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/" />
            </Route>
            <Route path="/" exact={true}>
              <HomePage />
            </Route>
            <Route path="/add" exact={true}>
              <AddPage />
            </Route>
            <Route path="/delete" exact={true}>
              <DeletePage />
            </Route>
            <Route path="/update" exact={true}>
              <UpdatePage />
            </Route>
            <Route path="/list" exact={true}>
              <ListPage />
            </Route>
          </IonRouterOutlet>
          
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
