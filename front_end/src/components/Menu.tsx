// Css
import './css/Menu.css';

// Icons
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';
import { addCircleSharp, homeSharp, listCircleSharp, reloadCircleSharp, removeCircleSharp, } from 'ionicons/icons';

// Other imports
import { useLocation } from 'react-router-dom';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'HOME',
    url: '/home',
    iosIcon: homeSharp,
    mdIcon: homeSharp
  },
  {
    title: 'ADD',
    url: '/add',
    iosIcon: addCircleSharp,
    mdIcon: addCircleSharp
  },
  {
    title: 'DELETE',
    url: '/delete',
    iosIcon: removeCircleSharp,
    mdIcon: removeCircleSharp
  },
  {
    title: 'UPDATE',
    url: '/update',
    iosIcon: reloadCircleSharp,
    mdIcon: reloadCircleSharp
  },
  {
    title: 'LIST',
    url: '/list',
    iosIcon: listCircleSharp,
    mdIcon: listCircleSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>People</IonListHeader>
          <IonNote>Simple Crud With ionic</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
