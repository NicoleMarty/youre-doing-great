import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Trip from './Trip';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>You're Doing Great!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        Take a trip.
        <p>
          If you get lost, the{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps">
            google maps
          </a>{' '}
          will be your guide.
        </p>
        <Trip> </Trip>
      </IonContent>
    </IonPage>
  );
};

export default Home;
