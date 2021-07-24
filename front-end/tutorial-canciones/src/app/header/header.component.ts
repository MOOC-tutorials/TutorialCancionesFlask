import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private routerPath: Router,
    private router: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const userId = parseInt(this.router.snapshot.params.userId)
    const token = this.router.snapshot.params.userToken
    console.log(userId, token)
  }

  goTo(menu: string){
    this.router.params.subscribe(params=>{
      console.log(params)
    })
    const userId = parseInt(this.router.snapshot.queryParams['userId'])
    const token = this.router.snapshot.params.userToken
    console.log(userId, token)
    if(menu === "album"){
      this.routerPath.navigate([`/albumes/${userId}/${token}`])
    }
    else{
      this.routerPath.navigate([`/canciones/${userId}/${token}`])
    }
  }

}
