import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {

  // tools: Tool[] = [];
  // newTool: Tool = new Tool();
  // selected: Tool = null;

  // constructor(private toolService: ToolService) { }

  ngOnInit() {
  }

  //   addTool(form: NgForm) {
  //   this.toolService.create(this.newTool).subscribe(
  //     data => {
  //       this.newTool = new Tool();
  //       form.reset();
  //       this.reload();
  //     },
  //     err => console.error('Error in ToolComponent.addTool(): ' + err)
  //   );
  // }

  // updateTool(tool: Tool) {
  //   this.toolService.update(tool).subscribe(
  //     data => {
  //       this.reload();
  //       this.selected = null;
  //     },
  //     err => console.error('Error in ToolComponent.updateTool(): ' + err)
  //   );
  // }

  // deleteTool(id: number) {
  //   this.toolService.destroy(id).subscribe(
  //     data => {
  //       this.reload();
  //     },
  //     err => {
  //       console.error('Error in Error in ToolComponent.deleteTool():');
  //       console.error(err);
  //     }
  //   );
  // }

  // reload() {
  //   this.toolService.index().subscribe(
  //     data => {
  //       this.tools = data;
  //       if (this.urlToolId) {
  //         this.selected = this.tools[parseInt(this.urlToolId, 10) - 1];
  //         this.urlToolId = '';
  //       }
  //     },
  //     err => {
  //       console.error('Error in ToolComponent.reload');
  //       console.error(err);
  //     }
  //   );
  // }

}
