import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';


interface Project {
  // value:string;
  viewValue: string;
}

interface ProjectGroup {
  disabled?: boolean;
  name: string;
  project: Project[];
}
@Component({
  selector: 'app-timetracker',
  templateUrl: './timetracker.component.html',
  styleUrls: ['./timetracker.component.css']
})

export class TimetrackerComponent implements OnInit {

  filterText: string = ""; // form name

  @ViewChild('mySelect') mySelect: any;

  // div2:any = false;
  selectValue: any = [];
  constructor(public dialog: Dialog) { }

  registerForm:any;//form name

  ngOnInit(): void {
    this.registerForm=new FormGroup({
      "Startdate":new FormControl(null,[Validators.required, Validators.pattern('^[0-9]{10}$')]),
      "Lastdate":new FormControl(null),
    });
  }

  //submit form

  submitData(){    
    console.log(this.registerForm.value);
  }

  //key down validation
  validateNumber(event:any) {
    const keyCode = event.keyCode;
    const excludedKeys = [8, 37, 39, 46];
    if (!((keyCode >= 48 && keyCode <= 57) ||
      (keyCode >= 96 && keyCode <= 105) ||
      (excludedKeys.includes(keyCode)))) {
      event.preventDefault();
    }
  }

  handleHoursType() {
    this.mySelect.open();
  }
  // filteredVariables: any

  projectControl = new FormControl('');

  // projectGroups: ProjectGroup[] = [{
  //   name: 'Appwrk Training',
  //   project: [
  //     { viewValue: 'Aditing' },
  //     { viewValue: 'Casual Leaves' },
  //     { viewValue: 'Client Follow-Up' },
  //   ],
  // },
  // {
  //   name: 'Client',
  //   project: [
  //     { viewValue: 'paid' },
  //     { viewValue: 'pay' },
  //   ]
  // },
  // ];

  projects = [{
    name: 'Clockify',
    tasks: [
      { name: 'Coding' }, { name: 'Team Meeting' }
    ]
  },
  {
    name: 'Nemesis',
    tasks: [
      { name: 'Team Discussion' }, { name: 'Client Call' }
    ]
    
  }];

  //   DialogOpener() {
  //     this.div2 = !this.div2;
  //   }
}