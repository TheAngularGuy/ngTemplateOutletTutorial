import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  productList = [
    { id: 4, name: 'Laptop', rating: 3 },
    { id: 5, name: 'Phone', rating: 4 },
    { id: 6, name: 'Mice', rating: 4 },
  ];
}
