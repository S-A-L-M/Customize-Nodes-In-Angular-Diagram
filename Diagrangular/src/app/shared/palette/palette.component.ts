import { Component, ViewChild } from '@angular/core';
import { ConnectorModel, DiagramComponent, NodeModel, PaletteModel, PointPortModel, SymbolPreviewModel, PortConstraints, PortVisibility, ImageModel } from '@syncfusion/ej2-angular-diagrams';
import { SharedModule } from '../shared.module';



@Component({
  selector: 'app-palette',
  imports: [SharedModule],
  templateUrl: './palette.component.html',
  styleUrl: './palette.component.scss'
})
export class PaletteComponent {
  @ViewChild('diagram') diagramObj !: DiagramComponent;

  public symbolPreviewSettings: SymbolPreviewModel = {
    height: 250,
    width: 250,
    offset: {
      x: 0.5,
      y: 0.5
    }

  }

  

  public portSettings: PointPortModel[] = [
    { id: 'port1', offset: {x:0, y:0}, visibility:PortVisibility.Visible,
      horizontalAlignment: 'Right',
      verticalAlignment: 'Bottom', style: {fill: 'Orange', strokeWidth: 2}, height: 15, width: 15,
      shape: 'Custom',
      pathData: 'M540.3643,137.9336L546.7973,159.7016L570.3633,159.7296L550.7723,171.9366L558.9053,194.9966L540.3643,179.4996L521.8223,194.9966L529.9553,171.9366L510.3633,159.7296L533.9313,159.7016L540.3643,137.9336z',
    },
     {
      id: 'port4',
      offset: {x:1, y:0.5},
      visibility: PortVisibility.Visible,
      constraints: PortConstraints.Draw | PortConstraints.Default
    },
    {
      id: 'port5',
      offset: {x:0, y:0.5},
      visibility: PortVisibility.Visible
    },

  ];

  paletteModeSettings = {
    paletteMode: 'Accordion'
  };

  public historiaShape: ImageModel = {
    type: 'Image',
    source: '/img/historiacuc.png', // Ruta de la imagen
    scale: 'Meet' // Ajusta la imagen al tamaño del nodo
  };

  public annotationStyle = {
    color: 'white', // Texto blanco
    fontWeight: 'bold', // Texto en negrita
    fontSize: 14 // Tamaño de la fuente (opcional)
  };
  
  // Estilo del nodo central
  public centralNodeStyle = { fill: '#d52f1b', strokeColor: '#333', strokeWidth: 2 };

  // Estilo de los nodos secundarios
  public secondaryNodeStyle = { fill: '#ee7e71', strokeColor: '#333', strokeWidth: 2 };

  public tertiaryNodeStyle = { fill: '#FFD700', strokeColor: '#333', strokeWidth: 2 }; 

  public cuartiaryNodeStyle = { fill: '#FFD800', strokeColor: '#333', strokeWidth: 2 }; 
  
  public paletteExpandingAction(args: any){
    if(args.palette.id === 'flow') {
      args.cancel = true;
    }
  }
  public symbolPalette: PaletteModel[] = [
    {
     id: 'basic',
     expanded: false,
      symbols: this.getBasicShapes(),
      title: 'Basic Shapes'
    },
    {
      id: 'flow',
      symbols: this.getFlowShapes(),
      title: 'Flow Shapes'
    },
    {
      id: 'connectors',
      symbols: this.getConnectors(),
      title: 'Connectors'
    }
  ];
  public getFlowShapes(): NodeModel[] {
    let flowshapes: NodeModel[] = [
      { id: 'Terminator', shape: { type: 'Flow', shape: 'Terminator' } },
      { id: 'Process', shape: { type: 'Flow', shape: 'Process' } },
      { id: 'Decision', shape: { type: 'Flow', shape: 'Decision' } },
      { id: 'PreDefinedProcess', shape: { type: 'Flow', shape: 'PreDefinedProcess' } }
    ];
    return flowshapes;

  }
  public getConnectors(): ConnectorModel[] {
    let connectors: ConnectorModel[] = [
      {
        id: 'Link1',
        type: 'Orthogonal',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'Arrow' }
      },
      {
        id: 'Link2',
        type: 'Orthogonal',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'None' }
      },
      {
        id: 'Link3',
        type: 'Straight',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'Arrow'}
      }
    ];
    return connectors; 
  }
  public getBasicShapes(): NodeModel[] {
    let basicshapes: NodeModel[] = [
      { id: 'Rectangle', shape: { type: 'Basic', shape: 'Rectangle' }},
      { id: 'Ellipse', shape: { type: 'Basic', shape: 'Ellipse' } },
      { id: 'Hexagon', shape: { type: 'Basic', shape: 'Hexagon' } },
      { id: 'Parallelogram', shape: { type: 'Basic', shape: 'Parallelogram' } }
    ];
    return basicshapes;

  }

}
