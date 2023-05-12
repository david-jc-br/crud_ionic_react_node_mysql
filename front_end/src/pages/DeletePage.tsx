// Ionic | React 
import { IonAlert, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';

//API
import { deleteData } from '../services/ApiService';

// Components 
import Footer from '../components/Footer';

// Css

import "./css/Syles.css"


const DeletePage: React.FC = () => {
    const toolbar_title = 'DELETE PERSON';

    const [personId, setPersonId] = useState('');
    const [deleted, setDeleted] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    function handlePersonIdChange(event: any) {
        setPersonId(event.target.value);
    }

    async function handleDeleteClick() {
        try {
            await deleteData(parseInt(personId));
            setDeleted(true);
            setShowAlert(true);
        } catch (error: any) {
            setDeleted(false);
            setShowAlert(true);
            setErrorMessage(error.message);
        }
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{toolbar_title}</IonTitle>
                    <IonButtons slot="end">
                        <IonButton shape="round" className="button-delete" onClick={handleDeleteClick}>
                            Delete
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonList>
                    <IonItem>
                        <IonInput
                            label="Id"
                            placeholder="Enter the Person's Id"
                            value={personId}
                            onIonChange={handlePersonIdChange} min={0} max={3000}
                        />
                    </IonItem>
                </IonList>

                <IonAlert
                    isOpen={showAlert}
                    onDidDismiss={() => setShowAlert(false)}
                    header={deleted ? 'Success' : 'Error'}
                    message={deleted ? 'Person deleted successfully!' : errorMessage || 'Error deleting person!'}
                    buttons={['OK']}
                />
            </IonContent>
            <Footer />
        </IonPage>
    );
};

export default DeletePage;
