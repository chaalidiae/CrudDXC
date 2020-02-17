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
  loading = false;
  currentpage = 0;
  size = 5;
  pages: any;
  constructor(public http: Http, public contactsservice: ContactsService, public router: Router) { }

  ngOnInit(): void {
    this.loading = true;
    this.doSearch();
    this.loading = false;
  }
  doSearch() {
    this.contactsservice.getContacts(this.motCle, this.currentpage, this.size, this.column)
      .subscribe(data => {
        this.pageContacts = data;
        this.pages = new Array(data.totalPages);
      }, error => {console.log(error); });
  }
  chercher() {
    this.loading = true;
    this.currentpage = 0;
    this.doSearch();
    this.loading = false;
  }
  gotoPage(i: number) {
    this.loading = true;
    this.currentpage = i;
    this.doSearch();
    this.loading = false;
  }
  OnEditContact(id: number) {
    this.loading = true;
    this.router.navigate(['editContact', id]);
    this.loading = false;
  }
  OnDeleteContact(c: Contact) {
    const confirm = window.confirm('Est vous sure ?');
    if (confirm === true) {
      this.loading = true;
      this.contactsservice.deleteContact(c.id).subscribe(data => {
        this.pageContacts.content.splice(
          this.pageContacts.content.indexOf(c), 1
        );
      }, error => {
        console.log(error);
      });
      this.loading = false;
    }
  }
}
