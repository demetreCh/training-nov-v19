import { Component, computed, inject, signal, Signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ResettableInputComponent } from "../../projects/my-lib/src/lib/resettable-input/resettable-input.component";
import { FormsModule } from '@angular/forms';
import { AddressInputComponent } from "./address-input/address-input.component";
import { Address } from './address.interface';
import { SelectedItemsService } from './selected-items.service';
import { Post } from './post/models/Post';
import { SignalNode } from '@angular/core/primitives/signals';
import { LoggerLevel, LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterLink, RouterOutlet, ResettableInputComponent, FormsModule, AddressInputComponent]
})
export class AppComponent {
  title = 'soluce-19';
  maValeur = "val par défaut";
  monAdresse: Address;
  nbPosts: Signal<number> = signal(0);

  loggerService: LoggerService;

  constructor(private readonly selectedItemsService: SelectedItemsService) {
    this.loggerService = inject(LoggerService);
    this.loggerService.log(LoggerLevel.DEBUG, "Debug from AppComponent !!");
    this.loggerService.log(LoggerLevel.INFO, "Info from AppComponent !!");
    this.loggerService.log(LoggerLevel.ERROR, "Error from AppComponent !!");
    this.nbPosts = computed(() => {
      console.log(this.selectedItemsService.postsSelected());
      return this.selectedItemsService.postsSelected().size;
    });
    this.monAdresse = {
      number: '23',
      street: 'Baker street',
      city: 'Manchester',
      postalCode: '33626',
      country: 'England'
    }
  }
}
