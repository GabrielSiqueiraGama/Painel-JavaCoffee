import { Injectable } from '@angular/core';
import { UntypedFormGroup, FormGroup, UntypedFormArray, UntypedFormControl, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormUtilsService {

  constructor() { }

  validateAllFormFields(formGroup: UntypedFormGroup | UntypedFormArray){
    Object.keys(formGroup.controls).forEach(field =>{
      const control = formGroup.get(field);

      if(control instanceof UntypedFormControl){
        control.markAsTouched({onlySelf: true});
      }else if(control instanceof UntypedFormGroup || control instanceof UntypedFormArray){
        control.markAsTouched({onlySelf: true});
        this.validateAllFormFields(control);
      }

    });
  }

  getErrorMessage(formGroup: UntypedFormGroup, fieldname: string){
    const field = formGroup.get(fieldname) as UntypedFormControl;

    return this.getErrorFromField(field);
  }

  getErrorFromField(field: UntypedFormControl){
    if(field?.hasError('required')){
      return 'Campo obrigatorio.';
    }
    if(field?.hasError('minLength')){
      const requiredLength = field.errors ? field.errors['minlength']['requiredlength']: 5;
      return `Tamanho minimo de caracteres é de: ${requiredLength} do que o permitido.`;
    }
    if(field?.hasError('maxLength')){
      const requiredLength = field.errors ? field.errors['maxlength']['requiredlength']: 100;
      return `Tamanho maximo de caracteres é de: ${requiredLength} do que o permitido.`;
    }
    return 'erro';
  }

  getFormArrayFieldErrorMessage(formGroup: UntypedFormGroup, formArrayName: string, fieldName: string, index: number){
    const formArray = formGroup.get(formArrayName) as UntypedFormArray;
    const field = formArray.controls[index].get(fieldName) as UntypedFormControl;

    return this.getErrorFromField(field);
  }
}
