import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { CommencerComponent } from './commencer/commencer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { ListCandidatComponent } from './evaluation/list-candidat/list-candidat.component';
import { CoranComponent } from './evaluation/coran/coran.component';
import { ProfileCandidatComponent } from './evaluation/profile-candidat/profile-candidat.component';
import { QuestionsComponent } from './evaluation/questions/questions.component';
import { SaisieDesFautesComponent } from './evaluation/saisie-des-fautes/saisie-des-fautes.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    CommencerComponent,
    AccueilComponent,
    EvaluationComponent,
    ListCandidatComponent,
    CoranComponent,
    ProfileCandidatComponent,
    QuestionsComponent,
    SaisieDesFautesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
