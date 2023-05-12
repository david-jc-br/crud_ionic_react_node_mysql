// Other imports
import { IonAlert, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonList, IonMenuButton, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';

// Components 
import Footer from '../components/Footer';

// css
import './css/Syles.css';
import { useState } from 'react';
import { createData } from '../services/ApiService';

const AddPage: React.FC = () => {

    const toolbar_title = 'ADD PERSON';

    const [added, setAdded] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        age: '',
        gender: '',
        address: ''
    });

    function handleInputChange(event: any) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    async function handleSubmit(event: any) {
        event.preventDefault();
        try {
            var response = await createData(formData);
            console.log(response);

            setAdded(true);
            setShowAlert(true);

            setFormData({
                first_name: '',
                last_name: '',
                email: '',
                age: '',
                gender: '',
                address: ''
            });
        } catch (error: any) {
            console.log(formData);
            console.error(error);
            setAdded(true);
            setShowAlert(true);
            setErrorMessage(error.message);
        }
    }

    function handleSelectChange(event: any) {
        const { value } = event.target;
        setFormData({ ...formData, gender: value });
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
                        <IonButton shape="round" className="button-add" onClick={handleSubmit}>
                            Add
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <form onSubmit={handleSubmit}>
                    <IonList>
                        <IonItem>
                            <IonInput label="First Name" placeholder="Enter with first name" type="text" name="first_name" value={formData.first_name} onIonChange={handleInputChange} />
                        </IonItem>

                        <IonItem>
                            <IonInput label="Last Name" placeholder="Enter with last name" type="text" name="last_name" value={formData.last_name} onIonChange={handleInputChange} />
                        </IonItem>

                        <IonItem>
                            <IonInput label="Email" type="email" placeholder="Enter with email" name="email" value={formData.email} onIonChange={handleInputChange} />
                        </IonItem>

                        <IonItem>
                            <IonInput label="Age" placeholder="Enter with age" type="number" min={1} max={100} name="age" value={formData.age} onIonChange={handleInputChange} />
                        </IonItem>

                        <IonItem>
                            <IonSelect label='Gender' onIonChange={handleSelectChange} name="gender" value={formData.gender}>
                                <IonSelectOption value="Male">Male</IonSelectOption>
                                <IonSelectOption value="Female">Female</IonSelectOption>
                            </IonSelect>
                        </IonItem>

                        <IonItem>
                            <IonInput label="Address" placeholder="Enter with address" type="text" name="address" value={formData.address} onIonChange={handleInputChange} />
                        </IonItem>

                    </IonList>
                </form>
            </IonContent>
            <Footer />
            <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}
                header={added ? 'Success' : 'Error'}
                message={added ? 'Person added successfully!' : errorMessage || 'Error added person!'}
                buttons={['OK']}
            />
        </IonPage>
    );
};

export default AddPage;
