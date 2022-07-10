import { ElementRef } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Seller } from "@core/models/seller.interface";

export function changeViewError(mainForm: FormGroup, inputs: Array<ElementRef>): void{
    if(mainForm.status === 'INVALID') {
        inputs[2].nativeElement.classList.add('btn-disabled');
        inputs[0].nativeElement.parentNode.parentNode.classList.add('error');
        inputs[1].nativeElement.parentNode.parentNode.classList.add('error');
      } else {
        inputs[2].nativeElement.classList.remove('btn-disabled');
        inputs[0].nativeElement.parentNode.parentNode.classList.remove('error');
        inputs[1].nativeElement.parentNode.parentNode.classList.remove('error');
      }
  
      mainForm.valueChanges.subscribe((res) => {
        if(mainForm.status === 'INVALID') {
          inputs[2].nativeElement.classList.add('btn-disabled');
          inputs[0].nativeElement.parentNode.parentNode.classList.add('error');
          inputs[1].nativeElement.parentNode.parentNode.classList.add('error');
  
          
          if(res.userNameControl?.valueOf() != '') {
            inputs[4].nativeElement.classList.remove('disabled');
          }
          if (res.passwordControl?.valueOf() != '') {
            inputs[3].nativeElement.classList.remove('disabled');
          }
        } else {
          inputs[2].nativeElement.classList.remove('btn-disabled');
          inputs[0].nativeElement.parentNode.parentNode.classList.remove('error');
          inputs[1].nativeElement.parentNode.parentNode.classList.remove('error');
          
          
          if(res.userNameControl?.valueOf() != '') {
            inputs[4].nativeElement.classList.add('disabled');
          }
          if (res.passwordControl?.valueOf() != '') {
            inputs[3].nativeElement.classList.add('disabled');
          }
          
        }
    });
}

export function getSellerInfo(userInput: ElementRef, passwordInput: ElementRef): {
  message: string,
  seller: Seller } 
{
  let sellerInfo: Seller = {email: '', password: ''};

  if (userInput.nativeElement.value === '' || passwordInput.nativeElement.value === '') {
    return {
      message: 'Validate the inputs data',
      seller: sellerInfo
    }
  } else {
    sellerInfo.email = userInput.nativeElement.value;
    sellerInfo.password = passwordInput.nativeElement.value;

    return {
      message: 'Correct inputs data',
      seller: sellerInfo
    }
  }
}

export function nullToString(posiblyNull: string | null): string {
  return posiblyNull == null ? "" : posiblyNull.toString();
}