import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { UserInterface } from 'src/app/shared/interfaces';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'fms-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  sub!: Subscription;
  errorMessage = '';
  @Input() adUsers: any[] = [];
  newUsers: any[] = [];

  userHeaders = [
    '','S/N', 'Name','MDA'
  ];
  users2 = [
    {
      Id: 241,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
      Mda: 'Ministry of finance',
    },
    {
      Id: 242,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
      Mda: 'Ministry of finance',
    },
    {
      Id: 243,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
      Mda: 'Ministry of finance',
    },
    {
      Id: 244,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
      Mda: 'Ministry of finance',
    },
    {
      Id: 245,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
      Mda: 'Ministry of finance',
    },
    {
      Id: 246,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
      Mda: 'Ministry of finance',
    },
    {
      Id: 247,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
      Mda: 'Ministry of finance',
    },
    {
      Id: 248,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
      Mda: 'Ministry of finance',
    },
    {
      Id: 249,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
      Mda: 'Ministry of finance',
    },
    {
      Id: 250,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
      Mda: 'Ministry of finance',
    },
    {
      Id: 253,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
      Mda: 'Ministry of finance',
    },
    {
      Id: 254,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
      Mda: 'Ministry of finance',
    },
    {
      Id: 255,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
      Mda: 'Ministry of finance',
    },
    {
      Id: 256,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
      Mda: 'Ministry of finance',
    },
    {
      Id: 257,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
      Mda: 'Ministry of finance',
    },
    {
      Id: 258,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      State: 'Lagos',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      assetType: 'vehicle',
      dateAdded: new Date('2020-01-01'),
      Mda: 'Ministry of finance',
    },

  ]

  private _listFilter: any = '';

  get listFilter(): any {
    return this._listFilter;
  }

  set listFilter(value: any) {
    this._listFilter = value;
    this.filteredUsers = this.performFilter(value);
  }

  filteredUsers: UserInterface[] = [];
  users: UserInterface[] = [];
  total: number = this.users2.length;
  performFilter(filterBy: string): UserInterface[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.users.filter(
      (p: UserInterface) =>
        p.FirstName.toLocaleLowerCase().includes(filterBy) ||
        p.LastName.toLocaleLowerCase().includes(filterBy) ||
        p.Id.toLocaleLowerCase().includes(filterBy) ||
        p.assetType.toLocaleLowerCase().includes(filterBy) ||
        p.Address.toLocaleLowerCase().includes(filterBy)
    );
  }

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    if(this.adUsers.length< 1){
      this.adUsers = this.users2;
    }
    this.sub = this.userService.getUsers().subscribe({
      next: (users: UserInterface[]) => {
        console.log(users, 'use');
        this.users = users;
        this.filteredUsers = this.users;
      },
      error: (err: string) => (this.errorMessage = err),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onChange($event: any,user: any){
    this.newUsers = this.adUsers.filter(u => u.Id == user.Id);
    console.log(this.newUsers,'new users');
  }

}
