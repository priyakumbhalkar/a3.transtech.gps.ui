import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddfencingComponent } from "./addfencing/addfencing.component";
import { GeofencingRoutingModule } from "./geofencing-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { FencingListComponent } from "./fencing-list/fencing-list.component";
import { AgGridModule } from "ag-grid-angular";
import { GoogleMapsModule } from "@angular/google-maps";
import { AgmCoreModule } from "@agm/core";
import { environment } from "../../../environments/environment";

@NgModule({
  declarations: [AddfencingComponent, FencingListComponent],
  imports: [
    CommonModule,
    GeofencingRoutingModule,
    SharedModule,
    AgGridModule.forRoot([]),
    AgmCoreModule.forRoot({
      apiKey: environment.mapKey,
      libraries: ["places", "drawing", "geometry"],
    }),
  ],
})
export class GeofencingModule {}
