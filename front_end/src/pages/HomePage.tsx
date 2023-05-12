// Other imports
import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

// Componentes
import Footer from '../components/Footer';

// Css
import './css/Syles.css';

const HomePage: React.FC = () => {

    const toolbar_title = 'HOME';

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{toolbar_title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard>
                    <img alt="people-Ilustration" src="https://static.vecteezy.com/ti/vetor-gratis/p2/657347-desenho-de-jovens-vetor.jpg" />
                    <IonCardHeader>
                        <IonCardTitle className='card-title-home'>People Crud</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent className='card-content-home'>
                        Simple CRUD with <a href='https://ionicframework.com/' target='_blank' rel="noopener noreferrer">Ionic Framework</a> + <a href='https://react.dev/' target='_blank' rel="noopener noreferrer">React</a>, <a href='https://nodejs.org/en' target='_blank' rel="noopener noreferrer">NodeJS</a> and <a href='https://www.mysql.com/' target='_blank' rel="noopener noreferrer">MySQL</a> Developed by <a href='https://github.com/david-jc-br' target='_blank' rel="noopener noreferrer">David de Jesus Costa</a>

                    </IonCardContent>
                </IonCard>
            </IonContent>
            <Footer />
        </IonPage>
    );
};

export default HomePage;
