import { Component, OnInit } from '@angular/core';

import { Project } from '../project'

@Component({
  moduleId: module.id,
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  languages = [
    'english',
    'simplechinse',
    'traditionalchinse',
    'korean',
    'javapanse'
  ]

  model:Project = new Project(
    '123456',
    'SAP project',
    this.languages[0],
    this.languages[1],
    1000,
    "this is project of SAP"
  )

  submitted = false;


  constructor() { }

  ngOnInit() {
  }
  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }
  

}
