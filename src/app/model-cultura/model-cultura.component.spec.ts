import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelCulturaComponent } from './model-cultura.component';

describe('ModelCulturaComponent', () => {
  let component: ModelCulturaComponent;
  let fixture: ComponentFixture<ModelCulturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelCulturaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelCulturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
