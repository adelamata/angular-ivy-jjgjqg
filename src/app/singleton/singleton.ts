/**
 * Clase Singleton.
 *
 * Garantiza una única instancia de una clase y un mismo
 * y único punto de acceso a esa instancia
 *
 */
export class Singleton {
  /**
   * Nombre de la instancia para confirmar que solo se instancia una
   *
   */
  private name = 'SingletonInstance' + Math.round(Math.random() * 9);

  /**
   *
   * Variable donde almacenamos la instancia
   *
   */
  private static instance: Singleton;

  /**
   *
   * Función que se encarga de gestionar la creación de una
   * instancia nueva si no existe o devolver la existente
   *
   */
  static getInstance(): Singleton {
    return Singleton.instance || (Singleton.instance = new Singleton());
  }
}
