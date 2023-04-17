import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMenuOktaComponent } from './profile-menu-okta.component';

describe('ProfileMenuOktaComponent', () => {
  let component: ProfileMenuOktaComponent;
  let fixture: ComponentFixture<ProfileMenuOktaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileMenuOktaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileMenuOktaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
