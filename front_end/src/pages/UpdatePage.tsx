// Ionic
import { IonAlert, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonList, IonMenuButton, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';

// Components
import Footer from '../components/Footer';

// Css
import './css/Syles.css';
import { useState, useEffect } from 'react';

//API
import { updateData } from '../services/ApiService';

interface PersonData {
    id?: number;
    first_name: string;
    last_name: string;
    email: string;
    age: number;
    gender: string;
    address: string;
}

const UpdatePage: React.FC = () => {

    const toolbar_title = 'UPADATE PERSON';
    const [updated, setUpdated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const [formData, setFormData] = useState<PersonData>({
        first_name: '',
        last_name: '',
        email: '',
        age: 0,
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
            var response = await updateData(formData.id as number, formData);
            console.log(response);
            setUpdated(true);
            setShowAlert(true);
        } catch (error: any) {
            console.log(formData);
            console.error(error);
            setUpdated(true);
            setShowAlert(true);
            setErrorMessage(error.message);
        }
    }

    useEffect(() => {
        // Pega o ID da pessoa que foi passado na URL
        const url = window.location.href;
        const id = Number(url.substring(url.lastIndexOf('/') + 1));
        // Chama a API para pegar os dados da pessoa com o ID correspondente
        // e atualiza o estado com esses dados
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:8000/api/person/${id}`);
                const data = await response.json();
                setFormData({ ...data, id: data.id ?? undefined });
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

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
                        <IonButton type="submit" shape="round" className="button-update" onClick={handleSubmit}>
                            Update
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <form onSubmit={handleSubmit}>
                    <IonList>
                        <IonItem>
                            <IonInput label="Id" placeholder="Enter with new person's id" type="number" name="id" value={formData.id} min={0} max={3000} onIonChange={handleInputChange} />
                        </IonItem>

                        <IonItem>
                            <IonInput label="First Name" placeholder="Enter with new first name" type="text" name="first_name" value={formData.first_name} onIonChange={handleInputChange} min={0} max={50} />
                        </IonItem>

                        <IonItem>
                            <IonInput label="Last Name" placeholder="Enter with new last name" type="text" name="last_name" value={formData.last_name} onIonChange={handleInputChange} min={0} max={50} />
                        </IonItem>

                        <IonItem>
                            <IonInput label="Email" type="email" placeholder="Enter with new email" name="email" value={formData.email} onIonChange={handleInputChange} min={0} max={100} />
                        </IonItem>

                        <IonItem>
                            <IonInput label="Age" placeholder="Enter with new age" type="number" name="age" value={formData.age} onIonChange={handleInputChange} min={0} max={100} />

                        </IonItem>

                        <IonItem>
                            <IonInput label="Address" placeholder="Enter with new address" type="text" name="address" value={formData.address} onIonChange={handleInputChange} min={0} max={200} />

                        </IonItem>

                        <IonItem>
                            <IonSelect label='Gender' onIonChange={handleSelectChange} name="gender" value={formData.gender}>
                                <IonSelectOption value="Male">Male</IonSelectOption>
                                <IonSelectOption value="Female">Female</IonSelectOption>
                            </IonSelect>
                        </IonItem>

                    </IonList>
                </form>
            </IonContent>
            <Footer />
            <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}
                header={updated ? 'Success' : 'Error'}
                message={updated ? 'Person updated successfully!' : errorMessage || 'Error updating person!'}
                buttons={['OK']}
            />
        </IonPage>
    );

}

export default UpdatePage;
