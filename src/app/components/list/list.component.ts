import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <ul class="list">
      <li class="list-item" *ngFor="let item of data">
        <ng-container
          [ngTemplateOutlet]="itemTemplate"
          [ngTemplateOutletContext]="{ $implicit: item }"
        ></ng-container>
      </li>
    </ul>
  `,
  styles: [
    `
      .list {
        list-style: none;
        padding: 0;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Input() data: any[];
  @Input() itemTemplate: TemplateRef<HTMLElement>;
}
