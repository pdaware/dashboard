import { Routes } from '@angular/router';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardChatComponent } from './dashboard-chat/dashboard-chat.component';
import { DashboardResourcesComponent } from './dashboard-resources/dashboard-resources.component';
import { DashboardLearningPathComponent } from './dashboard-learning-path/dashboard-learning-path.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardClassesComponent } from './dashboard-classes/dashboard-classes.component';
import { LoginComponent } from './login/login.component';
import { authGardGuard } from '../../utlity/guards/auth.guard.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard', component: MainWrapperComponent, canActivate: [authGardGuard], children: [
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            {
                path: 'home', component: DashboardHomeComponent
            },
            {
                path: 'classes', component: DashboardClassesComponent
            },
            {
                path: 'resources', component: DashboardResourcesComponent
            },
            {
                path: 'learning-plan', component: DashboardLearningPathComponent
            },
            {
                path: 'chat', component: DashboardChatComponent
            },
            {
                path: 'settings', component: SettingsComponent
            },
        ]
    }
];
