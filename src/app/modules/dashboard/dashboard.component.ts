import { EmailService } from './../../services/email.service';
import { Component, OnInit, ViewEncapsulation } from "@angular/core";

// import "tinymce";
// import "tinymce/themes/modern";
// import "tinymce/plugins/table";
// import "tinymce/plugins/link";
// import "tinymce/plugins/textcolor";
// import "tinymce/plugins/lists";
// import "tinymce/plugins/advlist";
// import "tinymce/plugins/media";
// import "tinymce/plugins/image";
// import "tinymce/plugins/anchor";
// import "tinymce/plugins/insertdatetime";
// import "tinymce/plugins/charmap";
// declare var tinymce: any;

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  constructor(public emailService:EmailService) {}
  public maincontent: boolean = false;
  public navoverlay: boolean = false;
  public isFavorite: boolean;
  public emailList : Array<Object>;
  public postList : any;
  public postsList :any;
  public mobileConfigToggle: any = {
    navbar: false,
    tablebar: true,
    maincontent: false
  };

  ngOnInit() {
    //this.tinyMceInit();
    this.isFavorite = false;
    this.getEmailDetails();
    this.emailService.emailList.subscribe((res) => {
      this.postList = JSON.stringify(res);
    });
    console.log(this.postList);
  }

  private tinyMceInit(): void {
    // tinymce.init({
    //   allow_html_in_named_anchor: true,
    //   init_instance_callback: function(editor) {
    //     editor.focus();
    //   },
    //   height: 200,
    //   toolbar: `formatselect | undo redo | bold italic backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | insert | help`
    // });
  }

  public toggle(container) {
    if (container == "m") {
      this.maincontent = !this.maincontent;
    }

    if (container == "n-o") {
      this.navoverlay = !this.navoverlay;
    }

    if (container == "m-mc") {
      this.maincontent = true;
      this.mobileConfigToggle = {
        navbar: false,
        tablebar: false,
        maincontent: true
      };

      console.log(this.mobileConfigToggle);
    }

    if (container == "m-tb") {
      this.maincontent = false;
      this.mobileConfigToggle = {
        navbar: false,
        tablebar: true,
        maincontent: false
      };
    }
  }

  public getEmailDetails(){
    this.emailList = this.emailService.getEmailList();
      this.emailService.getPosts().subscribe((res) => {
      this.postsList = res;
    });
    //console.log(this.postsList, 'dfgdffffffffffffffff')
  }

  public onFavoriteChanged() : void {
    console.log("Favorite changed");
  }
}
