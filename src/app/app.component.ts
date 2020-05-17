import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  form: FormGroup;
  getCipher: string;
  chipers: string[] = ['rot', 'gronsfeld'];

    ngOnInit() {
    this.form = new FormGroup({
      input: new FormControl('', Validators.required),
      key: new FormControl('', Validators.required),
    });
  }

  encrypt() {

  }

  decrypt() {

  }

  onSubmit() {

  }
}
