import {TestBed, async, ComponentFixture, fakeAsync, tick} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewsComponent } from "./news.component";
import { NewsSetComponent } from "./news-set/news-set.component";
import { NewsItemComponent } from "./news-item/news-item.component";
import { TruncateTextPipe } from "../../shared/truncate-text.pipe";
import { NewsService } from "./news.service";
import { HttpModule } from '@angular/http';
import Spy = jasmine.Spy;
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";


describe('NewsComponent', () => {

  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;
  let newsService:NewsService;
  let spy:Spy
  let newsServiceStub = {

    data:{
      articles:[{
        author:"BBC News",
        description:"The document includes plans to nationalise parts of the energy industry and scrap tuition fees.",
        publishedAt:"2017-05-11T08:42:10+00:00",
        title:"General election 2017: Labour manifesto draft leaked",
        url: "http://www.bbc.co.uk/news/uk-politics-39877439",
        urlToImage: "https://ichef-1.bbci.co.uk/news/1024/cpsprodpb/2044/production/_96006280_29bdda5e-bc29-4a66-bd2e-e21d9630b649.jpg"}]
    }
  };

  beforeEach(async(() => {

    TestBed.configureTestingModule({

      declarations: [
      NewsComponent,
      NewsSetComponent,
      NewsItemComponent,
      TruncateTextPipe
      ],

      imports: [
      ReactiveFormsModule,
      HttpModule
      ],

      providers:[NewsService]

    }).compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('ADD button should be disabled', () => {
    let el = fixture.debugElement.query(By.css(".disabled"));
    component.ngOnInit();
    expect(el.nativeElement).toBeTruthy();
  });


  it('should find the ADD label', () => {
    let el = fixture.debugElement.query(By.css("#add"));
    component.ngOnInit();
    expect(el.nativeElement.textContent).toContain("Add");
  });

  it('should create component', async(() => {
    expect(component).toBeTruthy();
  }));

});
