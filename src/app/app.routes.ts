import { Routes } from '@angular/router';
import { LoginComponent } from './login-register/login.component';
import { TopbarComponent } from './topbar-Home/topbar.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { TabComponent } from './edit-content/tab/tab.component';
import { AddQuestComponent } from './edit-content/tab/add-quest/add-quest.component';
import { FeedbackComponent } from './edit-content/tab/feedback/feedback.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: '', component: TopbarComponent},
    { path: 'questionnaire', component: QuestionnaireComponent},
    { path: 'edit', component: TabComponent,
      children:[
        { path: 'add', component: AddQuestComponent},
        { path: 'feedbook', component: FeedbackComponent },
      ]
    }
]
