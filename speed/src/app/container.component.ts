import {Component, OnInit} from '@angular/core';
import {LoadAgencies} from "./reducers/agencies/agencies.actions";
import { Store } from '@ngrx/store';
import {State} from "./reducers";
import {LoadLaunchState} from "./reducers/launchstate/launchstate.actions";
import {LoadTypes} from "./reducers/launchtypes/launchtypes.actions";
import {LoadLaunches} from "./reducers/launches/launches.actions";

@Component({

  selector: 'app-container',
  templateUrl: './container.component.html',
  styles: []
})
export class ContainerComponent implements OnInit {
  public filteredLaunches: any[] = []; // Filtro que viene de lo filtrado
  public agencies: any[] = []; // Total Agencias
  public launches: any[] = []; // Total lanzamientos
  public launchstatus: any[] = []; // Estado de los lanzamientos
  public missiontypes: any[] = []; // Tipo de lanzamientos

  constructor(
    private store: Store<State>,
  ) {}

  ngOnInit() {
    console.log('container OnInit');
    this.store.dispatch(new LoadLaunches());
    this.store.dispatch(new LoadAgencies());
    this.store.dispatch(new LoadLaunchState());
    this.store.dispatch(new LoadTypes());




      // Cargamos las Agencias
      this.store.select(s => s.agencies).subscribe(value => {
      this.agencies = value.agencies;
        });
      // Cargamos los Estados
      this.store.select(s => s.launchstatus).subscribe(value => {
        this.launchstatus = value.launchstatus;
        });

      // Cargamos los Tipos
      this.store.select(s => s.missiontypes).subscribe(value => {
        this.missiontypes = value.types;
        });

      // Cargamos todos los lanzamientos
      this.store.select(s => s.launches).subscribe(value => {
        this.launches = value.launches;
        });



  }

  // Filtramos por Estado
   statusFilter(value) {
        this.filteredLaunches = this.launches.filter(f=>f.status==value);
      };

  // Filtramos por Agencias
   agenciesFilter(value) {
    console.log('Agencia trae', value);
    this.filteredLaunches = this.launches
      .filter(launch => {
          if (launch.missions.length > 0 && launch.missions[0].agencies) {
            return launch.missions.find(
              mission =>
                mission.agencies &&
                mission.agencies.find(agency => agency.abbrev === value) !==
                  undefined
            );
          }
        });
   }


  // Filtramos por Tipo
   typesFilter(value) {
    value = parseInt(value);
        this.filteredLaunches = this.launches
          .filter(f => f.missions.find(a =>a.type=== value));
   }

}
