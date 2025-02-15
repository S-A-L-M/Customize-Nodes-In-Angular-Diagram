import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiagramModule, SymbolPaletteModule } from '@syncfusion/ej2-angular-diagrams'; 
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule, ChipListModule, FabModule, SpeedDialModule } from '@syncfusion/ej2-angular-buttons';
import { ColorPickerModule } from '@syncfusion/ej2-angular-inputs';

@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    DiagramModule,
    SymbolPaletteModule,
    SidebarModule,
    ListViewModule,
    ChipListModule,
    SwitchModule,
    RadioButtonModule,
    CheckBoxModule,
    ButtonModule,
    FabModule,
    SpeedDialModule,
    ColorPickerModule
    
  ],
  exports: [
    SidebarModule,
    DiagramModule,
    ListViewModule,
    ChipListModule,
    SwitchModule,
    RadioButtonModule,
    CheckBoxModule,
    ButtonModule,
    FabModule,
    SpeedDialModule,
    SymbolPaletteModule,
    ColorPickerModule
  ]
})
export class SharedModule { }
