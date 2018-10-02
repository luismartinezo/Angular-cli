import { Injectable } from '@angular/core';
import { Image } from '../models/image';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
// import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
	// images : Image[] = [ 
	// 	new Image ('1','Primera Imagen','Descripcion primera Imagen',
	// 	'https://www.emprendiendohistorias.com/wp-content/uploads/2017/11/cursos-de-desarrollo-web.jpg',
	// 	'https://www.emprendiendohistorias.com/wp-content/uploads/2017/11/cursos-de-desarrollo-web.jpg'),

	// 	new Image ('2','Segunda Imagen','Descripcion Segunda Imagen',
	// 	'https://programacionymas.com/images/tutoriales/desarrollo-web/desarrollo-web.png',
	// 	'https://programacionymas.com/images/tutoriales/desarrollo-web/desarrollo-web.png'),

	// 	new Image ('3','Tercera Imagen','Descripcion Tercera Imagen',
	// 	'https://programacionymas.com/images/tutoriales/desarrollo-web/desarrollo-web.png',
	// 	'https://programacionymas.com/images/tutoriales/desarrollo-web/desarrollo-web.png'),

	// 	new Image ('4','Cuarta Imagen','Descripcion Cuarta Imagen',
	// 	'https://programacionymas.com/images/tutoriales/desarrollo-web/desarrollo-web.png',
	// 	'https://programacionymas.com/images/tutoriales/desarrollo-web/desarrollo-web.png'),
	// 	];

  constructor(private http:Http) { }

  	// getImages() {
  	// 	return this.images;
  	// }
  	getImages(): Observable<Image[]> {
  		return this.http.get('http://localhost:8000/api/v1/images').map((response:Response) => response.json());
  	}
}
