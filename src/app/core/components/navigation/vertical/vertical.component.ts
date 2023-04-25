import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { CoreNavigationItem } from "app/core/components/navigation/navigation.types";

@Component({
  selector: 'core-vertical-navigation',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'coreVerticalNavigation'
})
export class CoreVerticalNavigationComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {

  @Input() navigation: CoreNavigationItem[] = [];

  ngOnChanges(changes: SimpleChanges): void {

  }
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {

  }
  ngOnDestroy(): void {

  }

  /**
 * Track by function for ngFor loops
 *
 * @param index
 * @param item
 */
  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}
