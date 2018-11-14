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
  constructor() {}
  public maincontent : boolean = false;
  public navoverlay : boolean = false;

  ngOnInit() {
    //this.tinyMceInit();
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

  public toggle(container){
    if(container == 'm'){
        this.maincontent = !this.maincontent;
    }

    if(container == 'n-o'){
      this.navoverlay = !this.navoverlay;
    }
  }
}
