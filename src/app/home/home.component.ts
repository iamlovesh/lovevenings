import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'lv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private api: AppService) {}
  ngOnInit(): void {
    this.api.getData().subscribe((res: any) => {
      console.log(res);
    });
  }
}
