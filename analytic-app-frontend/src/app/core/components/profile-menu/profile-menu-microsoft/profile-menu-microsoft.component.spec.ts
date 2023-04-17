import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMenuMicrosoftComponent } from './profile-menu-microsoft.component';

describe('ProfileMenuMicrosoftComponent', () => {
  let component: ProfileMenuMicrosoftComponent;
  let fixture: ComponentFixture<ProfileMenuMicrosoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileMenuMicrosoftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileMenuMicrosoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
