import { Component, ViewChild, ElementRef} from "@angular/core";
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';
import MousePosition from 'ol/control/MousePosition.js';
import {createStringXY} from 'ol/coordinate.js';
import LayerSwitcher from 'ol-layerswitcher';
import LayerGroup from 'ol/layer/Group';

@Component({
  imports: [],
  selector: "app-map",
  styleUrl: "./map.component.scss",
  templateUrl: "./map.component.html",
})
export class MapComponent {
  //Referemce to the map div
  //It is available in this.mapContainer.nativeElement
  //! is a non-null assertion operator. Means that the variable is not null or undefined
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;

  //every class variable must be initialized, in this case as an empty map,
  //latter we create a new map in the createMap method.
  //but the createMap method is called after the template is created, 
  //in ngAfterViewInit.
  map: Map=new Map();

  constructor() {
    console.log("Map component initialized");
  }

    //After the template objects are created.
  //This method is called after ngOnInit
  //It is necessary to give time to build the component, so
  // de div with the id map is created
  //and the map can be created
  ngAfterViewInit(): void {
    console.log('mapComponent initialized');
    this.createMap();
    this.addLayerSwitcherControl();
    this.addMousePositionControl();
  }
  createMap(){ 
    let layers = [
      new TileLayer({
        source: new OSM(),
      }),
    ]
    //overwrite the empty map with a new map, with the div as target
    
    let layerGroup = new LayerGroup({
      properties: {
          title: 'Base Layers',
        },
      layers: layers
    });
    
    this.map = new Map({
        controls: [],
        layers: [layerGroup],
        view: new View({
          center: [2595949,5266249],
          zoom: 14,
        }),
        target: this.mapContainer.nativeElement
    }); 
  }

  addLayerSwitcherControl() {
    const layerSwitcher = new LayerSwitcher(
      {
        activationMode: 'mouseover',
        startActive: true,
        tipLabel: 'Show-hide layers',
        groupSelectStyle: 'group',
        reverse: false
      }
    );
    this.map.addControl(layerSwitcher); //! --> tells typescript that map is not undefined
    
  }
  addMousePositionControl(){
      //Adds the mouse coordinate position to the map
      const mousePositionControl = new MousePosition({
        coordinateFormat: createStringXY(0),
        // comment the following two lines to have the mouse position
        // be placed within the map.
        //className: 'custom-mouse-position',
        //target: document.getElementById('map_mouse_position_control'),
        //undefinedHTML: '----------------------'
      });
      this.map.addControl(mousePositionControl);//! --> tells typescript that map is not undefined
  }
}
