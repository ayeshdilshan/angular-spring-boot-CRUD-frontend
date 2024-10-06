import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
        //  {
        //   path: 'dashboard',
        //   component: DashboardComponent,
        // },
        // {
        //     path: 'receipt',
        //     loadChildren: () =>
        //       import('../receipt/receipt.module').then(
        //         (m) => m.ReceiptModule
        //       )
        //   },
        ]
    }
];
