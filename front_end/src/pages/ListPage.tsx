// API
import { fetchData } from '../services/ApiService';

// Ionic / React
import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonItemDivider, } from '@ionic/react';
import { personOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';

// Components
import Footer from '../components/Footer';

// CSS
import './css/Syles.css';

interface Person {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    age: number;
    gender: string;
    address: string;
}

const ListPage: React.FC = () => {
    const toolbar_title = 'PEOPLE LIST';
    const [people, setPeople] = useState<Person[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            fetchData().then((data) => setPeople(data));
        }, 100); // em milisegundos

        return () => clearInterval(interval);
    }, []);


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
                <IonCard className='ion-card-list-people'>
                    {Array.isArray(people) && people.length > 0 ? (
                        people.map((person: Person) => (
                            <div key={person.id}>
                                <IonCardHeader>
                                    <IonCardTitle><IonIcon icon={personOutline} />  {person.first_name} {person.last_name} </IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <p><b>Id:</b> {person.id}</p>
                                    <p><b>Email:</b> {person.email}</p>
                                    <p><b>Age:</b>  {person.age} years old </p>
                                    <p><b>Gender:</b>  {person.gender} </p>
                                    <p><b>Address:</b>  {person.address}</p>
                                </IonCardContent>
                                <IonItemDivider></IonItemDivider>
                            </div>
                        ))
                    ) : (
                        <IonCardHeader>
                            <IonCardTitle>
                                <p>No person found.</p>
                            </IonCardTitle>
                        </IonCardHeader>
                    )}
                </IonCard>
            </IonContent>
            <Footer />
        </IonPage>
    );
};

export default ListPage;
