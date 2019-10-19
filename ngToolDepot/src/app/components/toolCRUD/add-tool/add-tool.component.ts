import { ToolComponent } from './../../tool/tool.component';
import { log } from 'util';
import { Tool } from './../../../models/tool';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-tool',
  templateUrl: './add-tool.component.html',
  styleUrls: ['./add-tool.component.scss']
})
export class AddToolComponent implements OnInit {
  newTool: Tool = new Tool();
  constructor(private toolComp: ToolComponent) { }

  ngOnInit() {
  }

  addTool(form: NgForm) {
    console.log(form.value)
    this.newTool = form.value;
    this.toolComp.addTool(form);
    location.reload();
  }
}
