import { Component, ViewEncapsulation } from '@angular/core';
import { CoreNavigationItem } from "app/core/components/navigation/navigation.types";
import { Subject } from "rxjs";

@Component({
  selector     : 'classic-layout',
  templateUrl  : './classic.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ClassicLayoutComponent {
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  navigation: CoreNavigationItem[] = [];
  
  /**
   * Constructor
   */
  constructor()
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On destroy
   */
  ngOnDestroy(): void
  {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next(null);
      this._unsubscribeAll.complete();
  }
}
