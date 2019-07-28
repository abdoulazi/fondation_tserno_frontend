import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { CommencerComponent } from './commencer/commencer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { EvaluationComponent } from './evaluation/evaluation.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'groupes', component: CommencerComponent },
  { path: 'groupes/:groupeId', component: EvaluationComponent },
  { path: 'groupes/:groupeId/candidats/:candidatId', component: EvaluationComponent },
  { path: 'groupes/:groupeId/candidats/:candidatId/questions/:questionId', component: EvaluationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
