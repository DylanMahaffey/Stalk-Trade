import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendsTabComponent } from './friends-tab/friends-tab.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: ShellComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'trade-manager', loadChildren: './trade-manager/trade-manager.module#TradeManagerModule' },
      { path: 'crop-manager', loadChildren: './crop-manager/crop-manager.module#CropManagerModule' },
      { path: 'profile', component: ProfileComponent },
      { path: 'friends', component: FriendsTabComponent },
      { path: 'view-profile/:id', component: UserProfileComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: '**', redirectTo: ''}
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
