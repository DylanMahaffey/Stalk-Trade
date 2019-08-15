import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ShellService } from 'src/app/services/shell.service';

@Component({
  selector: 'st-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  constructor(private shellService: ShellService) { }

  ngOnInit() {
  }
}
