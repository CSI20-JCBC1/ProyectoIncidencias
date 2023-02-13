import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionIncidenciasComponent } from './revision-incidencias.component';

describe('RevisionIncidenciasComponent', () => {
  let component: RevisionIncidenciasComponent;
  let fixture: ComponentFixture<RevisionIncidenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisionIncidenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisionIncidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
