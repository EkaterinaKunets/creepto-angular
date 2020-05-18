import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getResponse } from './app.service';
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  form: FormGroup;
  ciphers: string[] = ['rot', 'gronsfeld'];
  action: string;
  cipher: string;
  key: number;
  text: string;

  constructor(private getResponse: getResponse) {}

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
    if (this.form.valid) {
      const formData = { ...this.form.value };
      this.cipher = formData.cipher;
      this.key = formData.key;
      this.text = formData.input;
      this.getResponse.returnAnswer(this.cipher, this.key, this.text, this.action).pipe(
        tap(x => {console.log(x)})
      ).subscribe()
    }
  }
}
