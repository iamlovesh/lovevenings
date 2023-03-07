import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'lv-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contact = new FormGroup({
    name: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl(''),
    occasion: new FormControl(''),
    address: new FormControl(''),
  });
  constructor(private api: AppService) {}
  ngOnInit(): void {}
  onSubmit() {
    this.api.contact(this.contact.value).subscribe((res: any) => {
      console.log(res);
    });
  }
}
