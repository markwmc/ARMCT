import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useHistory } from 'react-router-dom'
import './Home.css';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h1>Asteroid API</h1>
        <IonButton expand="block" onClick={() => history.push('/data')}>
          View Data
          </IonButton>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
