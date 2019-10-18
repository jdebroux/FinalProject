import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ToolService } from 'src/app/services/tool.service';
import { Tool } from 'src/app/models/tool';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent implements OnInit {
  editTool = null;
  selected = null;
  showComplete = false;
  urlToolId: string;
  tools: Tool[] = [];

  newTool = new Tool();

  constructor(private toolService: ToolService,
              private datePipe: DatePipe,
              private currentRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.urlToolId = this.getCommandLineParameter();
    this.reloadTools();
  }

  getCommandLineParameter(): string {
    let idString = '';
    if (this.currentRoute.snapshot.paramMap.get('id')) {
      idString =  this.currentRoute.snapshot.paramMap.get('id');
    }
    return idString;
  }

  showTotalTools(): number {
    const total = this.tools.length;
    return total;
  }

  displayTool(tool: Tool) {
    this.selected = tool;
  }

  displayTable() {
    this.selected = null;
  }

  switchCompleted(id: number, tool: Tool) {
    if (tool.available === true) {
      tool.available = false;
    } else if (tool.available === false) {
      tool.available = true;
    }
    this.updateTool(id, tool);
  }

  addTool(form: NgForm) {
    this.newTool = new Tool();

    // TODO need logic entered here.

    this.toolService.create(this.newTool).subscribe(
      () => {
        this.reloadTools();
      },
      err => {
        console.error('toolComponent - addTool()');
        console.error(err);
      }
    );
    form.reset();
  }

  setEditTool() {
    this.editTool = Object.assign({}, this.selected);
  }

  cancelEditTool() {
    this.editTool = null;
  }

  updateTool(id: number, editedTool: Tool) {

    // TODO logic needs to be entered here

    this.toolService.update(id, editedTool).subscribe(
      () => {
        this.reloadTools();
      },
      err => {
        console.error('toolComponent - updateTool()');
        console.error(err);
      }
    );
    this.editTool = null;
    this.selected = null;
  }

  deleteTool(id: number) {
    this.toolService.destroy(id).subscribe(
      () => {
        this.reloadTools();
      },
      err => {
        console.error('toolComponent - deleteTool()');
        console.error(err);
      }
    );
    this.reloadTools();
  }

  reloadTools() {
    this.toolService.index().subscribe(
      lifeIsGood => {
        this.tools = lifeIsGood;
        if (this.urlToolId) {
          this.selected = this.tools.find((data => data.id === Number(this.urlToolId)));
          if (!this.selected) {
            this.router.navigateByUrl('**');
          }
        }
      },
      lifeIsBad => {
        console.error('Error in ToolComponent.reloadTools()');
        console.error(lifeIsBad);
      }
    );
  }


  // TODO we dont need this but could utilize in a different way.
  // checkTotalTools(): string {
  //   let classColor = '';
  //   if (this.showTotalTools() >= 10) {
  //     classColor = 'badge badge-pill badge-danger';
  //   } else if (this.showTotalTools() >= 5) {
  //     classColor = 'badge badge-pill badge-warning';
  //   } else if (this.showTotalTools() < 5) {
  //     classColor = 'badge badge-pill badge-success';
  //   }
  //   return classColor;
  // }
}