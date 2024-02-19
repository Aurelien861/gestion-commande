import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {ApiUrls} from "../shared/api-url";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({ providedIn: 'root' })

export class OrderService {

  constructor(private http: HttpClient) {
  }

  getOrders(beginDate: string | null, endDate: string | null, clientName: string | null, sellerName: string | null, materialId: string | null): Observable<any> {
    const getOrdersUrl = environment.apiHost + ApiUrls.command.getAll;
    let params = new HttpParams();
    if(beginDate) {
      params = params.append('startDate', beginDate);
    }
    if(endDate) {
      params = params.append('endDate', endDate);
    }
    if(clientName) {
      console.log(clientName)
      params = params.append('nomMembreClient', clientName);
    }
    if(sellerName) {
      params = params.append('nomMembreActif', sellerName);
    }
    if(materialId) {
      params = params.append('materielId', materialId);
    }
    return this.http.get<any>(getOrdersUrl, {params: params});
  }

}
