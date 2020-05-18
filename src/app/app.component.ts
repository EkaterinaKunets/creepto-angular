import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  form: FormGroup;
  getCipher: string = 'rot';
  ciphers: string[] = ['rot', 'gronsfeld'];
  action: string;

  ngOnInit() {
    this.form = new FormGroup({
      input: new FormControl('', Validators.required),
      key: new FormControl('', [
        Validators.required,
        Validators.pattern("^[0-9]*$")
      ]),
      cipher: new FormControl(''),
    });
  }

  encrypt() {
    this.action = "encrypt"
  }

  decrypt() {
    this.action = "decrypt"
  }

  onSubmit() {
    if(this.form.valid) {
      console.log('Form: ', this.form);
      const formData = { ...this.form.value };
      console.log('Form Data: ', formData);
      console.log(this.action);
    }
  }
}
