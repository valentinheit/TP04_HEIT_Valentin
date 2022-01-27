import { Component, Input } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AddAddress, DelAddress } from 'shared/actions/address.action';
import { Address } from 'shared/models/address';
import { AddressState } from 'shared/states/address-state';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
  FormBuilder,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-addresse',
  templateUrl: './addresse.component.html',
  styleUrls: ['./addresse.component.scss'],
})
export class AddresseComponent {
  valid: boolean = true;
  submitted: boolean = false;
  cp = new FormControl('');
  ville = new FormControl('');
  pays = new FormControl('');
  addressForm: any;
  @Select(AddressState.getAddresses) addresses$!: Observable<Address[]>;
  constructor(private store: Store, private formBuilder: FormBuilder) {
    this.addressForm = this.formBuilder.group({
      street: ['', Validators.required],
      cp: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  addAddress() {
    // newAddress.city = this.addressForm.value.city;
    // newAddress.country = this.addressForm.value.country;
    // newAddress.postalCode = this.addressForm.value.cp;
    // newAddress.street = this.addressForm.value.street;
    console.log(this.addressForm.value);
    this.store.dispatch(new AddAddress(this.addressForm.value));
  }
}
