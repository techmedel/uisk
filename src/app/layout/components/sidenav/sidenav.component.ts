import { Component, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  items_menu_left: any[];


  constructor( 
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher, 
    private ls: LayoutService) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.items_menu_left = this.ls.getItemsMenuleft();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
   
  }

}
