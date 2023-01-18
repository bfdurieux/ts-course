import { User } from './User';
import { Company } from './Company';
import { Map } from './Map';

let customMap = new Map('map');
let user = new User();
let company = new Company()
console.log(user);
console.log(company);
customMap.addMarker(user);
customMap.addMarker(company);
