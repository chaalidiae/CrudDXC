import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';
import {Contact} from '../model/model.contact';
@Injectable()
export class ContactsService {
  port = '8080';
  constructor(public http: Http) {
  }
  getContacts(motCle: string, page: number, size: number, column: string) {
    return this.http.get('http://localhost:' + this.port +
      '/chercherContact?mc=' + motCle + '&size=' + size + '&page=' + page + '&column=' + column)
      .pipe(map(resp => resp.json()));
  }
  saveContact(contact: Contact) {
    return this.http.post('http://localhost:' + this.port + '/contacts', contact)
      .pipe(map(resp => resp.json()));
  }
  getContact(id: number) {
    return this.http.get('http://localhost:' + this.port + '/contacts/' + id)
      .pipe(map(resp => resp.json()));
  }
  updateContact(contact: Contact) {
    return this.http.put('http://localhost:' + this.port + '/contacts/' + contact.id, contact)
      .pipe(map(resp => resp.json()));
  }
  deleteContact(id: number) {
    return this.http.delete('http://localhost:' + this.port + '/contacts/' + id);
  }
}
