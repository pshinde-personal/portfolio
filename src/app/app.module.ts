import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';

import { ProjectService } from './services/project.service';
import { environment } from '../environments/environment';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { HeadingComponent } from './components/heading/heading.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,    HeadingComponent,
    RoutingComponents,
    NavigationComponent,
    SkillsComponent,

  ],
  imports: [
    BrowserModule, AppRoutingModule, NgbModule, FormsModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [ProjectService, AngularFirestore],
  bootstrap: [AppComponent],
})
export class AppModule {}