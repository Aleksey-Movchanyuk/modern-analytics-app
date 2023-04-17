import { Component, OnInit } from '@angular/core';

import { EchoService } from '@app/services/echo.service';

@Component({
  selector: 'core-protected',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  messageFromBackend: string = "";

  constructor(
    private echoService: EchoService
  ) { }

  ngOnInit(): void {
    this.echoService.echo().subscribe(result => {
      this.messageFromBackend = result['message'];
    })
  }

}