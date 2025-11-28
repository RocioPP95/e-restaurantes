import { Component, OnInit } from '@angular/core';
import { RestauranteModelo } from 'src/app/interface/restaurante.modelo';
import { RestaurantesService } from 'src/app/servicios/restaurantes.service';


@Component({
  selector: 'app-listado.restaurantes',
  templateUrl: './listado.restaurantes.page.html',
  styleUrls: ['./listado.restaurantes.page.scss'],
  standalone: false
})
export class ListadoRestaurantesPage implements OnInit {
  /**
  * Título que se muestra en la cabecera de la página.
  * Puede modificarse dinámicamente si se requiere.
  */
  titulo: string = "Listado de Restaurantes";
  /**
   * Array donde se almacenan los elementos que se mostrarán en la vista.
   * Se inicializa vacío y se llena al cargar la página.
   */
  restaurantes: RestauranteModelo[] = []

  /**
    * Se inyecta el servicio responsable de gestionar los datos.
    * Esto permite acceder a las operaciones de consulta, añadido o borrado.
    */
  constructor(private restaurantesService: RestaurantesService) { }


  /**
   * Método de inicialización del componente.
   * En este caso no realiza acciones, pero se deja preparado
   * para futuras ampliaciones.
   */
  ngOnInit() {
  }

  /**
   * Cada vez que entre en la página recarga el listado de restaurantes:
   */
  ionViewWillEnter() {
    this.cargarRestaurantes();
  }

  /**
  * cargarRestaurantes: obtiene el listado completo de alumnos del servicio
  */
  cargarRestaurantes() {
    this.restaurantes = this.restaurantesService.getRestaurantes();
  }

  /**
   * nuevoRestaurante: abre la página para añadir un nuevo restaurante
   */
  nuevoRestaurante() {
    alert('Página para añadir nuevo restaurante, en construcción...');
  }

}
