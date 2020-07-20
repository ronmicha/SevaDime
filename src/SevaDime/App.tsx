import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/typography.css";
import { calculator, ellipse, square } from "ionicons/icons";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import { mockExpenses, mockIncomes } from "./mockData";
import Activity from "./pages/Activity";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";
/* Theme variables */
import "./theme/variables.css";


enum PagePath {
  Activity = "/activity",
  Tab2 = "/tab2",
  Tab3 = "/tab3"
}

const App: React.FC = () => (
   <IonApp>
      <IonReactRouter>
         <IonTabs>
            <IonRouterOutlet>
               <Route
                  path={PagePath.Activity}
                  component={(): JSX.Element => <Activity expenses={mockExpenses} incomes={mockIncomes} />}
                  exact={true}
               />
               <Route path={PagePath.Tab2} component={Tab2} exact={true} />
               <Route path={PagePath.Tab3} component={Tab3} />
               <Route path="/" render={(): JSX.Element => <Redirect to={PagePath.Activity} />} exact={true} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
               <IonTabButton tab="tab1" href={PagePath.Activity}>
                  <IonIcon icon={calculator} />
                  <IonLabel>Activity</IonLabel>
               </IonTabButton>
               <IonTabButton tab="tab2" href={PagePath.Tab2}>
                  <IonIcon icon={ellipse} />
                  <IonLabel>Tab 2</IonLabel>
               </IonTabButton>
               <IonTabButton tab="tab3" href={PagePath.Tab3}>
                  <IonIcon icon={square} />
                  <IonLabel>Tab 3</IonLabel>
               </IonTabButton>
            </IonTabBar>
         </IonTabs>
      </IonReactRouter>
   </IonApp>
);

export default App;
