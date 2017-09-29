import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {EstudianteData} from "./interfaces";
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Florencia', 'Gustavo', 'Carlos', 'Irina', 'Amelia', 'Juan',
  'Carolina', 'Azul', 'Isla', 'Oscar', 'Milagros', 'Aldo',
  'Luciana', 'Santiago', 'Paula', 'Victoria', 'Arturo', 'Tomás', 'Elizabeth'];
const CARRERAS = ['Sistemas', 'Civil', 'Mecánica', 'Industrial', 'Eléctrica'];

/** An example database that the data source uses to retrieve data for the table. */
export class BaseDeDatosEstudiantes {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<EstudianteData[]> = new BehaviorSubject<EstudianteData[]>([]);
  get data(): EstudianteData[] { return this.dataChange.value; }

  constructor() {
    // Fill up the database with 100 users.
    for (let i = 0; i < 100; i++) { this.agregarEstudiante(); }
  }

  /** Adds a new user to the database. */
  agregarEstudiante() {
    const copiedData = this.data.slice();
    copiedData.push(this.crearNuevoEstudiante());
    this.dataChange.next(copiedData);
  }

  /** Builds and returns a new User. */
  private crearNuevoEstudiante() {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    return {
      // id: (this.data.length + 1).toString(),
      id: (Math.round(Math.random() * 10000)+18000).toString(),
      name: name,
      // progress: (Math.round(Math.random() * 1000)+18000).toString(),
      carrera: CARRERAS[Math.round(Math.random() * (CARRERAS.length - 1))],
      color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
  }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, BaseDeDatosEstudiantes. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class OrigenDeDatosEstudiantes extends DataSource<any> {
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

  constructor(private _exampleDatabase: BaseDeDatosEstudiantes) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<EstudianteData[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._filterChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this._exampleDatabase.data.slice().filter((item: EstudianteData) => {
        let searchStr = (item.name + item.color).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) != -1;
      });
    });
  }

  disconnect() {}
}
