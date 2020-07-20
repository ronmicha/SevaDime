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
import { calculator, cashOutline, trendingUp } from "ionicons/icons";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import { mockExpenses, mockIncomes } from "./mockData";
import Activity from "./pages/Activity";
import Personal from "./pages/Tab2";
import Insights from "./pages/Tab3";
/* Theme variables */
import "./theme/variables.css";

enum PagePath {
  Activity = "/activity",
  Personal = "/personal",
  Insights = "/insights"
}

const App: React.FC = () => (
   <IonApp>
      <IonReactRouter>
         <IonTabs>
            <IonRouterOutlet>
               <Route path={PagePath.Personal} component={Personal} exact={true} />
               <Route
                  path={PagePath.Activity}
                  component={(): JSX.Element => <Activity expenses={mockExpenses} incomes={mockIncomes} />}
                  exact={true}
               />
               <Route path={PagePath.Insights} component={Insights} />
               <Route path="/" render={(): JSX.Element => <Redirect to={PagePath.Activity} />} exact={true} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
               <IonTabButton tab="personal" href={PagePath.Personal}>
                  <IonIcon icon={cashOutline} />
                  <IonLabel>Personal</IonLabel>
               </IonTabButton>
               <IonTabButton tab="activity" href={PagePath.Activity}>
                  <IonIcon icon={calculator} />
                  <IonLabel>Activity</IonLabel>
               </IonTabButton>
               <IonTabButton tab="insights" href={PagePath.Insights}>
                  <IonIcon icon={trendingUp} />
                  <IonLabel>Insights</IonLabel>
               </IonTabButton>
            </IonTabBar>
         </IonTabs>
      </IonReactRouter>
   </IonApp>
);

export default App;
