import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar } from '@ionic/react';
import React from 'react';
import UpcomingShows from './Trip';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TRIPPY</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
         <IonSearchbar/>
        <p>
          If you get lost, the{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps">
            google maps
          </a>{' '}
          will be your guide.
        </p>
        <UpcomingShows> </UpcomingShows>
      </IonContent>
    </IonPage>
  );
};

export default Home;
