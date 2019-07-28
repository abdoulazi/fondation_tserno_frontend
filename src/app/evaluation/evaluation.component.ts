import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
  }

  groupeId = this.router.snapshot.params['groupeId'];
  candidatId = this.router.snapshot.params['candidatId'];
  questionId = this.router.snapshot.params['questionId'];

  afficheGroupe() {
    if(this.groupeId != '') {
      return true;
    }
    return false;
  }

  afficheCandidat() {
    if(typeof this.candidatId !== 'undefined') {
      return true;
    }
    return false;
  }

  afficheQuestion() {
    if(typeof this.questionId !== 'undefined') {
      return true;
    }
    return false;
  }

  ngOnInit() {
  }

}
