import { Component, inject, resource, signal, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  id: number;
  name: string;
}



@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent implements OnInit {

   RESOURCE_URL = "https://jsonplaceholder.typicode.com/todos/";

   id = signal(1);
   myResource = resource({
    request: () => ({ id: this.id() }),
    loader: ({ request }) => fetch(this.RESOURCE_URL + request.id)
  });
  ngOnInit(){
    console.log(this.myResource.status()); // Prints: 2 (which means "Loading")
  
    // After the fetch resolves
    
    console.log(this.myResource.status()); // Prints: 4 (which means "Resolved")
    console.log(this.myResource.value()); // Prints: { "id": 1 , ... }
    
    this.id.set(2); // Triggers a request, causing the loader function to run again
    console.log(this.myResource.status()); // Prints: 2 (which means "Loading")
    
    // After the fetch resolves
    
    console.log(this.myResource.status()); // Prints: 4 (which means "Resolved")
    console.log(this.myResource.value()); // Prints: { "id": 2 , ... }
  }

 
}
