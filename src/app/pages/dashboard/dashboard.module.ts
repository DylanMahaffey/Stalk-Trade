import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideModule } from 'ng-click-outside';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ShellComponent } from './shell/shell.component';
import { NavComponent } from './shell/nav/nav.component';
import { HomeComponent } from './home/home.component';
import { MessageBoardComponent } from './message-board/message-board.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendsComponent } from './message-board/friends/friends.component';
import { GroupsComponent } from './message-board/groups/groups.component';
import { TradesComponent } from './message-board/trades/trades.component';
import { ConversationComponent } from './message-board/conversation/conversation.component';
import { FriendsTabComponent } from './friends-tab/friends-tab.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [ShellComponent, NavComponent, HomeComponent, MessageBoardComponent, ProfileComponent, FriendsComponent, GroupsComponent, TradesComponent, ConversationComponent, FriendsTabComponent, NotificationsComponent, UserProfileComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ClickOutsideModule,
    FormsModule
  ]
})
export class DashboardModule { }
