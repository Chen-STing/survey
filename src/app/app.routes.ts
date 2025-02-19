import { Routes } from '@angular/router';
import { LoginComponent } from './login-register/login.component';
import { TopbarComponent } from './topbar-Home/topbar.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ContentManagementComponent } from './content-management/content-management.component';
import { EditContentComponent } from './content-management/edit-content/edit-content.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: '', component: TopbarComponent},
    { path: 'questionnaire', component: QuestionnaireComponent},
    { path: 'management', component: ContentManagementComponent,
      children:[
        // { path: 'myquestionnaire', component: },
        { path: 'edit', component: EditContentComponent },
      ]
    }
]
