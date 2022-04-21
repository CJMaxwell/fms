import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'fms-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  users = [
    {
      Id: 241,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      Mda: 'Ministry of finance',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      Status: 'active',
      Role: 'basic user',
      dateAdded: new Date('2020-01-01'),
    },
    {
      Id: 242,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      Mda: 'Ministry of finance',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      Status: 'active',
      Role: 'basic user',
      dateAdded: new Date('2020-01-01'),
    },
    {
      Id: 243,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      Mda: 'Ministry of finance',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      Status: 'active',
      Role: 'basic user',
      dateAdded: new Date('2020-01-01'),
    },
    {
      Id: 244,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      Mda: 'Ministry of finance',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      Status: 'active',
      Role: 'basic user',
      dateAdded: new Date('2020-01-01'),
    },
    {
      Id: 245,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      Mda: 'Ministry of finance',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      Status: 'active',
      Role: 'basic user',
      dateAdded: new Date('2020-01-01'),
    },
    {
      Id: 246,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      Mda: 'Ministry of finance',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      Status: 'active',
      Role: 'basic user',
      dateAdded: new Date('2020-01-01'),
    },
    {
      Id: 247,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      Mda: 'Ministry of finance',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      Status: 'active',
      Role: 'basic user',
      dateAdded: new Date('2020-01-01'),
    },
    {
      Id: 248,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      Mda: 'Ministry of finance',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      Status: 'active',
      Role: 'basic user',
      dateAdded: new Date('2020-01-01'),
    },
    {
      Id: 249,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      Mda: 'Ministry of finance',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      Status: 'active',
      Role: 'basic user',
      dateAdded: new Date('2020-01-01'),
    },
    {
      Id: 250,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      Mda: 'Ministry of finance',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      Status: 'active',
      Role: 'basic user',
      dateAdded: new Date('2020-01-01'),
    },
    {
      Id: 253,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      Mda: 'Ministry of finance',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      Status: 'active',
      Role: 'basic user',
      dateAdded: new Date('2020-01-01'),
    },
    {
      Id: 254,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      Mda: 'Ministry of finance',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      Status: 'active',
      Role: 'basic user',
      dateAdded: new Date('2020-01-01'),
    },
    {
      Id: 255,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      Mda: 'Ministry of finance',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      Status: 'active',
      Role: 'basic user',
      dateAdded: new Date('2020-01-01'),
    },
    {
      Id: 256,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      Mda: 'Ministry of finance',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      Status: 'active',
      Role: 'basic user',
      dateAdded: new Date('2020-01-01'),
    },
    {
      Id: 257,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      Mda: 'Ministry of finance',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      Status: 'active',
      Role: 'basic user',
      dateAdded: new Date('2020-01-01'),
    },
    {
      Id: 258,
      FirstName: 'Maxwell',
      LastName: 'Chukwunonyerem',
      Address: 'Cele',
      Mda: 'Ministry of finance',
      PhoneNumber: '0813456789',
      Email: 'maxwell@user.com',
      Status: 'active',
      Role: 'basic user',
      dateAdded: new Date('2020-01-01'),
    },
  ];
  userId: any;
  user: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = params.id;
      // this.userService.getuserById(this.userId).subscribe(user => {
      //   //this.user = user;
      //  // this.user.assets = this.assets;
      // });
    });

    if (this.userId) {
      this.user = this.users.filter((v) => v.Id == this.userId);
      console.log(this.user);
    }
  }
  back() {
    this.router.navigateByUrl('dashboard/users');
  }
}
