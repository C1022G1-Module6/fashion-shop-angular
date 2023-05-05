import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {finalize} from 'rxjs/operators';
import {AngularFireStorage} from '@angular/fire/storage';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {News} from '../../../model/news/news';
import {NewsService} from '../../../service/news.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit {
  @ViewChild('uploadFile', {static: true}) public avatarDom: ElementRef | undefined;
  selectedImage: any = null;
  mb = 0;
  arrayPicture = 'https://chim-chimneyinc.com/wp-content/uploads/2019/12/GettyImages-1128826884.jpg';
  formCreateNews: FormGroup = new FormGroup({
    title: new FormControl('',
      [Validators.required, Validators.minLength(10), Validators.maxLength(200)]
    ),
    content: new FormControl('',
      [Validators.required, Validators.minLength(100), Validators.maxLength(5000)]
    ),
    img: new FormControl(),
    nameImg: new FormControl('',
      [Validators.required, Validators.pattern(/\.(png|jpg)$/i)]
    ),
    mb: new FormControl(''),
    employee: new FormControl()
  });

  errCreate: any = {
    errTitle: '',
    errNameImg: '',
    errContent: '',
    errMb: ''
  };


  constructor(private storage: AngularFireStorage,
              private newsService: NewsService,
              private router: Router) {
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

  // onFileSelected(event): void {
  //   const file: File = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       this.arrayPicture = reader.result as string;
  //     };
  //   }
  // }

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

  uploadFileImg(event: any) {
    const file: File = event.target.files[0];
    const fileSizeInBytes = file.size;
    const fileSizeInMB = fileSizeInBytes / (1024 * 1024);
    this.mb = fileSizeInMB;
    console.log('file size: ' + fileSizeInMB + 'MB');
    this.selectedImage = this.avatarDom?.nativeElement.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.arrayPicture = reader.result as string;
      };
    }
    this.submit();
  }

  createNews() {
    // if (this.formCreateNews.valid) {
    const news: News = this.formCreateNews.value;
    news.img = this.arrayPicture;
    news.employee = {
      id: 1
    };
    news.title = news.title.trim();
    news.mb = this.mb;
    console.log(news);
    this.newsService.addNews(news).subscribe(next => {
      this.formCreateNews.reset();
      Swal.fire({
        icon: 'success',
        title: 'Thêm mới thành công',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigateByUrl('news/listNews');
    }, er => {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < er.error.length; i++) {
        if (er.error[i].field === 'title') {
          this.errCreate.errTitle = er.error[i].defaultMessage;
        } else if (er.error[i].field === 'nameImg') {
          this.errCreate.errNameImg = er.error[i].defaultMessage;
        } else if (er.error[i].field === 'content') {
          this.errCreate.errContent = er.error[i].defaultMessage;
        }
      }
    });
  }

  // }
}
