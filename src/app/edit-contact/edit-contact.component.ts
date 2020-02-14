import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../../services/contacts.service';
import {Contact} from '../../model/model.contact';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  mode = 1;
  contact: Contact;
  idContact: number;
  constructor(public activatedRoute: ActivatedRoute, public contactsService: ContactsService, public router: Router) {
    this.idContact = activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.contactsService.getContact(this.idContact).subscribe(data => {
      this.contact = data;
    }, error => {
      console.log(error);
      }
    );
  }
  updateContact() {
    this.contactsService.updateContact(this.contact).subscribe(data => {
        console.log(data);
        alert('Mise à jour effectuée !');
        this.router.navigate(['contacts']);
      }, error => {
        console.log(error);
      }
    );
  }

}
