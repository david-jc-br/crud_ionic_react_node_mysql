import {IonFooter, IonToolbar} from '@ionic/react';
import './css/Footer.css';

const Footer: React.FC = () => {
    return (
        <IonFooter class='ion-footer'>
            <IonToolbar>
                <p className='footer-text'> <a href='https://linktr.ee/david.jc.br' target = "_blank" rel="noreferrer" className='link'>David J.Costa</a> © 2023 People CRUD</p>
            </IonToolbar>
        </IonFooter>
    );
};

export default Footer;
