import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {ContactsService} from '../../services/contacts.service';
import {Router} from '@angular/router';
import {Contact} from '../../model/model.contact';

@Component({
  selector: 'app-c',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts: any;
  motCle = '';
  column = '';
  currentpage = 0;
  size = 5;
  pages: any;
  constructor(public http: Http, public contactsservice: ContactsService, public router: Router) { 

    
  }
  

  ngOnInit(): void {
    this.doSearch();
  }
  doSearch() {
    this.contactsservice.getContacts(this.motCle, this.currentpage, this.size, this.column)
      .subscribe(data => {
        this.pageContacts = data;
        console.log(this.pageContacts);
        this.pages = new Array(data.totalPages);
      }, error => {console.log(error); });
      
  }
  chercher() {
    this.currentpage = 0;
    this.doSearch();
  }
  gotoPage(i: number) {
    this.currentpage = i;
    this.doSearch();
  }
  OnEditContact(id: number) {
    this.router.navigate(['editContact', id]);
  }
  OnDeleteContact(c: Contact) {
    const confirm = window.confirm('Est vous sure ?');
    if (confirm === true) {
      this.contactsservice.deleteContact(c.id).subscribe(data => {
        this.pageContacts.content.splice(
          this.pageContacts.content.indexOf(c), 1
        );
      }, error => {
        console.log(error);
      });
    }
  }
}
