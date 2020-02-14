import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/model.contact';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
contact: Contact = new Contact();
mode = 1;
  constructor(public contactsservice: ContactsService) { }

  ngOnInit(): void {
  }

  saveContact() {
    this.contactsservice.saveContact(this.contact).subscribe(data => { this.contact = data ; this.mode = 2; }, error => console.log(error));
  }

}
