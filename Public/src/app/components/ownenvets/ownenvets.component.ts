import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-ownenvets',
  standalone: true,
  imports: [TableModule],
  templateUrl: './ownenvets.component.html',
  styleUrl: './ownenvets.component.scss'
})

export class OwnenvetsComponent implements OnInit{
  tartalomTeszt:any=[]
  
  constructor(){};

  ngOnInit(): void {
    
  }
}
