import { NgModule } from '@angular/core';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ChatPanelComponent } from './components/chat-panel/chat-panel.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../modules/material-module';
import { AppRoutingModule } from '../modules/app-routing.module';
import { LayoutPipe } from './layout.pipe';

@NgModule({
  declarations:[
    ToolbarComponent, 
    SidenavComponent, 
    ChatPanelComponent,
    FooterComponent,
    LayoutPipe
  ],
  exports: [
    ToolbarComponent, 
    SidenavComponent, 
    ChatPanelComponent,
    FooterComponent
  ],
  imports:[
    MaterialModule,
    AppRoutingModule
  ]
})
export class LayoutModule { }
