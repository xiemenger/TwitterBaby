import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserPageComponent } from './user-page.component';
import { UserInfoComponent } from '../user-info/user-info.component';
import { TweetlistComponent } from '../tweetlist/tweetlist.component';
import { PageSplitComponent } from '../page-split/page-split.component';
import { DataService } from '../../services/data.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, 
  MatInputModule, 
  MatMenuModule, 
  MatIconModule, 
  MatButtonModule, 
  MatCardModule, 
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatDialogModule
  } from '@angular/material';

describe('UserPageComponent', () => {
  let component: UserPageComponent;
  let fixture: ComponentFixture<UserPageComponent>;
  let spy1: jasmine.Spy;
  let spy2: jasmine.Spy;
  let dataService: DataService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPageComponent, UserInfoComponent, TweetlistComponent, PageSplitComponent ],
      imports: [
        HttpModule,
        MatToolbarModule,
        MatInputModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatExpansionModule,
        MatProgressSpinnerModule,
        MatChipsModule,
        MatDialogModule,
        FormsModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: [ {provide: 'data', useClass: DataService} ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageComponent);
    component = fixture.componentInstance;
    dataService = fixture.debugElement.injector.get('data');
    spy1 = spyOn(dataService, 'getUserInfo')
    .and.returnValue(Promise.resolve('test'));
  
    spy2 = spyOn(dataService, 'getTweetList')
    .and.returnValue(Promise.resolve([]));
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
 });
