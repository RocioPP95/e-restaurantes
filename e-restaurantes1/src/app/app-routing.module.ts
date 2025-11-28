import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /**
  * Ruta principal de la aplicación.
  * Cuando el usuario accede sin indicar un path, se redirige automáticamente
  * a la página de listado. El pathMatch 'full' garantiza que solo se aplique
  * cuando la ruta esté completamente vacía.
  */
  {
    path: '',
    redirectTo: 'listado.restaurantes',
    pathMatch: 'full'
  },
  /**
   * Rutas relacionadas con la vista de listado.
   * Se utilizan rutas hijas para gestionar tanto la página principal
   * como el acceso a los detalles individuales de cada elemento.
   */
  {
    path: 'listado.restaurantes',
    children:
      [
        /**
       * Página principal del listado.
       * Se carga el módulo asociado mediante lazy loading para optimizar
       * el rendimiento de la aplicación.
       */
        {
          path: "",
          loadChildren: () => import('./pages/listado.restaurantes/listado.restaurantes.module').then(m => m.ListadoRestaurantesPageModule)
        },
        /**
         * Ruta dinámica que recibe un parámetro en la URL.
         * Permite cargar la vista de detalle en función del elemento seleccionado.
         */
        {
          path: ":restauranteNombre",
          loadChildren: () => import('./pages/detalle.restaurante/detalle.restaurante.module').then(m => m.DetalleRestaurantePageModule)
        }
      ]
  },
  /**
   * Ruta alternativa para acceder a la vista de detalle.
   * Se mantiene por compatibilidad o como acceso directo,
   * aunque la navegación principal se realiza desde la estructura anterior.
   */

  {
    path: 'detalle.restaurante',
    loadChildren: () => import('./pages/detalle.restaurante/detalle.restaurante.module').then(m => m.DetalleRestaurantePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

