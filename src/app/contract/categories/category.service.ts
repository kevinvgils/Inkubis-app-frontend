import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CategoryService {   
    routeId: number = 0;

    public setRouteId(routeId: number): void {
        this.routeId = routeId;
    }

    public getRouteId(): number {
        return this.routeId;
    }

}