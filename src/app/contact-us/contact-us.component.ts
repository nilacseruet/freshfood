import { Component, OnInit ,ViewChild} from '@angular/core';
import {Contact} from './contact.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {GlobalValidator} from '../common/globalValidator';
import {CommonModalWindow} from '../common/modal-window';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contact: FormGroup;
  @ViewChild(CommonModalWindow)
  public readonly modal: CommonModalWindow;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.contact = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: [''], //[Validators.required, GlobalValidator.incorrectMailFormat]],
      phone: [''], //[Validators.required,GlobalValidator.isValidPhoneNumber]],
      messages: [''], //[Validators.required,Validators.maxLength(500)]]
      
    });

  }

 shows(){
   this.modal.showModal();
 }
  onSubmit({ value, valid }: { value: Contact, valid: boolean }) {
      if(valid){
        //this.contact.reset();
        //this.modal.show();
        console.log(value);
        this.modal.showModal();
      }
  }


}
