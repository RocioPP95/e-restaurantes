import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RestauranteModelo } from 'src/app/interface/restaurante.modelo';
import { RestaurantesService } from 'src/app/servicios/restaurantes.service';

@Component({
  selector: 'app-detalle.restaurante',
  templateUrl: './detalle.restaurante.page.html',
  styleUrls: ['./detalle.restaurante.page.scss'],
  standalone: false
})
export class DetalleRestaurantePage implements OnInit {


  /**
    * Objeto que almacenará la información del elemento seleccionado.
    * Se inicializa con valores vacíos para evitar errores antes de cargar los datos reales.
    */
  public restaurante: RestauranteModelo = {
    logotipo: '',
    nombre: '',
    descripcion: '',
    tenedores: 0,
    comentarios: []
  }

  /**
  * Se inyectan las dependencias necesarias:
  * - ActivatedRoute: permite obtener parámetros de la ruta.
  * - RestaurantesService: accede al servicio que gestiona los datos.
  * - Router: permite navegar entre páginas.
  * - AlertController: permite mostrar diálogos de confirmación.
  */

  constructor(private activatedRoute: ActivatedRoute,
    private restaurantesService: RestaurantesService,
    private router: Router,
    private alertCtrl: AlertController

  ) { }

  /**
 * Durante la inicialización se obtiene el parámetro de la ruta,
 * se utiliza como identificador y se carga el elemento correspondiente
 * desde el servicio de datos.
 */

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const restauranteNombre = paramMap.get('restauranteNombre');
      if (restauranteNombre) {
        this.restaurante = this.restaurantesService.getRestaurante(restauranteNombre);
        console.log('Detalle del restaurante cargado:', this.restaurante);
      }
    });
  }
  /**
  * Muestra un cuadro de diálogo para confirmar la eliminación del elemento.
  * Si el usuario acepta, se ejecuta la función de borrado del servicio
  * y se redirige de nuevo a la página de listado.
  */
  async deleteRestaurante() {
    const alert = await this.alertCtrl.create({
      header: '¿Eliminar restaurante?',
      message: `¿Estás seguro de eliminar a ${this.restaurante.nombre}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.restaurantesService.deleteRestaurante(this.restaurante.nombre);
            this.router.navigate(['/listado.restaurantes']);
          }
        }
      ]
    });

    await alert.present();
  }

}
