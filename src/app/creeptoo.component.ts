import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { apiResponse } from './creeptoo.service';
import { CreeptooInterface } from './creeptoo.interface';

@Component({
  selector: 'app-creeptoo',
  templateUrl: './creeptoo.component.html',
  styleUrls: ['./creeptoo.component.scss']
})

export class CreeptooComponent implements OnInit {
  form: FormGroup;
  ciphers: string[] = ['rot', 'gronsfeld'];
  action: string;
  cipher: string;
  key: number;
  text: string;
  response: CreeptooInterface;

  constructor(private apiResponse: apiResponse) {}

  ngOnInit() {
    this.form = new FormGroup({
      input: new FormControl('', Validators.required),
      key: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]),
      cipher: new FormControl('', Validators.required),
    });
  }

  encrypt() {
    this.action = 'encrypt';
  }

  decrypt() {
    this.action = 'decrypt';
  }

  another() {
    this.form.reset();
    Object.keys(this.form.controls).forEach(key => {
      this.form.get(key).setErrors(null);
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = { ...this.form.value };
      this.cipher = formData.cipher;
      this.key = formData.key;
      this.text = formData.input;
      this.apiResponse.returnAnswer(this.cipher, this.key, this.text, this.action).subscribe(
        response => {
          this.response = response.result;
        }
      );
    }
  }
}
