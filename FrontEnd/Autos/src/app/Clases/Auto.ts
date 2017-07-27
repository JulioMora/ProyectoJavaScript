/**
 * Created by julio_000 on 27/07/2017.
 */
export class AutosClass {

  constructor(public marcaz:string,
              public id?:number,
              public modelo?:string,
              public anio?:string,
              public precio?: number,
              public foto?:string,
              public createdAt?:Date,
              public updatedAt?:Date,
              public editar?:boolean){
  }

}
