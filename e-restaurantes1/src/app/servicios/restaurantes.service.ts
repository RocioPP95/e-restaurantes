import { Injectable } from '@angular/core';
import { RestauranteModelo } from '../interface/restaurante.modelo';

@Injectable({
  providedIn: 'root',
})
export class RestaurantesService {

  // Lista interna donde se almacenan los elementos del tipo RestauranteModelo.
  private restaurantes: RestauranteModelo[] = [
    {
      "logotipo": "assets/imagenes/restaurante1.jpg",
      "nombre": "Tapas Cuca",
      "descripcion": "Un espacio acogedor donde disfrutar tapas caseras, sabores tradicionales y buen ambiente. Perfecto para compartir momentos entre amigos y familia.",
      "tenedores": 2,
      "comentarios": ["Las tapas de Cuca son una maravilla. Todo casero y con mucho sabor. Volveré seguro",
        "Ambiente acogedor y servicio amable. Ideal para venir con amigos a picar algo rico",
        "Excelente relación calidad-precio. Probamos varias tapas y todas estaban deliciosas "
      ]
    }, {
      "logotipo": "assets/imagenes/restaurante2.jpg",
      "nombre": "El rincón de Rocio",
      "descripcion": "Rincón de Rocío es un lugar acogedor donde las tapas caseras, el sabor tradicional y el trato cercano se combinan para crear una experiencia deliciosa. Un espacio con encanto andaluz, perfecto para compartir buenos momentos y disfrutar de platos preparados con cariño y producto fresco.",
      "tenedores": 3,
      "comentarios": ["Un sitio con mucho encanto. Las tapas del Rincón de Rocío están buenísimas y el ambiente es inmejorable.",
        "Nos atendieron genial. Todo muy casero, sabroso y a buen precio. Sin duda repetiremos.",
        "Lugar perfecto para venir en familia. Buen servicio, buenas tapas y un ambiente muy agradable."
      ]
    },
    {
      "logotipo": "assets/imagenes/restaurante3.jpg",
      "nombre": "La Maravilla",
      "descripcion": "Restaurante La Maravilla ofrece una cocina sencilla y llena de sabor, donde cada plato se elabora con ingredientes frescos y un toque casero que conquista desde el primer bocado. Un espacio acogedor, familiar y con mucho encanto, ideal para disfrutar de tapas, raciones y buenos momentos en compañía.",
      "tenedores": 1,
      "comentarios": ["Comida deliciosa y muy bien presentada. La Maravilla hace honor a su nombre, todo estuvo espectacular. ",
        "Ambiente tranquilo y atención excelente. Probamos varias tapas y nos encantaron todas.",
        "Muy buena relación calidad-precio. Es un restaurante al que siempre da gusto volver."
      ]
    },

  ]
  constructor() { }

  /**
   * Devuelve una copia del listado completo de elementos almacenados.
   * Esto evita que la lista original pueda ser modificada desde fuera del servicio.
   */

  getRestaurantes(): RestauranteModelo[] {
    return [...this.restaurantes];
  }

  /**
     * Busca un elemento dentro de la lista usando un valor identificador
     * (en este caso, el nombre) y devuelve una copia del elemento encontrado.
     * Si no existe coincidencia, retorna undefined.
     */

  getRestaurante(restauranteNombre: string | null): RestauranteModelo {
    return {
      ...this.restaurantes.find(b => b.nombre === restauranteNombre)!
    };
  }

  /**
  * Crea un nuevo elemento del tipo RestauranteModelo y lo añade
  * al listado interno del servicio.
  * Recibe cada propiedad como parámetro para mayor flexibilidad.
  */
  addRestaurante(
    logotipo: string,
    nombre: string,
    descripcion: string,
    tenedores: number,
    comentarios: string[]
  ) {


    const nuevoRestaurante: RestauranteModelo = {
      logotipo,
      nombre,
      descripcion,
      tenedores,
      comentarios
    };

    this.restaurantes.push(nuevoRestaurante);
  }

  /**
     * Elimina un elemento del listado interno filtrando todos aquellos
     * que no coincidan con el identificador recibido.
     * Mantiene únicamente los elementos cuyo nombre sea diferente.
     */

  deleteRestaurante(restauranteNombre: string | undefined) {
    this.restaurantes = this.restaurantes.filter(a => a.nombre !== restauranteNombre);

  }

}
