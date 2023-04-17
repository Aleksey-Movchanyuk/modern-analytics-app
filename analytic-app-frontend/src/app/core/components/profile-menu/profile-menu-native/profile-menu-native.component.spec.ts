import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMenuNativeComponent } from './profile-menu-native.component';

describe('ProfileMenuNativeComponent', () => {
  let component: ProfileMenuNativeComponent;
  let fixture: ComponentFixture<ProfileMenuNativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileMenuNativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileMenuNativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
