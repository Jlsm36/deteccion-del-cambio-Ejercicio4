import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  


  constructor(public http: HttpClient) {}

  // Adquirimos todas los lanzamientos

  public getLaunches = ()=>
    this.http
      .get('./assets/data/launches.json')
      .pipe(
        map((res: any) => res.launches));

  // Adquirimos todos las agencias
  public getAgencies = () =>
    this.http
      .get('./assets/data/agencies.json')
      .pipe(map((res: any) => res.agencies));

  // Adquirimos todos los Estados de Lanzamientos
  public getLaunchstatus = () => {
    return this.http
      .get('./assets/data/launchstatus.json')
      .pipe(map((res: any) => res.types));
  };


  // Adquirimos todos los Tipos de Lanzamientos
  public getMissiontypes = () =>
    this.http
      .get('./assets/data/missiontypes.json')
      .pipe(map((res: any) => res.types))


}

