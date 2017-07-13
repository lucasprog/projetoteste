import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.scss']
})
export class ContaComponent implements OnInit {


  conta: any;
  total: any;

  constructor() {

    this.conta = [];
    this.total = {
      value : 0,
      view_value : ''
    };

  }

  ngOnInit() {
  }

  onSubmit(formulario){

    let view_value = ''+formulario.value.value;

    view_value = view_value.split('.').length > 1? view_value.split('.')[0]+','+view_value.split('.')[1] : view_value+',00';

    const obj = {
      type : formulario.value.typeAction,
      value : formulario.value.value,
      view_value : 'R$ '+view_value
    };

    this.conta.push(obj);

    if ( formulario.value.typeAction === '1'){
      this.total.value += parseFloat(formulario.value.value);
    }else{
      this.total.value -= parseFloat(formulario.value.value);
    }


    this.total.view_value = ''+this.total.value;

    this.total.view_value = this.total.view_value.split('.').length > 1? 'R$ '+this.total.view_value.split('.')[0]+','+this.total.view_value.split('.')[1] : 'R$ '+this.total.view_value+',00';

    formulario.reset();
  }

  onRemove( index ){

    const obj = this.conta[index];

    if( obj.type === '1'){

      this.total.value -= obj.value;

    }else{

      this.total.value += parseFloat(obj.value);

    }
      this.conta.splice(index,1);

    this.total.view_value = ''+this.total.value;

    this.total.view_value = this.total.view_value.split('.').length > 1? 'R$ '+this.total.view_value.split('.')[0]+','+this.total.view_value.split('.')[1] : 'R$ '+this.total.view_value+',00';

  }

}
