import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {IWCAGItem} from '../../../shared/interfaces/wcag-item';
import {WcagService} from '../../../core/services/wcag.service';
import {Observable} from 'rxjs';
import {WCAGIds} from '../../../shared/enums/wcag-ids';

@Injectable({providedIn: 'root'})
export class WcagItemResolver implements Resolve<IWCAGItem> {
	constructor(private wcagService: WcagService) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IWCAGItem> | Promise<IWCAGItem> | IWCAGItem {
		const wcagId: WCAGIds = route.paramMap.get('id') as WCAGIds;
		return this.wcagService.getWcagItem(wcagId);
	}
}
