import { Component, OnInit } from "@angular/core";
import { user } from "../models/user";
import { UserService } from "../Services/user.service";
import { NavController } from "@ionic/angular";
import { ProductService } from "../Services/product.service";
import { Historia } from "../models/historia";
import { Propiedad } from "../models/propiedad";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"]
})
export class ProfilePage implements OnInit {
  show: boolean;
  usuario: user;
  historias: Historia[];
  propiedades: Propiedad[];
  constructor(
    private userServices: UserService,
    private nav: NavController,
    private productServices: ProductService
  ) {
    this.usuario = new user();
    this.historias = new Array();
    this.usuario.dietas = new Array();
    this.usuario = this.userServices.getUser();
    this.historias = this.userServices.getHistorias();
    this.propiedades = this.productServices.getNamesPropiedades();
    this.show = false;
    console.log(this.usuario);
  }

  ngOnInit() {
    console.log("INICIA");
    setTimeout(() => {
      this.show = true;
    }, 2000);
  }

  preferencias(){
    this.nav.setDirection("forward");
    this.nav.navigateForward(['/preferences']);
  }

  ionViewWillEnter() {
    this.usuario = this.userServices.getUser();
    this.historias = this.userServices.getHistorias();
    this.propiedades = this.productServices.getNamesPropiedades();
    console.log(this.usuario.indexPerfil);
    console.log("Entra en perfil usuario.");
    
  }

  masInfo() {
    this.nav.navigateForward(["/more-info-profile"]);
  }

  logout() {
    console.log("Se ha cerrado la sesion.");
    this.usuario = new user();
    this.usuario.dietas = new Array();
    this.usuario.propiedades = new Array();
    this.historias = new Array();
    this.userServices.logout();
    this.nav.navigateRoot("/login");
  }

  mostrar() {
    return this.usuario.propiedades.length > 0;
  }
}
