import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {finalize} from 'rxjs/operators';
import {AngularFireStorage} from '@angular/fire/storage';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {News} from '../../../model/news/news';
import {NewsService} from '../../../service/news.service';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit {
  @ViewChild('uploadFile', {static: true}) public avatarDom: ElementRef | undefined;
  selectedImage: any = null;
  arrayPicture = 'https://archinect.imgix.net/uploads/ug/ugwcu31z3fknhdkn.jpg?fit=crop&auto=compress%2Cformat&w=1200';
  formCreateNews: FormGroup = new FormGroup({
    title: new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(100)]),
    content: new FormControl("",[Validators.required,Validators.minLength(100),Validators.maxLength(1000)]),
    img: new FormControl(""),
    nameImg: new FormControl("",[Validators.required,Validators.pattern("\.(jpg|png)$")]),
    employee: new FormControl()
  });


  constructor(private storage: AngularFireStorage,
              private newsService: NewsService) {
  }

  name = 'Angular';

  public model = {
    name: 'Hardik',
    description: '<p>This is a sample form using CKEditor 4.</p>'
  };

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(`Form submit, model: ${JSON.stringify(this.model)}`);
  }

  submit() {
    if (this.selectedImage != null) {
      const filePath = this.selectedImage.name;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => (fileRef.getDownloadURL().subscribe(url => {
          this.arrayPicture = url;
          console.log('Link ảnh' + url);
        })))
      ).subscribe();
    }
  }


  uploadFileImg() {
    this.selectedImage = this.avatarDom?.nativeElement.files[0];
    this.submit();
  }

  createNews() {
    const news: News = this.formCreateNews.value;
    news.img = this.arrayPicture;
    news.employee = {
      id : 1
    };
    console.log(news);
    this.newsService.addNews(news).subscribe(next => {
      this.formCreateNews.reset();
    });
  }
}
